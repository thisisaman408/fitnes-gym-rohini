import {
  Activity,
  Dumbbell,
  Flame,
  HeartPulse,
  Music2,
  PersonStanding,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const programIconByCode: Record<string, LucideIcon> = {
  "01": Flame,             // HIIT
  "02": Target,            // Personal Training
  "03": Dumbbell,          // Strength & Powerlifting
  "04": PersonStanding,    // Yoga & Flexibility
  "05": Activity,          // MMA & Combat
  "06": HeartPulse,        // Group Cardio
  "07": Music2,            // Kids Dance
  "08": TrendingUp,        // Build Your Plan (CTA)
};

import {
  Award,
  Baby,
  ShieldCheck,
  Stethoscope,
  Swords,
  Weight,
} from "lucide-react";

export const coachIconByNumber: Record<string, LucideIcon> = {
  "01": Flame,         // Fat loss
  "02": Weight,        // Strength & hypertrophy
  "03": Award,         // Functional & TRX
  "04": Stethoscope,   // Mobility & posture
  "05": Swords,        // Boxing & HIIT
  "06": Baby,          // Pre / post-natal
};

import { Eye, MessageSquare, Send, Smartphone, CalendarCheck, Trophy } from "lucide-react";

export const funnelIconByStep: Record<string, LucideIcon> = {
  "01": Eye,
  "02": Smartphone,
  "03": MessageSquare,
  "04": CalendarCheck,
  "05": Trophy,
};

import { ArrowUpRight, Coffee, Footprints, GlassWater, Headphones, Mic2, Users, Zap } from "lucide-react";

export const storyIconByTitle: Record<string, LucideIcon> = {
  "Strength Floor":         Dumbbell,
  "Group Exercise Studio":  Mic2,
  "Cardio Zone":            HeartPulse,
  "MMA & Combat":           Swords,
  "Yoga & Mobility":        PersonStanding,
  "Personal Training":      Target,
  "Kids Dance Classes":     Music2,
  "Nutrition Counselling":  GlassWater,
};

export const ctaIcons = { ArrowUpRight, Send, Users, Zap };
