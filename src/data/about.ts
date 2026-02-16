/** About page content and structure (Jason Kim–style). */

export type ExperienceItem = {
  company: string;
  /** When set, company name is a link that opens in a new tab. */
  url?: string;
  icon: string | null;
  dateRange: string;
  duration?: string;
  description: string;
};

export type EventItem = {
  name: string;
  host: string;
  date: string;
};

export type CapabilityItem = {
  label: string;
  /** Optional subtitle e.g. "1 Projects", "Pitch Decks" */
  subtitle?: string;
};

export type ApproachItem = {
  number: string;
  title: string;
  body: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type AboutData = {
  headline: string;
  taglines: string[];
  experience: {
    linkedInHref?: string;
    resumeHref?: string;
    items: ExperienceItem[];
  };
  /** Fractional design leadership: capabilities grid */
  capabilities: {
    title: string;
    items: CapabilityItem[];
  };
  /** Fractional design leadership: approach (numbered list) */
  approach: {
    title: string;
    items: ApproachItem[];
  };
  /** Fractional design leadership: FAQs */
  faqs: {
    title: string;
    items: FAQItem[];
  };
  /** Contact section headline and blurb (email/social come from contact) */
  contactSection: {
    headline: string;
    body: string;
    elsewhereLabel?: string;
  };
  events: EventItem[];
  patents: string[];
  contact: {
    email: string;
    social: { label: string; href: string }[];
  };
};

export const aboutData: AboutData = {
  headline: "I enjoy bringing happiness",
  taglines: [
    "Based in San Francisco",
    "Like things, love people, pray for the best",
  ],
  experience: {
    linkedInHref: "https://linkedin.com",
    resumeHref: "/resume",
    items: [
      {
        company: "Rippling",
        url: "https://www.rippling.com",
        icon: "/icons/rippling.png",
        dateRange: "Jun 2024 → Present",
        description:
          "Driving product design and design systems. Partnering with cross-functional teams to define patterns that scale.",
      },
      {
        company: "Carta",
        url: "https://carta.com",
        icon: "/icons/carta.png",
        dateRange: "2022 → Jun 2024",
        duration: "2 years",
        description:
          "Designed equity and cap table experiences used by thousands of companies. Contributed to core product and design foundations.",
      },
      {
        company: "Intuit",
        url: "https://www.intuit.com",
        icon: "/icons/intuit.png",
        dateRange: "2019 → 2022",
        duration: "3 years",
        description:
          "Shipped developer tools and platform experiences. Led minimum-lovable product design and cross-team alignment.",
      },
      {
        company: "Capital One",
        url: "https://www.capitalone.com",
        icon: "/icons/capital-one.png",
        dateRange: "2017 → 2019",
        duration: "2 years",
        description:
          "Explored the future of banking through rapid prototyping. Built and launched product concepts in fintech.",
      },
      {
        company: "Duke University",
        url: "https://duke.edu",
        icon: "/icons/duke.png",
        dateRange: "2015 → 2019",
        duration: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  capabilities: {
    title: "Capabilities",
    items: [
      { label: "Product Design", subtitle: "0→1 & scale" },
      { label: "Design Systems", subtitle: "Foundations & governance" },
      { label: "Strategy", subtitle: "Product & org" },
      { label: "Branding", subtitle: "" },
      { label: "Web Design", subtitle: "" },
      { label: "Pitch Decks", subtitle: "" },
      { label: "Team Building", subtitle: "" },
      { label: "Coaching", subtitle: "" },
    ],
  },
  approach: {
    title: "Approach",
    items: [
      { number: "01", title: "Shared ownership.", body: "Whether I work independently or integrate with your team, everyone comes along the process." },
      { number: "02", title: "I work fast, like really fast.", body: "Quick iteration allows us to zoom through explorations until we arrive at something that feels just right." },
      { number: "03", title: "Show and tell.", body: "I frequently share work in progress, usually in the form of screen recordings with a voice over." },
      { number: "04", title: "Bias for action.", body: "I prefer creating tangible artifacts to visualize the team's ideas over lengthy documents that often go ignored." },
      { number: "05", title: "I work in systems.", body: "Whether it's a small feature or an entire design system, I create reusable components for the team." },
      { number: "06", title: "Design is thinking.", body: "I am not afraid to throw away an idea and explore divergent solutions. The more the merrier!" },
    ],
  },
  faqs: {
    title: "FAQs",
    items: [
      { question: "What is fractional design leadership?", answer: "Fractional design leadership means I partner with your team for a set number of days or hours per week—enough to drive strategy and key initiatives without a full-time hire. You get senior design leadership and hands-on execution when you need it." },
      { question: "Why not hire a full-time product designer?", answer: "Early-stage teams often need strategic design leadership and 0→1 execution before they're ready to build a full team. A fractional partner lets you move fast, validate the role, and scale when the time is right." },
      { question: "Do you have a team?", answer: "I work independently and integrate with your existing team. For larger projects I can recommend trusted collaborators." },
      { question: "What is your pricing structure?", answer: "Pricing is typically a monthly retainer based on scope and commitment. I'm happy to discuss what makes sense for your stage and goals." },
      { question: "What's your availability?", answer: "I take on a limited number of engagements so I can be fully present. Reach out and I'll let you know current availability." },
    ],
  },
  contactSection: {
    headline: "Need a Design Partner?",
    body: "I'm currently focused on projects that involve product strategy, design systems, and 0→1 execution. If you're building something that would benefit from a thoughtful, systematic design approach, reach out with a bit more about what you're working on.",
    elsewhereLabel: "Elsewhere",
  },
  events: [
    { name: "Design Systems Workshop", host: "Hosted by Rippling", date: "Oct 2025" },
    { name: "Stories from the Bay", host: "Hosted by Startup Alliance", date: "Sep 2025" },
  ],
  patents: ["US12345678B2", "US20240000000A1"],
  contact: {
    email: "dylan@example.com",
    social: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
};
