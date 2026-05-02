"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import type { VideoBundle } from "@/lib/images";

// Renders a <video> that:
//   - shows the poster instantly (no decode cost)
//   - mounts <source> children only when the element is near the viewport
//   - pauses when scrolled offscreen, freeing the decoder
//
// IMPORTANT: do not put any CSS `filter` on the <video> element — it forces a
// full-frame GPU repaint per video frame. Use a sibling overlay div instead.
export function LazyVideo({
  bundle,
  className,
  style,
  ariaLabel,
  rootMargin = "300px",
}: {
  bundle: VideoBundle;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let mounted = false;

    const mount = () => {
      if (mounted) return;
      mounted = true;
      for (const s of bundle.sources) {
        const el = document.createElement("source");
        el.src = s.src;
        el.type = s.type;
        v.appendChild(el);
      }
      v.load();
      v.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            mount();
            v.play().catch(() => {});
          } else if (mounted) {
            v.pause();
          }
        }
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [bundle, rootMargin]);

  return (
    <video
      ref={ref}
      poster={bundle.poster}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-label={ariaLabel}
      className={className}
      style={style}
    />
  );
}
