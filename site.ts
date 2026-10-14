/**
 * ============================================================
 *  REPLACE THESE PLACEHOLDERS WITH YOUR REAL BUSINESS DETAILS
 *  Everything on the site reads from this one file.
 * ============================================================
 */
export const site = {
  name: "[COMPANY NAME]",
  shortName: "[COMPANY NAME]",
  initials: "CN", // two letters used on article cards
  tagline: "Premium pool and outdoor-living installations across Gauteng.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.co.za",

  phoneDisplay: "[PHONE NUMBER]",
  phoneHref: "tel:+27000000000", // e.g. tel:+27821234567
  whatsappNumber: "27000000000", // international format, digits only, no "+"
  email: "[EMAIL ADDRESS]",
  address: "[BUSINESS ADDRESS]",
  hours: "[TRADING HOURS]",

  region: "Gauteng",
  areasServed: [
    "Sandton", "Midrand", "Fourways", "Bryanston", "Randburg",
    "Johannesburg", "Centurion", "Pretoria", "Kyalami", "Sunninghill",
  ],
  social: {
    instagram: "", // add full URL or leave empty to hide
    facebook: "",
    linkedin: "",
  },
} as const;

export const whatsappMessage = `Hi ${site.name}, I found you through your website and would like to discuss a pool or outdoor-living project.`;
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Pools", href: "/pools" },
  { label: "Renovations", href: "/pool-renovations" },
  { label: "Outdoor Living", href: "/outdoor-living" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
