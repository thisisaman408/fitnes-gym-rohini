// My Fitness Destination — Mohit Tyagi · Rohini, Delhi
// Data sourced from owner's existing Justdial, Google, and Instagram presence.

export const club = {
  name: "My Fitness Destination",
  shortName: "MFD",
  badge: "Rohini · Est. 2019",
  tagline: "Dedicate yourself to become your BEST",
  founder: "Mohit Tyagi",
  location: "Two locations across Rohini · Sector 7 (flagship) + North Ex Mall, Sector 9",
  sqft: "10,000+",
  phone1: "+91 93107 08676",
  phone2: "+91 97119 66533",
  phone3: "",
  whatsapp: "919310708676",
  whatsapp2: "919711966533",
  email: "info@myfitnessdestination.in",
  hoursWeek: "Mon – Sun · 5:00 AM – 11:00 PM",
  hoursSun: "Open every day · Same timings",
  memberPortal:
    "https://2024.geteasysoftware.com/fitness_destination/webapp/index.php?branch_id=UzN4eE9JUEUzaUltOERvTTJKVVNGUT09",
  social: {
    instagram: "https://www.instagram.com/myfitness_destination/",
    instagramHandle: "@myfitness_destination",
    facebook: "https://www.facebook.com/myfitnessdestination",
    youtube: "",
    googleReviews:
      "https://www.google.com/search?q=My+Fitness+Destination+Rohini+reviews",
  },
} as const;

export const locations = [
  {
    slug: "sector-7",
    name: "Sector 7 (Flagship)",
    badge: "Original · Since 2019",
    address: "12, Block-C, Pocket 9, Sector 7, Rohini, New Delhi 110085",
    addressShort: "Sector 7, Rohini",
    phone: "+919310708676",
    phoneDisplay: "+91 93107 08676",
    hours: "5:00 AM – 11:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/My+Fitness+Destination+Sector+7+Rohini",
    coords: { lat: 28.7041, lng: 77.1025 },
  },
  {
    slug: "north-ex-mall",
    name: "North Ex Mall, Sector 9",
    badge: "New · Mall Location",
    address:
      "Shop No 301, North Ex Mall, Sector 9, Rohini, New Delhi 110085",
    addressShort: "North Ex Mall, Rohini",
    phone: "+919711966533",
    phoneDisplay: "+91 97119 66533",
    hours: "6:00 AM – 11:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/My+Fitness+Destination+North+Ex+Mall+Rohini",
    coords: { lat: 28.718, lng: 77.109 },
  },
] as const;

export const reviewsAggregate = {
  google: { rating: 4.9, count: 475 },
  justdial: { rating: 4.9, count: 1069 },
  total: 1544,
} as const;

export const heroStats = [
  { v: "1,000+", u: "members", l: "Active community" },
  { v: "4.9★", u: "rating", l: "1,544 reviews" },
  { v: "2", u: "locations", l: "Across Rohini" },
];

export const storyCards = [
  {
    t: "Strength Floor",
    d: "Free weights, racks, plates, platforms — everything you need to lift heavy and lift right.",
    tag: "Power",
  },
  {
    t: "Group Exercise Studio",
    d: "HIIT, Step, Zumba, Bollywood — high-energy classes that turn workouts into a community.",
    tag: "Energy",
  },
  {
    t: "Cardio Zone",
    d: "Treadmills, ellipticals, bikes — modern equipment for fat-loss and endurance training.",
    tag: "Conditioning",
  },
  {
    t: "MMA & Combat",
    d: "Boxing bags, kickboxing space, conditioning rigs — fight-style training for everyone.",
    tag: "Combat",
  },
  {
    t: "Yoga & Mobility",
    d: "Dedicated mat space for Hatha, Vinyasa, mobility flows. Mornings and evenings, both branches.",
    tag: "Recovery",
  },
  {
    t: "Personal Training",
    d: "1-on-1 coaching with assessment, programming, and weekly accountability check-ins.",
    tag: "Coaching",
  },
  {
    t: "Kids Dance Classes",
    d: "Bollywood + Hip-Hop for ages 7–14. Mon–Fri morning and evening batches.",
    tag: "Family",
  },
  {
    t: "Nutrition Counselling",
    d: "Personalised diet plans built around your goals — included in PT packages.",
    tag: "Fuel",
  },
] as const;

export const programs = [
  {
    code: "01",
    t: "HIIT",
    d: "High-intensity intervals. 45-min sessions that torch fat and build athleticism.",
  },
  {
    code: "02",
    t: "Personal Training",
    d: "1-on-1 coaching with our top trainers. Custom plan, custom nutrition, weekly check-ins.",
  },
  {
    code: "03",
    t: "Strength & Powerlifting",
    d: "Heavy compound lifts. Free weights, racks, platforms. Pure strength work.",
  },
  {
    code: "04",
    t: "Yoga & Flexibility",
    d: "Hatha, Vinyasa, mobility flows. Mornings + evenings, both locations.",
  },
  {
    code: "05",
    t: "MMA & Combat",
    d: "Boxing, Muay Thai, kickboxing. Conditioning and self-defence in one package.",
  },
  {
    code: "06",
    t: "Group Cardio",
    d: "Step aerobics, Zumba, treadmill HIIT. High-energy group classes daily.",
  },
  {
    code: "07",
    t: "Kids Dance",
    d: "Bollywood + Hip-Hop for ages 7–14. Structured curriculum, certified coaches.",
  },
];

