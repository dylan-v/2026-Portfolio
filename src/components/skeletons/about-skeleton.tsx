import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { NavBarSkeleton } from "@/components/skeletons/nav-skeleton";

const NavSpacer = () => <div className="h-20 shrink-0 sm:h-24" aria-hidden />;

export function AboutSkeleton() {
  return (
    <main className="min-h-screen pt-8 sm:pt-12">
      <NavBarSkeleton />
      <NavSpacer />
      <div className="mx-auto max-w-4xl px-5 pb-10 pt-0 sm:px-6 sm:pb-12 sm:pt-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex shrink-0 flex-col sm:w-56">
            <Skeleton className="size-[45px] shrink-0 rounded-full sm:size-[54px]" />
          </div>
          <div className="min-w-0 max-w-xl flex-1 space-y-4 sm:pt-0.5">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full max-w-[90%]" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Separator className="my-6 bg-slate-200/50 dark:bg-slate-700/40 sm:my-8" />
      </div>
      <section aria-label="Experience">
        <div className="mx-auto max-w-4xl px-5 pt-0 pb-10 sm:px-6 sm:pt-0 sm:pb-12">
          <Skeleton className="h-8 w-32" />
          <div className="mt-4 flex gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-14" />
          </div>
          <ul className="mt-8 flex flex-col gap-10 sm:gap-12">
            {[1, 2, 3].map((i) => (
              <li
                key={i}
                className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex shrink-0 flex-col gap-1 sm:w-56 sm:gap-0">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="mt-1 h-4 w-28" />
                </div>
                <div className="min-w-0 max-w-xl flex-1 space-y-2 sm:pt-0.5">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
