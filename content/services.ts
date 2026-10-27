export interface Service {
  slug: string;
  name: string;
  group: "Attract" | "Engage" | "Convert" | "Optimize";
  priority: "Core" | "Secondary";
  tagline: string;
  shortDescription: string;
  deliverables: string[];
  subServices: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  proofPoint?: string;
  published: boolean;
}

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    group: "Attract",
    priority: "Core",
    tagline: "Build a presence that creates demand, not just activity.",
    shortDescription:
      "Audience-focused social strategy, content systems, and community management that turn attention into business opportunities.",
    deliverables: [
      "Social media audit",
      "Audience and platform strategy",
      "Monthly content calendar",
      "Content pillars and creative direction",
      "Graphic design, captions, publishing",
      "Short-form video concepts",
      "Community management",
      "Monthly reporting",
    ],
    subServices: [
      "Instagram marketing",
      "LinkedIn marketing",
      "Creator collaborations",
    ],
    process: [
      {
        step: "Discover",
        description: "Review brand, audience, and current performance.",
      },
      {
        step: "Strategize",
        description: "Establish positioning and channel priorities.",
      },
      {
        step: "Execute",
        description: "Produce, schedule, and publish content.",
      },
      {
        step: "Optimize",
        description: "Analyze engagement and conversion signals.",
      },
    ],
    faqs: [
      {
        question: "Which platforms should we use?",
        answer:
          "We recommend channels based on your audience and business model.",
      },
    ],
    relatedServices: [
      "content-marketing",
      "performance-marketing",
      "branding-creative",
    ],
    proofPoint: "Coo & Cry, Medilove",
    published: true,
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    group: "Convert",
    priority: "Core",
    tagline: "Turn media spend into measurable growth.",
    shortDescription:
      "Full-funnel paid campaigns built around clear audience signals, efficient acquisition, and continuous measurement.",
    deliverables: [
      "Paid media audit",
      "Campaign and channel strategy",
      "Audience and keyword research",
      "Campaign setup and management",
      "Ad creative and copy direction",
      "Conversion tracking setup",
      "Landing page recommendations",
      "Performance reporting",
    ],
    subServices: [
      "Paid social advertising",
      "Search engine marketing",
      "Retargeting campaigns",
    ],
    process: [
      {
        step: "Audit",
        description: "Review accounts, tracking, and acquisition performance.",
      },
      {
        step: "Plan",
        description: "Set channel mix, audiences, and campaign objectives.",
      },
      {
        step: "Launch",
        description: "Build campaigns and verify conversion measurement.",
      },
      {
        step: "Improve",
        description: "Test creative and optimize against business outcomes.",
      },
    ],
    faqs: [
      {
        question: "How quickly can campaigns launch?",
        answer:
          "Timing depends on account access, creative readiness, and tracking requirements.",
      },
    ],
    relatedServices: [
      "social-media-marketing",
      "content-marketing",
      "web-design-development",
    ],
    published: true,
  },
  {
    slug: "seo",
    name: "SEO",
    group: "Attract",
    priority: "Core",
    tagline: "Make it easier for the right people to find you.",
    shortDescription:
      "Practical search optimization that strengthens technical foundations, useful content, and qualified organic visibility.",
    deliverables: [
      "Technical SEO audit",
      "Keyword and search intent research",
      "On-page optimization",
      "Site architecture recommendations",
      "Content opportunity mapping",
      "Local SEO recommendations",
      "Search performance monitoring",
      "Monthly reporting",
    ],
    subServices: ["Technical SEO", "Local SEO", "On-page SEO"],
    process: [
      {
        step: "Assess",
        description:
          "Identify technical issues and organic growth opportunities.",
      },
      {
        step: "Prioritize",
        description: "Map search intent to pages and business goals.",
      },
      {
        step: "Implement",
        description: "Improve site structure, content, and search signals.",
      },
      {
        step: "Measure",
        description: "Track visibility, qualified traffic, and conversions.",
      },
    ],
    faqs: [
      {
        question: "When should we expect SEO results?",
        answer:
          "SEO is a long-term channel; timing varies with competition, site health, and implementation scope.",
      },
    ],
    relatedServices: [
      "content-marketing",
      "web-design-development",
      "performance-marketing",
    ],
    published: true,
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    group: "Engage",
    priority: "Core",
    tagline: "Give your audience a reason to keep listening.",
    shortDescription:
      "Useful, consistent content that builds trust across discovery, consideration, and customer relationships.",
    deliverables: [
      "Content strategy",
      "Audience and topic research",
      "Editorial calendar",
      "Articles and long-form copy",
      "Website and campaign copy",
      "Content repurposing plan",
      "Creative production guidance",
      "Content performance reporting",
    ],
    subServices: [
      "Editorial content",
      "Website copywriting",
      "Campaign content",
    ],
    process: [
      {
        step: "Understand",
        description:
          "Clarify audience needs, brand voice, and business goals.",
      },
      {
        step: "Map",
        description: "Build themes and formats around the customer journey.",
      },
      {
        step: "Create",
        description: "Develop and publish useful, consistent content.",
      },
      {
        step: "Learn",
        description: "Use audience response to guide the next content cycle.",
      },
    ],
    faqs: [
      {
        question: "What content formats can you support?",
        answer:
          "We plan content across articles, web pages, social posts, and campaign assets based on your goals.",
      },
    ],
    relatedServices: [
      "social-media-marketing",
      "seo",
      "branding-creative",
    ],
    published: true,
  },
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    group: "Convert",
    priority: "Core",
    tagline: "Build a digital experience that moves people forward.",
    shortDescription:
      "Strategy-led websites that bring brand, usability, and performance together across every screen.",
    deliverables: [
      "Website discovery and requirements",
      "Information architecture",
      "Wireframes and user journeys",
      "Visual web design",
      "Responsive development",
      "CMS integration",
      "Accessibility and performance checks",
      "Launch support",
    ],
    subServices: [
      "Website design",
      "Website development",
      "E-commerce experiences",
    ],
    process: [
      {
        step: "Discover",
        description: "Align on audiences, goals, content, and requirements.",
      },
      {
        step: "Design",
        description:
          "Shape the information architecture and visual experience.",
      },
      {
        step: "Build",
        description:
          "Develop a responsive site and integrate its content tools.",
      },
      {
        step: "Launch",
        description: "Test the experience and support a considered release.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our existing CMS?",
        answer:
          "We can assess your current platform and recommend an approach that fits your team's needs.",
      },
    ],
    relatedServices: [
      "branding-creative",
      "seo",
      "performance-marketing",
    ],
    published: true,
  },
  {
    slug: "branding-creative",
    name: "Branding & Creative",
    group: "Engage",
    priority: "Core",
    tagline: "Make your brand unmistakable and meaningful.",
    shortDescription:
      "A distinct identity and creative system that helps your business communicate with clarity and consistency.",
    deliverables: [
      "Brand discovery and positioning",
      "Audience and category research",
      "Visual identity concepts",
      "Logo and identity system",
      "Color and typography direction",
      "Brand voice and messaging",
      "Creative asset direction",
      "Brand guidelines",
    ],
    subServices: ["Brand strategy", "Visual identity", "Creative direction"],
    process: [
      {
        step: "Explore",
        description:
          "Understand your business, audience, and competitive context.",
      },
      {
        step: "Define",
        description: "Clarify positioning, personality, and brand story.",
      },
      {
        step: "Create",
        description:
          "Develop an identity and creative direction with purpose.",
      },
      {
        step: "Activate",
        description: "Equip your team to apply the brand consistently.",
      },
    ],
    faqs: [
      {
        question: "Can you refresh an existing brand?",
        answer:
          "Yes. We can evolve an established identity or develop a new direction based on your goals.",
      },
    ],
    relatedServices: [
      "web-design-development",
      "social-media-marketing",
      "content-marketing",
    ],
    published: true,
  },
];