export const classes = [
  "HIIT",
  "Step Aerobics",
  "Zumba",
  "Bollywood Dance",
  "Hip-Hop",
  "Yoga",
  "Boxing",
  "Kickboxing",
  "Cross Training",
  "Spin",
  "Power Yoga",
  "Strength Circuit",
];

export const coaches = [
  {
    n: "01",
    t: "Fat loss & body recomposition",
    d: "Tailored programmes, nutrition handoffs, weekly progress tracking with Vikram-led PT team.",
  },
  {
    n: "02",
    t: "Strength & hypertrophy",
    d: "Periodised programming for size and performance. Compound-led, data driven.",
  },
  {
    n: "03",
    t: "Functional & athletic training",
    d: "Real-world strength: stability, balance, core and unilateral work.",
  },
  {
    n: "04",
    t: "Mobility & posture correction",
    d: "Desk-body fixes, joint mobility, FRC-style protocols.",
  },
  {
    n: "05",
    t: "Boxing & HIIT",
    d: "Pad-work, intervals and conditioning for athletic shape and stamina.",
  },
  {
    n: "06",
    t: "Pre / post-natal training",
    d: "Certified, hormone-aware programming through every trimester and recovery.",
  },
];

export const facilities = [
  "Group Exercise",
  "Strength Floor",
  "Cardio Area",
  "Free Weights",
  "Personal Training",
  "Yoga Studio",
  "MMA Space",
  "Kids Dance Floor",
  "Locker Rooms",
  "Shower Area",
  "Reception Lounge",
  "Nutrition Counselling",
];

export const pricingPlans = [
  {
    code: "Q",
    name: "Quarterly",
    price: 6000,
    period: "3 months · ₹2,000/month",
    features: [
      "Unlimited gym access",
      "All group classes included",
      "1 free fitness consultation",
      "Locker access",
      "Both locations valid",
    ],
    featured: false,
  },
  {
    code: "A",
    name: "Annual",
    price: 15000,
    period: "12 months + 3 months FREE",
    features: [
      "Everything in Quarterly",
      "3 bonus months (15 months total)",
      "2 free PT sessions",
      "Personalised nutrition plan",
      "Priority class booking",
      "Member-only events",
    ],
    featured: true,
    badge: "Best Value",
  },
  {
    code: "PT",
    name: "PT Package",
    price: 12000,
    period: "12 sessions · 1-on-1 coaching",
    features: [
      "12 personal training sessions",
      "Custom workout plan",
      "Custom nutrition plan",
      "Progress tracking + reviews",
      "Pairs with any membership",
    ],
    featured: false,
  },
];

export const reviews = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    source: "Google",
    when: "2 weeks ago",
    text: "Joined MFD 6 months ago and lost 14kg. The trainers actually understand your body, your goals, and design workouts that work for YOU. Mohit sir personally checks in every few weeks. Best gym in Rohini, hands down.",
  },
  {
    name: "Ananya Singh",
    initials: "AS",
    source: "Google",
    when: "1 month ago",
    text: "Vikram is a phenomenal coach — knowledgeable about both fitness AND nutrition. I've been a member for over a year and I genuinely look forward to coming. The community here is something else.",
  },
  {
    name: "Deepak Verma",
    initials: "DV",
    source: "Justdial",
    when: "3 weeks ago",
    text: "Tried 3 other gyms in Rohini before settling here. The equipment is top-tier, both locations are clean and well-maintained, and the staff actually motivates you. Worth every rupee.",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    source: "Google",
    when: "5 days ago",
    text: "The yoga and HIIT combo at the North Ex Mall branch is perfect for working professionals. Easy to drop in after work, classes start on time, trainers are encouraging without being pushy.",
  },
  {
    name: "Aakash Sharma",
    initials: "AS",
    source: "Justdial",
    when: "1 week ago",
    text: "Did the 12-month annual plan and used the bonus 3 months to crack my powerlifting goals. Built 12kg of lean muscle with Vikram's program. Best investment I've made for my health.",
  },
  {
    name: "Sneha Kapoor",
    initials: "SK",
    source: "Google",
    when: "2 months ago",
    text: "Postpartum I was lost. The post-natal yoga + HIIT combo helped me lose 14kg without burning out. The women-only timings and the kids dance class for my daughter make this a family-fit space.",
  },
];

