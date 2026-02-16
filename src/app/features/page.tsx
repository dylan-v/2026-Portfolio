import { SiteHeader } from "@/components/site-header";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader variant="minimal" />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Optional page for highlights or a different view of your work. Edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-base">
            src/app/features/page.tsx
          </code>
          .
        </p>
      </div>
    </main>
  );
}
