import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

/** Matches SiteHeader minimal variant: fixed nav + spacer so skeleton content aligns with real content. */
const headerSpacer = <div className="h-20 shrink-0 sm:h-24" aria-hidden />;

export function CaseStudySkeleton() {
  return (
    <main className="min-h-screen">
      {headerSpacer}
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="mt-2 h-8 w-48" />
        <Skeleton className="mt-2 h-5 w-64" />

        <Skeleton className="mt-6 aspect-[16/10] w-full rounded-[24px]" />

        <div className="mt-6 space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>

        <div className="mt-12 space-y-12">
          {[1, 2, 3].map((i) => (
            <section key={i}>
              {i > 1 && (
                <Separator className="mb-12 bg-slate-200/50 dark:bg-slate-700/40" />
              )}
              <Skeleton className="h-8 w-40" />
              <div className="mt-3 space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-[90%]" />
              </div>
            </section>
          ))}
        </div>

        <Skeleton className="mt-12 h-5 w-72" />
      </div>
    </main>
  );
}