export const transformations = [
  {
    name: "Rohit",
    age: 32,
    stat: "−18 kg",
    timeframe: "8 months",
    quote:
      "I joined MFD weighing 92kg with high BP. Eight months later — 74kg, off medication, and stronger than I've ever been.",
  },
  {
    name: "Aakash",
    age: 24,
    stat: "+12 kg muscle",
    timeframe: "10 months",
    quote:
      "Vikram sir built me a powerlifting program. Went from 65kg lean to 77kg with proper nutrition guidance.",
  },
  {
    name: "Sneha",
    age: 29,
    stat: "−14 kg",
    timeframe: "6 months",
    quote:
      "Post-pregnancy I felt lost. The HIIT + yoga combo at MFD helped me lose the weight without burning out.",
  },
];

export const faqs = [
  {
    q: "How does the free trial work?",
    a: "Walk in to either location, no card required. You'll get a full session with one of our trainers — class, PT taster, or floor workout, your choice. We don't ask for payment until you decide MFD is right for you.",
  },
  {
    q: "Are there separate fees for group classes?",
    a: "No. All our memberships include unlimited group classes (HIIT, Yoga, Step, Zumba, Bollywood, Kickboxing) at both locations. Premium PT sessions are the only paid add-on.",
  },
  {
    q: "What's the difference between Quarterly and Annual?",
    a: "Annual saves you ₹9,000+ vs paying quarterly four times, plus you get 3 bonus months free (15 total months) and 2 free PT sessions. It's the plan 80% of our members renew on.",
  },
  {
    q: "Do you have separate timings for women?",
    a: "Yes. Both locations have dedicated women's hours (10 AM – 1 PM weekdays) plus women-only group classes throughout the week — Zumba, yoga, HIIT.",
  },
  {
    q: "Is there parking at both locations?",
    a: "Sector 7: free street parking + designated spots for members. North Ex Mall: validated mall parking included with membership card.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes — annual members can freeze for up to 30 days/year (medical or travel). Quarterly members can freeze for up to 14 days. WhatsApp Mohit to activate.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We don't lock you in. Quarterly: prorated refund within 7 days. Annual: prorated refund within 14 days, no questions asked. We'd rather you stay because you love it.",
  },
  {
    q: "Do you offer corporate / family discounts?",
    a: "Yes — 3+ members from the same household or company get 15% off Annual plans. WhatsApp Mohit on +91 93107 08676 for a custom quote.",
  },
];

export const funnel = [
  {
    step: "01",
    t: "Find us on Google or Instagram",
    d: "Where Rohini members find us today.",
    metric: "Discover",
  },
  {
    step: "02",
    t: "Tap WhatsApp on the website",
    d: "One tap. Real conversation, no contact form maze.",
    metric: "Engage",
  },
  {
    step: "03",
    t: "Free first class",
    d: "Walk in to Sector 7 or North Ex Mall. No card. No pressure.",
    metric: "Try",
  },
  {
    step: "04",
    t: "Trainer assessment",
    d: "Body comp, fitness level, goal mapping with a senior coach.",
    metric: "Assess",
  },
  {
    step: "05",
    t: "Pick your plan, start training",
    d: "Quarterly, Annual, or PT pack. Same-day membership activation.",
    metric: "Commit",
  },
];

export const futureScope = [
  { t: "Live class timetable", d: "Pull weekly schedule from GetEasySoftware portal." },
  { t: "Online booking", d: "Reserve PT slots and group classes from the website." },
  { t: "Trainer profile pages", d: "Bios, specialisations, bookable slots." },
  { t: "Member dashboard", d: "Workout history, billing, freeze requests in one place." },
  { t: "Google Reviews integration", d: "Live 4.9★ social proof, auto-refreshed." },
  { t: "Instagram feed embed", d: "Latest reels and stories embedded native." },
  { t: "WhatsApp automation", d: "Auto-replies, lead routing, drip nurture." },
  { t: "Referral programme", d: "Members earn free months for every signup they bring." },
  { t: "Transformation tracker", d: "Public leaderboard for member progress." },
  { t: "Razorpay subscriptions", d: "Frictionless single-tap membership purchase." },
];

export function whatsappLink({
  name = "",
  goal = "",
  time = "",
  location = "",
}: { name?: string; goal?: string; time?: string; location?: string } = {}) {
  const text =
    `Hi My Fitness Destination, I want to claim a free trial.` +
    (location ? ` Location: ${location}.` : "") +
    (goal ? ` My goal is ${goal}.` : "") +
    (time ? ` Preferred time: ${time}.` : "") +
    (name ? ` My name is ${name}.` : "");
  return `https://wa.me/${club.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function whatsappLocationLink(loc: "sector-7" | "north-ex-mall") {
  const target = loc === "sector-7" ? club.whatsapp : club.whatsapp2;
  const branch =
    loc === "sector-7" ? "Sector 7 (Flagship)" : "North Ex Mall";
  const text = `Hi! I want to book a free trial at My Fitness Destination — ${branch} branch. Please share details.`;
  return `https://wa.me/${target}?text=${encodeURIComponent(text)}`;
}
