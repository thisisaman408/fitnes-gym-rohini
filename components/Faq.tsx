"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "./ui";
import { faqs } from "@/lib/data";

export function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <SectionHead
          eyebrow="Common Questions"
          title={
            <>
              Things people <span style={{ color: "var(--red)" }}>ask</span> before joining.
            </>
          }
          sub="Honest answers, no upsell. If anything else is unclear — message Mohit directly on WhatsApp, the floor team replies fast."
        />

        <div style={{ maxWidth: 820, marginInline: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="faq-item glass"
                style={{
                  padding: "22px 26px",
                  borderRadius: 16,
                  display: "block",
                  textAlign: "left",
                  width: "100%",
                  cursor: "pointer",
                  borderColor: isOpen ? "rgba(255,107,26,0.45)" : undefined,
                  background: isOpen
                    ? "linear-gradient(180deg, rgba(255,107,26,0.06), rgba(255,255,255,0.02))"
                    : undefined,
                  transition: "all .35s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 18,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 17,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                      color: isOpen ? "var(--t0)" : "var(--t1)",
                    }}
                  >
                    {f.q}
                  </h3>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: 99,
                      border: `1px solid ${isOpen ? "var(--red)" : "var(--stroke-hi)"}`,
                      display: "grid",
                      placeItems: "center",
                      transition: "all .3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: isOpen ? "var(--red)" : "var(--t2)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height .4s cubic-bezier(.2,.8,.2,1), opacity .35s ease, margin-top .35s",
                    marginTop: isOpen ? 14 : 0,
                  }}
                >
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--t2)" }}>{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
