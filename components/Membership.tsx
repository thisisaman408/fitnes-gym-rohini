"use client";

import { ArrowIcon, Tag } from "./ui";
import { pricingPlans, whatsappLink } from "@/lib/data";

export function Membership({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="membership" style={{ background: "#08080C" }}>
      <div className="container-x">
        <div className="reveal" style={{ marginBottom: 60, maxWidth: 760 }}>
          <span className="eyebrow">Membership Plans</span>
          <h2 className="h-display" style={{ fontSize: "clamp(36px, 5vw, 68px)", marginTop: 18 }}>
            Pricing built for{" "}
            <span style={{ color: "var(--red)" }}>commitment.</span>
          </h2>
          <p className="body-lg" style={{ marginTop: 22, maxWidth: 560 }}>
            No hidden fees. No surprise charges. Pick a plan, walk in tomorrow, train today.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {pricingPlans.map((p) => {
            const waLink = whatsappLink({ goal: `${p.name} plan` });
            return (
              <div
                key={p.code}
                className="glass-hover"
                style={{
                  padding: "36px 30px",
                  borderRadius: 22,
                  position: "relative",
                  background: p.featured
                    ? "linear-gradient(180deg, rgba(255,107,26,0.12) 0%, rgba(255,107,26,0.02) 100%)"
                    : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                  border: p.featured
                    ? "1px solid rgba(255,107,26,0.5)"
                    : "1px solid var(--stroke)",
                  boxShadow: p.featured
                    ? "0 30px 60px -20px rgba(255,107,26,0.35)"
                    : "none",
                }}
              >
                {p.featured && p.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--gradient-brand)",
                      color: "#0A0A0A",
                      padding: "5px 14px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.badge}
                  </span>
                )}

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--t3)",
                    marginBottom: 12,
                  }}
                >
                  {p.name}
                </div>

                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(40px, 5vw, 56px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ fontSize: "0.5em", verticalAlign: "super", marginRight: 4 }}>₹</span>
                  {p.price.toLocaleString("en-IN")}
                </div>
                <p style={{ fontSize: 14, color: "var(--t2)", marginTop: 6, marginBottom: 24 }}>
                  {p.period}
                </p>

                <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {p.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        padding: "9px 0",
                        fontSize: 14,
                        color: "var(--t1)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--red)",
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    background: p.featured
                      ? "var(--gradient-brand)"
                      : "rgba(255,255,255,0.05)",
                    color: p.featured ? "#0A0A0A" : "var(--t0)",
                    border: p.featured ? "none" : "1px solid var(--stroke-hi)",
                    boxShadow: p.featured
                      ? "0 14px 40px -10px rgba(255,107,26,0.5)"
                      : "none",
                    padding: "14px 18px",
                    fontSize: 13,
                  }}
                >
                  Get Started <ArrowIcon size={14} />
                </a>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <Tag tone="mute">First class always free · No card required</Tag>
          <button onClick={onRequest} className="btn btn-ghost" style={{ padding: "12px 18px", fontSize: 13 }}>
            Talk to a coach <ArrowIcon size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
