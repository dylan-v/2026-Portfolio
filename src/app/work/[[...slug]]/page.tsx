import Link from "next/link";
import { work } from "@/data/portfolio";
import { getCaseStudy } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { SiteHeader } from "@/components/site-header";

type Props = { params: Promise<{ slug?: string[] }> };

/** Required for static export (GitHub Pages). */
export function generateStaticParams() {
  const workSlugs = work
    .filter((w) => w.href.startsWith("/work/") && w.href !== "/work/")
    .map((w) => ({ slug: [w.href.replace(/^\/work\//, "")] }));
  return [{ slug: [] }, ...workSlugs];
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const path = slug?.join("/") ?? "";
  const item = work.find((w) => w.href === `/work/${path}`);

  if (!item) {
    return (
      <>
        <SiteHeader variant="minimal" />
        <main className="min-h-screen">
          <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
            <p className="text-muted-foreground">Project not found.</p>
            <Link href="/" className="link-underline mt-4 inline-block text-base">
              ← Back to home
            </Link>
          </div>
        </main>
      </>
    );
  }

  const caseStudy = getCaseStudy(path);
  if (caseStudy) {
    return (
      <>
        <SiteHeader variant="minimal" />
        <CaseStudyLayout caseStudy={caseStudy} slug={path} />
      </>
    );
  }

  return (
    <>
      <SiteHeader variant="minimal" />
      <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <Link
          href="/"
          className="link-underline text-base text-muted-foreground hover:text-foreground"
        >
          ← Back
        </Link>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          {item.title}
        </h2>
        <p className="mt-1 text-muted-foreground">{item.meta}</p>
        <p className="mt-8 text-muted-foreground">
          Add project content, images, or case study here. Edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-base">
            src/app/work/[[...slug]]/page.tsx
          </code>{" "}
          or create a page per project.
        </p>
      </div>
    </main>
    </>
  );
}
