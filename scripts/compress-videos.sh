#!/usr/bin/env bash
# Compress /public/videos/*.mp4 into web-optimized H.264 mp4 + VP9 webm + JPG poster.
# Output: /public/videos-optimized/<name>.{mp4,webm,jpg}
#
# Tuning: 720p max, no audio (videos are muted), faststart for streaming,
# CRF tuned for ~1-2 Mbps which is plenty for a darkened, looping hero backdrop.
#
# Usage: ./scripts/compress-videos.sh        # process all
#        ./scripts/compress-videos.sh hero-group-class.mp4  # one file

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/videos"
OUT="$ROOT/public/videos-optimized"
mkdir -p "$OUT"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install with: brew install ffmpeg" >&2
  exit 1
fi

# Cap the longest side of any frame to 960px, preserving aspect & even dims.
# Source is 720x1280 portrait reels — at 540x960 they're still crisp behind the
# darkened hero overlay, and small enough for fast first paint on mobile.
SCALE_FILTER="scale='if(gt(iw,ih),min(960,iw),-2)':'if(gt(iw,ih),-2,min(960,ih))'"

compress_one() {
  local in="$1"
  local base
  base="$(basename "$in" .mp4)"
  local mp4_out="$OUT/${base}.mp4"
  local webm_out="$OUT/${base}.webm"
  local poster_out="$OUT/${base}.jpg"

  echo "→ $base"

  # Poster (first usable frame). Used as instant first paint while video loads.
  ffmpeg -y -loglevel error -ss 0.5 -i "$in" \
    -vf "$SCALE_FILTER" -frames:v 1 -q:v 5 "$poster_out"

  # H.264 mp4 — universal. Hard bitrate cap so 60s hero ≈ 7-8 MB instead of 21.
  # Two-pass would be smaller still but slow; single-pass with maxrate is fine here.
  ffmpeg -y -loglevel error -i "$in" \
    -an \
    -c:v libx264 -preset slow -crf 30 \
    -maxrate 1100k -bufsize 2200k \
    -profile:v main -level 4.0 -pix_fmt yuv420p \
    -vf "$SCALE_FILTER" \
    -movflags +faststart \
    "$mp4_out"

  # VP9 webm — Chrome/Firefox prefer this; smaller than mp4 at equal quality
  # *only when bitrate is constrained*. Without -b:v cap, libvpx-vp9 inflates.
  ffmpeg -y -loglevel error -i "$in" \
    -an \
    -c:v libvpx-vp9 -b:v 700k -maxrate 1000k -minrate 300k \
    -row-mt 1 -cpu-used 2 -tile-columns 2 \
    -vf "$SCALE_FILTER" \
    "$webm_out"

  local before after_mp4 after_webm
  before=$(du -h "$in" | awk '{print $1}')
  after_mp4=$(du -h "$mp4_out" | awk '{print $1}')
  after_webm=$(du -h "$webm_out" | awk '{print $1}')
  echo "   ${before} → mp4 ${after_mp4} · webm ${after_webm} · poster $(du -h "$poster_out" | awk '{print $1}')"
}

if [ $# -gt 0 ]; then
  compress_one "$SRC/$1"
else
  shopt -s nullglob
  for f in "$SRC"/*.mp4; do
    compress_one "$f"
  done
fi

echo
echo "Done. Total:"
du -sh "$OUT"
