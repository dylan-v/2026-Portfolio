import Link from "next/link";
import Image from "next/image";
import { site, navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { asset } from "@/lib/utils";

/** Inline company icon; uses image when icon src provided, else placeholder. */
function CompanyIcon({ name, icon }: { name: string; icon: string | null }) {
  const className = "ml-1 mr-0.5 inline-block size-4 shrink-0 self-center rounded-[3px] align-middle";
  if (icon) {
    return (
      <Image
        src={asset(icon)}
        alt=""
        width={16}
        height={16}
        className={`${className} select-none`}
        aria-hidden
        draggable={false}
      />
    );
  }
  return (
    <span
      className={`${className} select-none bg-muted`}
      title={name}
      aria-hidden
      draggable={false}
    />
  );
}

function RoleDescription() {
  if (typeof site.role === "string") {
    return <>{site.role}</>;
  }
  const parts = site.role.parts;
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === "text") {
          // If previous part was company and this starts with ". ", attach period to company (handled below)
          const prev = parts[i - 1];
          const isPeriodAfterCompany =
            prev?.type === "company" && part.content.startsWith(". ");
          const text = isPeriodAfterCompany
            ? part.content.slice(2).trimStart()
            : part.content;
          const textClass =
            "text-base text-muted-foreground leading-relaxed tracking-tight";
          if (isPeriodAfterCompany) {
            return (
              <span key={i}>
                {" "}
                <span className={textClass}>{text}</span>
              </span>
            );
          }
          return (
            <span key={i} className={textClass}>
              {text}
            </span>
          );
        }
        const next = parts[i + 1];
        const addPeriod =
          next?.type === "text" && next.content.startsWith(". ");
        const linkClass =
          "tracking-tight text-muted-foreground inline-flex items-baseline gap-0 transition-colors duration-200 hover:text-foreground";
        const textWithUnderline = (
          <span className="link-underline-dotted-hover-only">
            {part.company.name}
            {addPeriod ? "." : null}
          </span>
        );
        const content = (
          <>
            <CompanyIcon name={part.company.name} icon={part.company.icon} />
            {textWithUnderline}
          </>
        );
        if (part.company.url) {
          return (
            <a
              key={i}
              href={part.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {content}
            </a>
          );
        }
        return (
          <span key={i} className={linkClass}>
            {content}
          </span>
        );
      })}
    </>
  );
}

const aboutBlurb = (
  <>
    <p className="text-base leading-relaxed text-muted-foreground">
      I focus on the intersection of form and function to create experiences
      that effortlessly become an extension of oneself. I believe in ideas over
      opinions, prototypes as the most valuable tool for collaboration, and
      exploring one hundred ideas to find the right one.
    </p>
    <p className="text-base leading-relaxed text-muted-foreground">
      I am driven by curiosity and strive for a high level of craftsmanship
      and excellence in my work.
    </p>
  </>
);

/** Avatar + role description blurb; used on homepage header and About page. */
export function RoleBlurb({ variant = "default" }: { variant?: "default" | "about" }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex shrink-0 flex-col sm:w-56">
        {site.avatar ? (
          <Image
            src={asset(site.avatar)}
            alt=""
            width={68}
            height={68}
            className="size-[45px] shrink-0 select-none rounded-full object-cover sm:size-[54px]"
            draggable={false}
          />
        ) : (
          <div
            className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-muted text-base font-medium text-muted-foreground sm:size-[54px]"
            aria-hidden
          >
            {site.avatarInitials}
          </div>
        )}
      </div>
      {variant === "about" ? (
        <div className="flex min-w-0 max-w-xl flex-1 flex-col gap-4 sm:pt-0.5">
          {aboutBlurb}
        </div>
      ) : (
        <p className="min-w-0 max-w-xl text-base leading-relaxed text-muted-foreground sm:flex-1 sm:pt-0.5">
          <RoleDescription />
        </p>
      )}
    </div>
  );
}

type SiteHeaderProps = {
  variant?: "full" | "minimal";
};

export function SiteHeader({ variant = "full" }: SiteHeaderProps) {
  const nav = (
    <nav className="flex items-center gap-5 text-base">
      <ThemeToggle />
      {navLinks.map((link, i) => {
        const isButton = i === navLinks.length - 1;
        const isExternal = link.href.startsWith("http");
        const className = isButton
          ? "hidden min-[400px]:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          : "link-underline-dotted-nav font-medium tracking-tight text-foreground";
        const content = (
          <>
            {link.label}
            {isButton && (
              <svg
                className="size-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </>
        );
        if (isExternal) {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          );
        }
        return (
          <Link key={link.href} href={link.href} className={className}>
            {content}
          </Link>
        );
      })}
    </nav>
  );

  const navBar = (
    <div className="fixed left-0 right-0 top-0 z-10 w-full pt-4 sm:pt-5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1600px] flex-row items-center justify-between gap-3 px-5 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="inline-flex items-center font-medium tracking-tight text-foreground"
          aria-label={site.navName}
        >
          <img
            src={asset("/Home.svg")}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 select-none"
            draggable={false}
          />
        </Link>
        {nav}
      </div>
    </div>
  );

  /** Spacer so content isn’t hidden under the fixed nav bar. */
  const navSpacer = <div className="h-20 shrink-0 sm:h-24" aria-hidden />;

  if (variant === "minimal") {
    return (
      <header>
        {navBar}
        {navSpacer}
      </header>
    );
  }

  return (
    <header>
      {navBar}
      {navSpacer}
      <div className="mx-auto max-w-4xl px-5 pb-10 pt-0 sm:px-6 sm:pb-12 sm:pt-0">
        <RoleBlurb />
      </div>
    </header>
  );
}
