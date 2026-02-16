import Link from "next/link";
import Image from "next/image";
import { SiteHeader, RoleBlurb } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { FAQAccordion } from "@/components/faq-accordion";
import { aboutData } from "@/data/about";

export default function AboutPage() {
  const { experience, capabilities, approach, faqs, contactSection, contact } = aboutData;

  return (
    <main className="min-h-screen pt-8 sm:pt-12">
      <SiteHeader variant="minimal" />

      <div className="mx-auto max-w-4xl px-5 pb-10 pt-0 sm:px-6 sm:pb-12">
        <RoleBlurb variant="about" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Separator className="my-6 bg-slate-200/50 dark:bg-slate-700/40 sm:my-8" />
      </div>

      <section aria-label="Experience">
        <div className="mx-auto max-w-4xl px-5 pt-0 pb-10 sm:px-6 sm:pt-0 sm:pb-12">
          {/* Experience */}
          <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Experience
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-base text-muted-foreground">
            {experience.linkedInHref && (
              <>
                <Link
                  href={experience.linkedInHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline-dotted"
                >
                  LinkedIn
                </Link>
                <span>·</span>
              </>
            )}
            {experience.resumeHref && (
              <Link href={experience.resumeHref} className="link-underline-dotted">
                Resume
              </Link>
            )}
          </div>
          <ul className="mt-8 flex flex-col gap-10 sm:gap-12">
            {experience.items.map((item) => (
              <li
                key={item.company}
                className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex shrink-0 flex-col gap-1 sm:w-56 sm:gap-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                    {item.icon ? (
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="size-6 shrink-0 rounded-[3px]"
                        aria-hidden
                      />
                    ) : (
                      <span
                        className="size-6 shrink-0 rounded-[3px] bg-muted"
                        aria-hidden
                      />
                    )}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-dotted w-fit self-start font-medium tracking-tight text-foreground"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">
                        {item.company}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground sm:ml-8">
                    <p className="whitespace-nowrap">{item.dateRange}</p>
                    {item.duration != null && <p className="whitespace-nowrap">{item.duration}</p>}
                  </div>
                </div>
                <p className="min-w-0 max-w-xl text-base text-muted-foreground leading-relaxed sm:flex-1 sm:pt-0.5">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          </section>

          <Separator className="my-12 bg-slate-200/50 dark:bg-slate-700/40 sm:my-16" />

          {/* Capabilities */}
          <section aria-labelledby="capabilities-heading" className="pb-12">
            <h2 id="capabilities-heading" className="text-2xl font-semibold tracking-tight">
              {capabilities.title}
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {capabilities.items.map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-medium text-foreground">{item.label}</span>
                  {item.subtitle ? (
                    <span className="text-sm text-muted-foreground">{item.subtitle}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-12 bg-slate-200/50 dark:bg-slate-700/40 sm:my-16" />

          {/* Approach */}
          <section aria-labelledby="approach-heading" className="pb-12">
            <h2 id="approach-heading" className="text-2xl font-semibold tracking-tight">
              {approach.title}
            </h2>
            <ul className="mt-6 flex flex-col gap-8 sm:gap-10">
              {approach.items.map((item) => (
                <li key={item.number} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <span className="text-base font-medium tabular-nums text-muted-foreground sm:w-12 sm:shrink-0">
                    {item.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-12 bg-slate-200/50 dark:bg-slate-700/40 sm:my-16" />

          {/* FAQs */}
          <section aria-labelledby="faqs-heading" className="pb-12">
            <h2 id="faqs-heading" className="text-2xl font-semibold tracking-tight">
              {faqs.title}
            </h2>
            <FAQAccordion items={faqs.items} />
          </section>

          <Separator className="my-12 bg-slate-200/50 dark:bg-slate-700/40 sm:my-16" />

          {/* Contact */}
          <section aria-labelledby="contact-heading" className="pb-12">
            <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
              {contactSection.headline}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {contactSection.body}
            </p>
            <p className="mt-4">
              <Link
                href={`mailto:${contact.email}`}
                className="link-underline-dotted font-medium text-foreground hover:text-muted-foreground"
              >
                {contact.email}
              </Link>
            </p>
            {contact.social.length > 0 ? (
              <div className="mt-8">
                <p className="text-sm font-medium text-muted-foreground">
                  {contactSection.elsewhereLabel ?? "Elsewhere"}
                </p>
                <ul className="mt-3 flex flex-wrap gap-4 text-base">
                  {contact.social.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-dotted text-foreground hover:text-muted-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        </div>
      </section>
    </main>
  );
}
