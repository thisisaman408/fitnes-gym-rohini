"use client";

import { useEffect, useState } from "react";
import { LogoMark, PhoneIcon } from "./ui";
import { club } from "@/lib/data";

export function Nav({ onTrial }: { onTrial: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <LogoMark height={36} />
        <div
          className="nav-name hide-mobile"
          style={{ paddingLeft: 14, borderLeft: "1px solid var(--stroke)", marginLeft: 4 }}
        >
          My Fitness Destination
          <small>Rohini · Sector 7 + North Ex Mall</small>
        </div>
      </div>
      <div className="nav-links">
        <a href="#story">The Club</a>
        <a href="#programs">Programs</a>
        <a href="#coaches">Trainers</a>
        <a href="#membership">Pricing</a>
        <a href="#visit">Locations</a>
        <a
          href={club.memberPortal}
          target="_blank"
          rel="noopener"
          style={{ color: "var(--red-hot)" }}
        >
          Members ↗
        </a>
      </div>
      <div className="nav-cta-group">
        <a className="nav-phone hide-mobile" href={`tel:${club.phone1}`} aria-label={`Call ${club.phone1}`}>
          <PhoneIcon size={14} />
          <span>{club.phone1}</span>
        </a>
        <button className="btn btn-primary nav-claim" onClick={onTrial}>
          Free Trial
        </button>
      </div>
    </nav>
  );
}
