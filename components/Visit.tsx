"use client";

import { Clock, Mail, MapPin, Navigation } from "lucide-react";
import { IconBadge, PhoneIcon, SectionHead, WhatsAppIcon } from "./ui";
import { club, locations, whatsappLocationLink } from "@/lib/data";

export function Visit({ waLink: _waLink }: { waLink: string }) {
  return (
    <section
      id="visit"
      style={{
        background: "linear-gradient(180deg, #050507 0%, #08080C 100%)",
        position: "relative",
      }}
    >
      <div className="container-x">
        <SectionHead
          eyebrow="Find Us"
          title={
            <>
              Two locations.<br />
              <span style={{ color: "var(--red)" }}>Same standard of excellence.</span>
            </>
          }
          sub="Whether you train at our flagship Sector 7 gym or the newer North Ex Mall location, you get the same world-class equipment, certified trainers, and the community that's earned us 1,544+ five-star reviews."
        />

        <div
          className="reveal stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {locations.map((loc) => (
            <LocationCard key={loc.slug} loc={loc} />
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <a
            href={`mailto:${club.email}`}
            className="btn btn-secondary"
            style={{ padding: "14px 22px" }}
          >
            <Mail size={16} strokeWidth={2.2} /> {club.email}
          </a>
          <a
            href={club.memberPortal}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
            style={{ padding: "14px 22px" }}
          >
            Existing member? Open portal ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ loc }: { loc: typeof locations[number] }) {
  const waLink = whatsappLocationLink(loc.slug as "sector-7" | "north-ex-mall");
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  return (
    <div
      className="glass glass-hover"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          background: "#0A0A0E",
          overflow: "hidden",
          borderBottom: "1px solid var(--stroke)",
        }}
      >
        <iframe
          title={`${loc.name} — Map`}
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            border: 0,
            filter: "grayscale(0.85) contrast(1.1) brightness(0.85)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,107,26,0.18), transparent 70%)",
            mixBlendMode: "screen",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            padding: "6px 12px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--red-hot)",
            border: "1px solid rgba(255,107,26,0.4)",
          }}
        >
          {loc.badge}
        </span>
      </div>
      <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        <div>
          <h3
            className="h-display"
            style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em" }}
          >
            {loc.name}
          </h3>
          <p style={{ marginTop: 8, color: "var(--t2)", fontSize: 14, lineHeight: 1.55 }}>
            {loc.address}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            paddingBlock: 14,
            borderBlock: "1px solid var(--stroke)",
          }}
        >
          <MetaItem icon={<Clock size={14} />} label="Hours" value={loc.hours} />
          <MetaItem
            icon={<PhoneIcon size={14} />}
            label="Phone"
            value={loc.phoneDisplay}
            href={`tel:${loc.phone}`}
          />
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            style={{ flex: 1, padding: "13px 18px", fontSize: 13 }}
          >
            <WhatsAppIcon size={16} /> Book Trial
          </a>
          <a
            href={loc.mapsUrl}
            target="_blank"
            rel="noopener"
            className="btn btn-secondary"
            style={{ flex: 1, padding: "13px 18px", fontSize: 13 }}
          >
            <Navigation size={14} strokeWidth={2.4} /> Directions
          </a>
        </div>
      </div>
    </div>
  );
}

function MetaItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--t3)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <IconBadge size={22}>{icon}</IconBadge>
        {label}
      </div>
      <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600, color: "var(--t1)" }}>
        {value}
      </div>
    </>
  );
  return href ? (
    <a href={href} style={{ display: "block" }}>
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}
