/** Case study structure mirroring layouts like gabrielvaldivia.com/work/daylight */
export type CaseStudyMeta = {
  team?: { label: string; members: string[]; extra?: string };
  services?: { label: string; items: string[] };
  date?: { label: string; value: string };
};

export type CaseStudySection = {
  heading: string;
  body: string[];
  /** Optional image src for this section (placeholder for later) */
  image?: string;
};

export type CaseStudy = {
  title: string;
  intro: string;
  /** Optional hero image shown above the title */
  heroImage?: string;
  /** Optional image shown after the intro (e.g. below a specific paragraph) */
  introImage?: string;
  /** Optional X/Twitter tweet ID to embed (e.g. from https://x.com/User/status/123456) */
  embedTweetId?: string;
  /** Optional video embed URL (iframe src). Use for product/demo videos. */
  embedVideoUrl?: string;
  meta: CaseStudyMeta;
  sections: CaseStudySection[];
};

const interactionPrototypes: CaseStudy = {
  title: "Banking SDKs",
  heroImage: "/idx-studio.svg",
  intro:
    "A collection of interaction design prototypes exploring motion, feedback, and flow. These experiments focus on how interfaces respond to input and how small details shape the feel of a product—from micro-interactions to full flows.",
  meta: {
    team: {
      label: "Team",
      members: ["Solo"],
      extra: undefined,
    },
    services: {
      label: "Services",
      items: ["Interaction design", "Prototyping"],
    },
    date: {
      label: "Date",
      value: "2024–present",
    },
  },
  sections: [
    {
      heading: "Approach",
      body: [
        "Each prototype starts with a question: what if the UI behaved this way? I use code and design tools to explore the answer quickly, then refine the ones that feel right. The goal is to make interactions feel immediate and coherent, without adding noise.",
      ],
    },
    {
      heading: "Tools & methods",
      body: [
        "I work in Figma, Principle, and sometimes direct code (React, Framer Motion) depending on what’s being tested. Fidelity stays low until the interaction is validated, so we can iterate on behavior instead of polish.",
      ],
    },
    {
      heading: "Outcomes",
      body: [
        "These prototypes have informed design systems and product flows across several projects. The best ideas tend to be the ones that feel obvious in use but weren’t on the table before—motion and feedback are a big part of that.",
      ],
    },
  ],
};

const intuitDeveloperTools: CaseStudy = {
  title: "Developer Tools",
  heroImage: "/idx-studio.svg",
  intro:
    "At Intuit, we set out to improve how internal and third-party developers build on our platforms. This case study covers how we defined and shipped a minimum-lovable set of developer tools—focusing on clarity, feedback, and speed to first value—so teams could ship with confidence without waiting for a fully polished suite.",
  meta: {
    team: {
      label: "Team",
      members: ["Jordan Lee", "Sam Chen", "Riley Park"],
      extra: undefined,
    },
    services: {
      label: "Services",
      items: ["Product design", "Developer experience", "Strategy"],
    },
    date: {
      label: "Date",
      value: "2024",
    },
  },
  sections: [
    {
      heading: "Context",
      body: [
        "Developer tools at scale often suffer from feature creep and unclear priorities. We wanted to move from a long roadmap of “nice to haves” to a small set of capabilities that would make the biggest difference for day-one productivity and ongoing confidence.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "We ran discovery with internal and external developers to identify the moments that hurt most: unclear errors, slow feedback loops, and fragmented docs. We framed the work around a minimum-lovable bar—what would make the experience genuinely good, not just functional—and scoped to that before expanding.",
      ],
    },
    {
      heading: "What we built",
      body: [
        "We shipped a focused set of tools: clearer error messaging and runbooks, a unified CLI for common tasks, and a single entry point for docs and APIs. Each piece was designed to reduce cognitive load and get developers to a working state quickly.",
      ],
    },
    {
      heading: "Outcomes",
      body: [
        "Teams reported faster onboarding and fewer support tickets. The minimum-lovable framing also made it easier to say no to scope that didn’t serve that bar, so we could iterate based on real usage instead of assumptions.",
      ],
    },
  ],
};

