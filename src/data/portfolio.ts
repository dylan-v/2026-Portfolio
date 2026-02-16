/** For inline role text: icon is a placeholder key until you provide vector assets. */
export type RoleCompany = {
  name: string;
  icon: string | null; // null = placeholder; later e.g. "rippling.svg"
  /** Main website URL; when set, company name becomes a link that opens in a new tab. */
  url?: string;
};

export type RolePart =
  | { type: "text"; content: string; serif?: boolean }
  | { type: "company"; company: RoleCompany };

export const site = {
  name: "Hi, I'm Dylan",
  /** Name shown in the top nav bar (e.g. Ryan Lucas–style layout). */
  navName: "Dylan Vanelli",
  /** Used for avatar initials when name is a phrase (e.g. "Hi, I'm Dylan" → "D"). */
  avatarInitials: "D",
  /** URL to a square or circular avatar image. Leave empty for initials fallback. */
  avatar: "/avatar.png",
  /** Role/description as structured parts so we can render icons before each company. */
  role: {
    parts: [
      { type: "text" as const, content: "I'm Dylan Vanelli, a Design Lead at " },
      { type: "company" as const, company: { name: "Rippling", icon: "/icons/rippling.png", url: "https://www.rippling.com" } },
      { type: "text" as const, content: ". Previously at " },
      { type: "company" as const, company: { name: "Carta", icon: "/icons/carta.png", url: "https://carta.com" } },
      { type: "text" as const, content: ", " },
      { type: "company" as const, company: { name: "Intuit", icon: "/icons/intuit.png", url: "https://www.intuit.com" } },
      { type: "text" as const, content: ", and " },
      { type: "company" as const, company: { name: "Capital One", icon: "/icons/capital-one.png", url: "https://www.capitalone.com" } },
      {
        type: "text" as const,
        content:
          ". I'm passionate about building businesses and figuring out messy problems through systems thinking & execution.",
        serif: true,
      },
    ],
  },
};

/** Plain-text role for meta description and other non-JSX use. */
export function getRoleSummary(): string {
  const r = site.role;
  if (typeof r === "string") return r;
  return r.parts
    .map((p) => (p.type === "text" ? p.content : p.company.name))
    .join("");
}

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Get in touch", href: "https://www.linkedin.com/in/dylan-vanelli/" },
];

export type WorkItem = {
  title: string;
  meta: string;
  href: string;
  /** When set, card shows company icon + name + " · " + meta (not clickable). Reuses header brand icons. */
  company?: { name: string; icon: string | null };
  /** Short description for the work list card (Jason Kim–style). */
  description?: string;
  /** Number of image placeholder slots (1–3). Default 1. */
  imagePlaceholders?: 1 | 2 | 3;
  /** Optional image for the first slot (e.g. card hero). When set, first slot is this image with link to case study. */
  image?: string;
  /** Optional second image (e.g. for feature layout top-right slot). */
  image2?: string;
  /** When "feature", use 3 placeholders: left half full height, right half two stacked. When "stack", 2 images in one column. When "sideBySide", 2 cards in a row (image2 left, image right), both hugging content. */
  imageLayout?: "feature" | "stack" | "sideBySide";
};

export const work: WorkItem[] = [
  {
    title: "Finance Superapp",
    meta: "2026",
    company: { name: "Rippling", icon: "/icons/rippling.png" },
    href: "/work/finance-superapp",
    description:
      "Redesigned Rippling's finance products into a unified operating system. Led a platform overhaul across navigation, settings, and cross-sell to build the foundation for a $100M business.",
    imagePlaceholders: 1,
    image: "/AllFinanceFrame.svg",
  },
  {
    title: "Travel",
    meta: "2025",
    company: { name: "Rippling", icon: "/icons/rippling.png" },
    href: "/work/travel",
    description:
      "End-to-end design for corporate travel—booking, policy, and expense. Shipped the 0→1 experience and scaled patterns so teams could manage travel in one place.",
    imagePlaceholders: 1,
    image: "/TravelMobileFrame.svg",
  },
  {
    title: "Private Capital",
    meta: "2023",
    company: { name: "Carta", icon: "/icons/carta.png" },
    href: "/work/project-alpha",
    description:
      "Product and interaction design for a key product initiative. End-to-end from concept to launch.",
    imagePlaceholders: 1,
    image: "/TravelMobileFrame.svg",
  },
  {
    title: "Developer Tools",
    meta: "2022",
    company: { name: "Intuit", icon: "/icons/intuit.png" },
    href: "/work/intuit-developer-tools",
    description:
      "A minimum-lovable developer experience for Intuit—clear errors, unified CLI, single docs entry—so internal and partner teams could ship with confidence. Led definition and launch, aligning product and engineering and driving the 0→1 rollout.",
    imagePlaceholders: 1,
    image: "/IDXStudioFrame.svg",
  },
  {
    title: "Fraud Prevention",
    meta: "2020",
    company: { name: "Capital One", icon: "/icons/capital-one.png" },
    href: "/work/explorations",
    description:
      "Side experiments and creative exercises. Typography, layout, and concept work.",
    imagePlaceholders: 1,
    image: "/TravelMobileFrame.svg",
  },
];
