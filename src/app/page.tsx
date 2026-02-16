import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { Separator } from "@/components/ui/separator";
import { work } from "@/data/portfolio";
import { HomeWithSkeleton } from "@/components/home-with-skeleton";

export default function Home() {
  return (
    <HomeWithSkeleton work={work}>
      <main className="min-h-screen pt-8 sm:pt-12">
        <SiteHeader variant="full" />

        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <Separator className="my-6 bg-slate-200/50 dark:bg-slate-700/40 sm:my-8" />
        </div>

        <section className="border-b border-border" aria-label="Work">
          <div className="mx-auto max-w-4xl px-5 pt-0 pb-3 sm:px-6 sm:pt-0 sm:pb-4">
            {work.map((item, i) => (
              <div key={item.href}>
                {i > 0 && (
                  <Separator className="my-0 bg-slate-200/50 dark:bg-slate-700/40" />
                )}
                <WorkCard item={item} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </HomeWithSkeleton>
  );
}
