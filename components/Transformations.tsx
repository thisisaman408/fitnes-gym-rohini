"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "./ui";
import { transformations } from "@/lib/data";

export function Transformations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".transform-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.from(".transform-stat", {
        textContent: 0,
        duration: 1.6,
        ease: "power3.out",
        stagger: 0.12,
        snap: { textContent: 1 },
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="transformations" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #0A0A0F 100%)" }}>
      <div className="container-x">
        <SectionHead
          eyebrow="Real Results"
          title={
            <>
              Real members.
              <br />
              <span style={{ color: "var(--red)" }}>Real transformations.</span>
            </>
          }
          sub="Not stock photos. Not paid models. These are MFD members who showed up, stayed consistent, and changed their lives."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 22,
          }}
        >
          {transformations.map((t, i) => (
            <article
              key={i}
              className="transform-card glass glass-hover"
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: 22,
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(120% 80% at 50% 50%, rgba(255,107,26,0.18), transparent 60%)",
                  }}
                />
                <div
                  className="brand-text"
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(48px, 6vw, 76px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    position: "relative",
                  }}
                >
                  <span className="transform-stat">{parseInt(t.stat.replace(/[^0-9-]/g, ""))}</span>
                  <span style={{ marginLeft: 4 }}>kg</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    padding: "5px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--red-hot)",
                    border: "1px solid rgba(255,107,26,0.4)",
                  }}
                >
                  {t.timeframe}
                </div>
              </div>
              <div style={{ padding: "26px 28px 30px" }}>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t.name}, {t.age}
                </div>
                <p style={{ fontSize: 14, color: "var(--t2)", marginTop: 12, lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
