"use client";

import { LogoMark, WhatsAppIcon } from "./ui";
import { club, locations } from "@/lib/data";

export function Footer({ waLink }: { waLink: string }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--stroke)",
        background: "#050507",
        padding: "90px 40px 40px",
      }}
    >
      <div className="container-x" style={{ padding: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 50,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <LogoMark height={42} />
              <div
                className="nav-name"
                style={{ fontSize: 16, paddingLeft: 14, borderLeft: "1px solid var(--stroke)" }}
              >
                My Fitness Destination
                <small>Rohini · Mohit Tyagi</small>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--t2)",
                marginTop: 22,
                lineHeight: 1.6,
                maxWidth: 320,
              }}
            >
              Rohini&apos;s most loved gym. Two locations. One mission: help you become your best.
            </p>
            <a
              className="btn btn-secondary"
              href={waLink}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 22, padding: "12px 18px", fontSize: 13 }}
            >
              <WhatsAppIcon size={14} /> WhatsApp Mohit
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
              {[
                { l: "Instagram", h: club.social.instagram },
                { l: "Facebook", h: club.social.facebook },
                { l: "Reviews", h: club.social.googleReviews },
              ]
                .filter((s) => s.h)
                .map((s) => (
                  <a
                    key={s.l}
                    href={s.h as string}
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--t2)",
                      border: "1px solid var(--stroke)",
                      padding: "8px 12px",
                      borderRadius: 99,
                      transition: "all .2s",
                    }}
                  >
                    {s.l}
                  </a>
                ))}
            </div>
          </div>

          {locations.map((loc) => (
            <div key={loc.slug}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                }}
              >
                {loc.name}
              </h4>
              <p style={{ fontSize: 14, color: "var(--t1)", marginTop: 14, lineHeight: 1.7 }}>
                {loc.address.split(",").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line.trim()}
                  </span>
                ))}
              </p>
              <p style={{ fontSize: 13, color: "var(--t2)", marginTop: 12, lineHeight: 1.7 }}>
                <a href={`tel:${loc.phone}`} style={{ display: "block", color: "var(--t1)", fontWeight: 600 }}>
                  {loc.phoneDisplay}
                </a>
                <span>{loc.hours}</span>
              </p>
            </div>
          ))}

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
              }}
            >
              Members
            </h4>
            <p style={{ fontSize: 14, color: "var(--t1)", marginTop: 14, lineHeight: 1.9 }}>
              <a
                href={club.memberPortal}
                target="_blank"
                rel="noopener"
                style={{ display: "block", color: "var(--red-hot)", fontWeight: 600 }}
              >
                Member Portal ↗
              </a>
              <a href="#membership" style={{ display: "block", color: "var(--t2)" }}>
                Pricing & Plans
              </a>
              <a href="#programs" style={{ display: "block", color: "var(--t2)" }}>
                Class Schedule
              </a>
              <a href={waLink} target="_blank" rel="noopener" style={{ display: "block", color: "var(--t2)" }}>
                Contact Support
              </a>
            </p>
          </div>
        </div>

        <div className="divider" style={{ margin: "60px 0 28px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 11.5,
            color: "var(--t3)",
            letterSpacing: "0.06em",
          }}
        >
          <span>© 2026 My Fitness Destination · Owned & operated by Mohit Tyagi.</span>
          <span style={{ textAlign: "right" }}>Built for performance. Built for Rohini.</span>
        </div>
      </div>
    </footer>
  );
}
