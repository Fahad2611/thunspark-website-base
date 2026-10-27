export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  publishable: boolean;
  challenge: string;
  approach: string;
  execution: string;
  results: string[];
  coverImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "coo-and-cry",
    client: "Coo & Cry",
    industry: "Baby care · D2C",
    services: ["Branding", "Web", "Social", "Content"],
    publishable: true,
    challenge: "[TBD]",
    approach: "[TBD]",
    execution:
      "Full-stack e-commerce development, social media marketing, brand identity.",
    results: [],
    coverImage: "/images/work/coo-and-cry.jpg",
  },
  {
    slug: "suncity-fire",
    client: "Suncity Fire",
    industry: "[TBD]",
    services: [],
    publishable: true,
    challenge: "[TBD]",
    approach: "[TBD]",
    execution: "[TBD]",
    results: [],
    coverImage: "/images/work/suncity-fire.jpg",
  },
  {
    slug: "homeware-expo",
    client: "Homeware Expo",
    industry: "[TBD]",
    services: [],
    publishable: true,
    challenge: "[TBD]",
    approach: "[TBD]",
    execution: "[TBD]",
    results: [],
    coverImage: "/images/work/homeware-expo.jpg",
  },
  {
    slug: "medilove",
    client: "Medilove",
    industry: "[TBD]",
    services: [],
    publishable: true,
    challenge: "[TBD]",
    approach: "[TBD]",
    execution: "[TBD]",
    results: [],
    coverImage: "/images/work/medilove.jpg",
  },
];