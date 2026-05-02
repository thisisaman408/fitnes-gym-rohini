"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? scrolled / max : 0;
      document.documentElement.style.setProperty("--p", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" aria-hidden />;
}
