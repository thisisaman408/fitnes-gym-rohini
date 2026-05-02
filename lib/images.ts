// MFD asset map — all media is local, served from /public.
// Videos sourced from Mohit's Instagram reels, compressed by scripts/compress-videos.sh.

export const brand = {
  logoMark: "/brand/mfd-mark.svg",
  logoFull: "/brand/mfd-logo.svg",
};

// Compressed videos live in /videos-optimized as both .mp4 (H.264) and .webm (VP9),
// with a JPG poster of the same name. Helpers below produce the trio for any base name.
const V = "/videos-optimized";

export type VideoBundle = {
  poster: string;
  sources: { src: string; type: string }[];
};

export const videoBundle = (name: string): VideoBundle => ({
  poster: `${V}/${name}.jpg`,
  sources: [
    { src: `${V}/${name}.webm`, type: "video/webm" },
    { src: `${V}/${name}.mp4`, type: "video/mp4" },
  ],
});

export const heroVideos = ["hero-group-class", "training-floor", "cardio-zone", "lat-pulldown"];

export const hero = videoBundle("hero-group-class");

export const sectionVideos = {
  story: videoBundle("training-floor"),
  programs: videoBundle("cardio-zone"),
  coaches: videoBundle("lat-pulldown"),
  visit: videoBundle("hero-group-class"),
} as const;

export const galleryItems = [
  { name: "hero-group-class", alt: "Group class energy" },
  { name: "training-floor", alt: "Strength floor" },
  { name: "cardio-zone", alt: "Cardio zone" },
  { name: "lat-pulldown", alt: "Lat pulldown technique" },
  { name: "hero-group-class", alt: "Group class energy" },
  { name: "training-floor", alt: "Strength floor" },
  { name: "cardio-zone", alt: "Cardio zone" },
  { name: "lat-pulldown", alt: "Lat pulldown technique" },
];

export const programVideos: Record<string, VideoBundle> = {
  HIIT: videoBundle("hero-group-class"),
  "Personal Training": videoBundle("lat-pulldown"),
  "Strength & Powerlifting": videoBundle("training-floor"),
  "Yoga & Flexibility": videoBundle("training-floor"),
  "MMA & Combat": videoBundle("training-floor"),
  "Group Cardio": videoBundle("cardio-zone"),
  "Kids Dance": videoBundle("hero-group-class"),
};

export const storyImages: Record<string, VideoBundle> = {
  "Strength Floor": videoBundle("training-floor"),
  "Group Exercise Studio": videoBundle("hero-group-class"),
  "Cardio Zone": videoBundle("cardio-zone"),
  "MMA & Combat": videoBundle("training-floor"),
  "Yoga & Mobility": videoBundle("training-floor"),
  "Personal Training": videoBundle("lat-pulldown"),
  "Kids Dance Classes": videoBundle("hero-group-class"),
  "Nutrition Counselling": videoBundle("cardio-zone"),
};

// Trainer roster — placeholder avatars; swap when Mohit sends real headshots
export const trainers = [
  {
    name: "Mohit Tyagi",
    spec: "Founder · Strength & Programming",
    cert: "ACSM-CPT",
    years: 12,
    src: "/trainers/placeholder.svg",
    initials: "MT",
    featured: true,
  },
  {
    name: "Vikram",
    spec: "Head PT · Transformations",
    cert: "ACE-CPT",
    years: 9,
    src: "/trainers/placeholder.svg",
    initials: "V",
    featured: true,
  },
  {
    name: "Priya Sharma",
    spec: "Yoga · Mobility · Pre/post-natal",
    cert: "RYT-500",
    years: 7,
    src: "/trainers/placeholder.svg",
    initials: "PS",
    featured: false,
  },
  {
    name: "Rahul Singh",
    spec: "HIIT · Combat Sports · Conditioning",
    cert: "ISSA",
    years: 6,
    src: "/trainers/placeholder.svg",
    initials: "RS",
    featured: false,
  },
  {
    name: "Neha Verma",
    spec: "Zumba · Bollywood · Kids Dance",
    cert: "Zumba ZIN",
    years: 5,
    src: "/trainers/placeholder.svg",
    initials: "NV",
    featured: false,
  },
  {
    name: "Arjun Kapoor",
    spec: "Boxing · Kickboxing · Functional",
    cert: "REPs L3",
    years: 8,
    src: "/trainers/placeholder.svg",
    initials: "AK",
    featured: false,
  },
];

export const facilityIcons: Record<string, string> = {};
