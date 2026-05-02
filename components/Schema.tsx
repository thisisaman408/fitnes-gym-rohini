import { locations, club, reviewsAggregate, faqs } from "@/lib/data";

/**
 * LocalBusiness JSON-LD for both MFD branches + FAQPage schema.
 * Injected into <head> in app/layout.tsx — major SEO lever for local search.
 */
export function LocalBusinessSchema() {
  const localBusinesses = locations.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: `${club.name} — ${loc.name}`,
    image: `https://myfitnessdestination.in/og/${loc.slug}.jpg`,
    "@id": `https://myfitnessdestination.in/#${loc.slug}`,
    url: `https://myfitnessdestination.in`,
    telephone: loc.phone,
    priceRange: "₹6,000–₹15,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address.split(",").slice(0, 2).join(",").trim(),
      addressLocality: "Rohini",
      addressRegion: "Delhi",
      postalCode: "110085",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.coords.lat,
      longitude: loc.coords.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        opens: loc.hours.split(" – ")[0],
        closes: loc.hours.split(" – ")[1],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(reviewsAggregate.total),
    },
    founder: { "@type": "Person", name: club.founder },
    sameAs: [club.social.instagram, club.social.facebook].filter(Boolean),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {localBusinesses.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
