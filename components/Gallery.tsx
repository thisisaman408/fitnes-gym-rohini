"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryItems, videoBundle } from "@/lib/images";
import { LazyVideo } from "./LazyVideo";
import { club } from "@/lib/data";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const widths = [520, 380, 460, 420, 540, 380, 480, 420, 500];

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 0 120px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #08080C, var(--bg))",
      }}
    >
      <div className="container-x" style={{ padding: "0 40px", marginBottom: 36 }}>
        <div className="section-head reveal" style={{ marginBottom: 0 }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="eyebrow">From the Floor</span>
              <h2 className="h-display">
                Inside <span style={{ color: "var(--red)" }}>MFD.</span>
              </h2>
              <p className="body-lg" style={{ maxWidth: 620, marginTop: 18 }}>
                Real classes. Real members. Real results — straight from our floor at Sector 7
                and North Ex Mall.
              </p>
            </div>
            <a
              href={club.social.instagram}
              target="_blank"
              rel="noopener"
              style={{
                color: "var(--red-hot)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {club.social.instagramHandle} →
            </a>
          </div>
        </div>
      </div>
      <div
        ref={stripRef}
        style={{ display: "flex", gap: 18, padding: "0 40px", willChange: "transform" }}
      >
        {[...galleryItems, ...galleryItems.slice(0, 3)].map((item, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${widths[i % widths.length]}px`,
              height: 480,
              borderRadius: 18,
              overflow: "hidden",
              position: "relative",
              background: "#0A0A0E",
            }}
          >
            <LazyVideo
              bundle={videoBundle(item.name)}
              ariaLabel={item.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(7,7,10,0.18) 0%, transparent 35%, rgba(7,7,10,0.92) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 20,
                right: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--red)",
                  letterSpacing: "0.2em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--t2)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                MFD · Rohini
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
