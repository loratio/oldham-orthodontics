/**
 * Single source of truth for every internal URL on the Oldham Orthodontics site.
 * Use these constants whenever a `next/link` `href` points to another page on this site,
 * so URLs are never hardcoded inline and stay refactor-safe.
 *
 * Convention: keys are camelCase slugs of the destination page.
 */

export const links = {
  // Top-level
  home: "/",
  treatments: "/treatments",
  costs: "/costs",
  results: "/results",
  aboutUs: "/about-us",
  contact: "/contact",
  freeConsultation: "/free-consultation",

  // About Us children
  meetTeam: "/about-us/meet-our-team",
  ourPractice: "/about-us/our-practice",
  blog: "/about-us/blog",

  // Clear Aligners
  clearAligners: "/treatments/clear-aligners",
  invisalign: "/treatments/clear-aligners/invisalign",
  clarity: "/treatments/clear-aligners/clarity",
  clearcorrect: "/treatments/clear-aligners/clearcorrect",

  // Braces
  braces: "/treatments/braces",
  metalBraces: "/treatments/braces/metal",
  ceramicBraces: "/treatments/braces/ceramic",
  lingualBraces: "/treatments/braces/lingual",

  // Treatment For (audiences)
  treatmentFor: "/treatments/treatment-for",
  adults: "/treatments/treatment-for/adults",
  teens: "/treatments/treatment-for/teens",
  children: "/treatments/treatment-for/children",

  // Other Services
  otherServices: "/treatments/other-services",
  jawSurgery: "/treatments/other-services/jaw-surgery",
  retainers: "/treatments/other-services/retainers",

  // Legal
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  cookiesPolicy: "/cookies-policy",

  // Professional
  dentistReferrals: "/dentist-referrals",
} as const;

export type LinkKey = keyof typeof links;
