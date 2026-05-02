"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon, FloatStat, PhoneIcon, WhatsAppIcon } from "./ui";
import { HeroCanvas } from "./HeroCanvas";
import { LazyVideo } from "./LazyVideo";
import { hero } from "@/lib/images";
import { club, heroStats } from "@/lib/data";

export function Hero({ onTrial, waLink }: { onTrial: () => void; waLink: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        yPercent: 14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      gsap.to(titleRef.current, {
        yPercent: -8,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      // Headline mask reveal
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.3,
      });
      gsap.from(".hero-eyebrow, .hero-sub, .hero-actions, .hero-trust", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.6,
      });
      // Brand-word animated gradient sweep
      gsap.fromTo(
        wordRef.current,
        { backgroundPosition: "200% 50%" },
        {
          backgroundPosition: "0% 50%",
          duration: 1.6,
          ease: "power2.out",
          delay: 1.2,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        padding: 0,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div ref={photoRef} style={{ position: "absolute", inset: "-5% 0", zIndex: 0, willChange: "transform" }}>
        <LazyVideo
          bundle={hero}
          ariaLabel="My Fitness Destination training floor"
          rootMargin="0px"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        {/* Darken + tint via overlays instead of CSS filter on the <video>.
            CSS filters on a playing video force a full-frame compositor repaint. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(95deg, rgba(7,7,10,0.97) 0%, rgba(7,7,10,0.85) 40%, rgba(7,7,10,0.62) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(60% 80% at 80% 50%, rgba(255,107,26,0.22), transparent 60%)",
          }}
        />
      </div>

      <HeroCanvas />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background: "linear-gradient(180deg, transparent, var(--bg))",
          zIndex: 2,
        }}
      />

      <div
        className="container-x hero-inner"
        style={{ position: "relative", zIndex: 3, padding: "140px 40px 100px", width: "100%" }}
      >
        <div ref={titleRef} style={{ maxWidth: 880 }}>
          <span className="eyebrow hero-eyebrow">{club.badge} · {club.founder}</span>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(46px, 8vw, 110px)", marginTop: 22, lineHeight: 0.95 }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span className="hero-line" style={{ display: "inline-block" }}>Dedicate yourself</span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span className="hero-line" style={{ display: "inline-block" }}>to become your{" "}
                <span
                  ref={wordRef}
                  style={{
                    background:
                      "linear-gradient(90deg, #FF6B1A 0%, #FFA500 25%, #FF6B1A 50%, #FFA500 75%, #FF6B1A 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontStyle: "italic",
                  }}
                >
                  BEST.
                </span>
              </span>
            </span>
          </h1>
          <p className="body-lg hero-sub" style={{ marginTop: 28, maxWidth: 580, fontSize: 19 }}>
            Two locations across Rohini. 1,000+ active members. World-class equipment, certified
            trainers, and a community that pushes you forward — every single day.
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={onTrial}>
              Book Free Trial <ArrowIcon size={14} />
            </button>
            <a
              className="btn btn-primary"
              href={waLink}
              target="_blank"
              rel="noopener"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow:
                  "0 14px 40px -10px rgba(37,211,102,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <WhatsAppIcon size={16} /> WhatsApp Mohit
            </a>
            <a className="btn btn-secondary" href={`tel:${club.phone1}`}>
              <PhoneIcon size={14} /> {club.phone1}
            </a>
          </div>

          <div
            className="hero-trust"
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              fontSize: 12,
              color: "var(--t3)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span>
              <span style={{ color: "var(--red)" }}>●</span>&nbsp;&nbsp;Open today · 5:00 — 23:00
            </span>
            <span>Sector 7 + North Ex Mall · Rohini</span>
            <span>4.9 ★ · 1,544 reviews</span>
          </div>
        </div>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} className="hide-mobile">
          <FloatStat v={heroStats[0].v} u={heroStats[0].u} l={heroStats[0].l} x="64%" y="22%" delay={0.4} />
          <FloatStat v={heroStats[1].v} u={heroStats[1].u} l={heroStats[1].l} x="76%" y="48%" delay={0.7} />
          <FloatStat v={heroStats[2].v} u={heroStats[2].u} l={heroStats[2].l} x="60%" y="72%" delay={1.0} />
        </div>
      </div>
    </section>
  );
}
