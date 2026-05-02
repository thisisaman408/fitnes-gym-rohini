"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "./ui";
import { reviews, reviewsAggregate } from "@/lib/data";

/**
 * Dual-row marquee of Google + Justdial reviews.
 * Top row scrolls right→left, bottom row left→right. Pause on hover.
 */
export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".rating-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.from(".rating-num", {
        textContent: 0,
        duration: 1.6,
        ease: "power3.out",
        snap: { textContent: 0.1 },
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const half = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, half);
  const row2 = reviews.slice(half);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      style={{
        background: "linear-gradient(180deg, #06060A 0%, #0A0A0F 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-x">
        <SectionHead
          eyebrow="What Members Say"
          title={
            <>
              Rohini&apos;s <span style={{ color: "var(--red)" }}>highest-rated</span> gym.
            </>
          }
        />

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <div
            className="rating-card glass"
            style={{
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <div
              className="rating-num brand-text"
              style={{
                fontFamily: "var(--display)",
                fontSize: 56,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              4.9
            </div>
            <div>
              <div style={{ color: "var(--red-hot)", fontSize: 18, letterSpacing: 4 }}>★★★★★</div>
              <div style={{ fontSize: 13, color: "var(--t2)", marginTop: 4 }}>
                <strong style={{ color: "var(--t0)", fontWeight: 700 }}>
                  {reviewsAggregate.total.toLocaleString("en-IN")}
                </strong>{" "}
                reviews · Google + Justdial
              </div>
            </div>
          </div>
          <div
            className="rating-card glass"
            style={{ padding: "20px 26px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--t3)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Google
            </span>
            <span style={{ fontFamily: "var(--display)", fontSize: 26, fontWeight: 800 }}>
              4.9 · {reviewsAggregate.google.count}
            </span>
          </div>
          <div
            className="rating-card glass"
            style={{ padding: "20px 26px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--t3)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Justdial
            </span>
            <span style={{ fontFamily: "var(--display)", fontSize: 26, fontWeight: 800 }}>
              4.9 · {reviewsAggregate.justdial.count.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      <Marquee items={row1} direction="left" />
      <div style={{ height: 18 }} />
      <Marquee items={row2} direction="right" />
    </section>
  );
}

function Marquee({
  items,
  direction,
}: {
  items: typeof reviews;
  direction: "left" | "right";
}) {
  const dur = 60;
  const animation =
    direction === "left"
      ? "marquee " + dur + "s linear infinite"
      : "marqueeR " + dur + "s linear infinite";
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 18,
          width: "max-content",
          animation,
          willChange: "transform",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...items, ...items, ...items].map((r, i) => (
          <article
            key={i}
            className="glass glass-hover"
            style={{
              flex: "0 0 380px",
              padding: 26,
              borderRadius: 18,
            }}
          >
            <div style={{ color: "var(--red-hot)", letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--t1)",
                marginBottom: 18,
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              &ldquo;{r.text}&rdquo;
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingTop: 14,
                borderTop: "1px solid var(--stroke)",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 99,
                  background: "var(--gradient-brand)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  color: "#0A0A0A",
                  fontSize: 13,
                }}
              >
                {r.initials}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{r.name}</div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "var(--t3)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {r.source} · {r.when}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        @keyframes marqueeR {
          from {
            transform: translateX(-33.33%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
