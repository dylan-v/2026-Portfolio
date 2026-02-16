import { Skeleton } from "@/components/ui/skeleton";

export function NavBarSkeleton() {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-10 w-full pt-4 sm:pt-5 bg-background/70 backdrop-blur-md"
      aria-hidden
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-row items-center justify-between gap-3 px-5 py-3 sm:px-8 sm:py-4">
        <Skeleton className="h-9 w-9 shrink-0 rounded" />
        <div className="flex items-center gap-5">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}
