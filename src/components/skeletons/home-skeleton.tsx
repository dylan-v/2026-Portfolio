import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { NavBarSkeleton } from "@/components/skeletons/nav-skeleton";

const NavSpacer = () => <div className="h-20 shrink-0 sm:h-24" aria-hidden />;

type HomeSkeletonProps = {
  /** Number of work cards to scaffold (default 5). */
  cardCount?: number;
};

export function HomeSkeleton({ cardCount = 5 }: HomeSkeletonProps) {
  return (
    <main className="min-h-screen pt-8 sm:pt-12">
      <NavBarSkeleton />
      <NavSpacer />

      <div className="mx-auto max-w-4xl px-5 pb-10 pt-0 sm:px-6 sm:pb-12 sm:pt-0">
        {/* RoleBlurb shape: avatar + lines */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex shrink-0 flex-col sm:w-56">
            <Skeleton className="size-[72px] shrink-0 rounded-full sm:size-[120px]" />
          </div>
          <div className="min-w-0 max-w-xl flex-1 space-y-2 sm:pt-0.5">
            <Skeleton className="h-5 w-full max-w-[85%]" />
            <Skeleton className="h-5 w-full max-w-[95%]" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Separator className="my-6 bg-slate-200/50 dark:bg-slate-700/40 sm:my-8" />
      </div>

      <section className="border-b border-border" aria-label="Work">
        <div className="mx-auto max-w-4xl px-5 pt-0 pb-3 sm:px-6 sm:pt-0 sm:pb-4">
          {Array.from({ length: cardCount }, (_, i) => (
            <div key={i}>
              {i > 0 && (
                <Separator className="my-0 bg-slate-200/50 dark:bg-slate-700/40" />
              )}
              <article className="py-10 first:pt-6 sm:py-14 sm:first:pt-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex min-w-0 shrink-0 flex-col gap-0 sm:w-56">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="mt-1 h-5 w-1/2" />
                  </div>
                  <div className="min-w-0 max-w-xl flex-1 space-y-2 sm:pt-0.5">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-4/5" />
                  </div>
                </div>
                <div className="mt-6 w-full sm:mt-8">
                  <Skeleton className="aspect-[16/10] w-full rounded-[24px]" />
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
