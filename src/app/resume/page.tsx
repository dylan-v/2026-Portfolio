import { SiteHeader } from "@/components/site-header";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader variant="minimal" />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Add a PDF link or embed here. Edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-base">
            src/app/resume/page.tsx
          </code>
          .
        </p>
      </div>
    </main>
  );
}