const financeSuperapp: CaseStudy = {
  title: "Finance Superapp",
  heroImage: "/AllFinanceFrame.svg",
  introImage: "/ferrari-door-roof.png",
  intro:
    "Rippling's Finance suite spanned cards, reimbursements, travel, banking, and accounting. The capabilities were strong, but the system was not designed to work as one. Each product had evolved independently, optimized for speed rather than cohesion.\n\nNavigation diverged across products, settings were duplicated, and permissions were siloed. What looked unified in a sales demo felt disjointed in daily use. As we launched new products, complexity compounded instead of reinforcing a shared foundation.\n\nWhen I joined, Finance was at $13M ARR and growing quickly. But growth without structure was a risk. We had built a Ferrari, but the door was on the roof. To reach $100M, Finance needed structural coherence.",
  meta: {},
  sections: [
    {
      heading: "My Role",
      body: [
        "As Staff Designer across Travel, Cards, Reimbursements, Banking, and Accounting, I stepped into a unifying role during a period of team turnover and new product leadership. I had visibility across the entire suite and strong partnership with our Product Director, which positioned me to drive system-level change.",
        "Rather than start with a strategy deck, I started by untangling the system itself. I mapped architecture, audited navigation, traced permission logic across products, and surfaced where UX inconsistency mirrored technical fragmentation.",
      ],
    },
    {
      heading: "Building the Operating System",
      body: [
        "We shifted from feature velocity to shared infrastructure. Navigation was rebuilt around a single cross-product model, and settings were consolidated into a coherent global hierarchy. Permissions became a shared service rather than product-specific logic.",
        "We also embedded cross-sell and self-serve onboarding directly into the experience, allowing customers to attach products over time without friction. New launches like Travel and Banking now integrate into a common framework instead of layering on complexity.",
      ],
    },
    {
      heading: "The Outcome",
      body: [
        "Finance has grown from $13M to approximately $30M ARR during my tenure. More importantly, it now has the structural integrity to scale alongside our aggressive sales motion.",
        "Customers can adopt products incrementally. New capabilities plug into shared foundations. Finance operates as a cohesive financial stack inside Rippling's broader platform.",
      ],
    },
  ],
};

const projectAlpha: CaseStudy = {
  title: "Private Capital",
  heroImage: "/TravelMobileFrame.svg",
  intro:
    "Product and interaction design for a key product initiative at Carta. End-to-end from concept to launch.",
  meta: {},
  sections: [
    {
      heading: "Overview",
      body: [
        "Placeholder: Add your approach, key decisions, and outcomes for the Private Capital project.",
      ],
    },
  ],
};

const explorations: CaseStudy = {
  title: "Fraud Prevention",
  heroImage: "/TravelMobileFrame.svg",
  intro:
    "Side experiments and creative exercises at Capital One. Typography, layout, and concept work.",
  meta: {},
  sections: [
    {
      heading: "Overview",
      body: [
        "Placeholder: Add your approach, key decisions, and outcomes for the Fraud Prevention / explorations project.",
      ],
    },
  ],
};

const travel: CaseStudy = {
  title: "Travel",
  intro:
    "Corporate travel—booking, policy, and expense—designed as a single experience. Led the end-to-end design for Rippling Travel from concept to launch.",
  embedVideoUrl: "https://fast.wistia.net/embed/iframe/21xtyppq6a",
  meta: {},
  sections: [
    {
      heading: "Overview",
      body: [
        "Placeholder: Add your approach, key decisions, and outcomes for the Travel project.",
      ],
    },
  ],
};

/** Map work slug (path segment) to case study data. Only projects with an entry get the full layout. */
export const caseStudies: Record<string, CaseStudy> = {
  "finance-superapp": financeSuperapp,
  "travel": travel,
  "project-alpha": projectAlpha,
  "explorations": explorations,
  "interaction-prototypes": interactionPrototypes,
  "intuit-developer-tools": intuitDeveloperTools,
};

export function getCaseStudy(slug: string): CaseStudy | null {
  return caseStudies[slug] ?? null;
}
