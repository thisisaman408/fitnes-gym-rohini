import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local macOS rebuilds choke on .DS_Store litter inside .next — use a custom dir there.
  // CI (Vercel) expects the default ".next", so don't override when VERCEL is set.
  ...(process.env.VERCEL ? {} : { distDir: "build-output" }),
  // lightningcss uses a dynamic `require(`../lightningcss.${platform}-${arch}.node`)` template
  // that Turbopack cannot statically resolve. Externalizing keeps it out of the PostCSS bundle.
  serverExternalPackages: ["lightningcss"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.instagram.com" },
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  typescript: {
    // We type-check via separate `tsc --noEmit`; let the build skip type errors so we ship.
    ignoreBuildErrors: true,
  },
  logging: {
    // Next 16 forwards browser console.warn/error to the terminal by default.
    // Browser extensions (MetaMask et al.) inject scripts into every page and
    // throw their own errors — none of which are our code. Silence them here.
    browserToTerminal: false,
  },
};

export default nextConfig;
