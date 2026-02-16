import Link from "next/link";
import Image from "next/image";
import { Tweet } from "react-tweet";
import type { CaseStudy } from "@/data/case-studies";
import { Separator } from "@/components/ui/separator";
import { asset } from "@/lib/utils";
import "react-tweet/theme.css";

/** Same glass card look as work list cards, but no link and no hover/transition (for article hero). */
const articleHeroCardClass =
  "relative block w-full overflow-hidden rounded-[24px] " +
  "border-[0.5px] border-slate-200/50 dark:border-white/10 " +
  "bg-[#F2EEEB] dark:bg-white/5 backdrop-blur-xl";

type CaseStudyLayoutProps = {
  caseStudy: CaseStudy;
  /** Work slug (e.g. finance-superapp) for hero card layout variants. */
  slug?: string;
};

export function CaseStudyLayout({ caseStudy, slug }: CaseStudyLayoutProps) {
  const { title, intro, heroImage, introImage, embedTweetId, embedVideoUrl, sections } = caseStudy;
  const isFinanceSuperapp = slug === "finance-superapp";

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <Link
          href="/"
          className="link-underline-dotted-offset text-base font-medium tracking-tight text-foreground"
        >
          ← Back
        </Link>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          {title}
        </h1>

        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          If you&apos;d like to learn more, please{" "}
          <Link
            href="https://www.linkedin.com/in/dylan-vanelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline-dotted-offset text-muted-foreground"
          >
            get in touch
          </Link>
          .
        </p>

        {embedVideoUrl ? (
          <div className="case-study-video-embed mt-6 w-full overflow-hidden bg-[#F2EEEB] dark:bg-white/5">
            <div className="case-study-video-embed__stroke relative w-full">
              <iframe
                src={
                  embedVideoUrl.includes("wistia")
                    ? `${embedVideoUrl}${embedVideoUrl.includes("?") ? "&" : "?"}playerColor=2d2d2d&playPauseControl=false&settingsControl=false&ccButton=false&captionsControl=false&captions-control=false&roundedPlayer=0`
                    : embedVideoUrl
                }
                title="Hero video"
                className="aspect-video w-full min-h-[320px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : heroImage ? (
          <div
            className={`mt-6 w-full ${articleHeroCardClass} ${isFinanceSuperapp ? "flex flex-col items-end justify-end p-8 pb-0 pr-0 w-fit max-w-full" : "p-8"}`}
          >
            {heroImage.endsWith(".svg") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(heroImage)}
                alt=""
                className={`w-full h-auto block select-none ${isFinanceSuperapp ? "rounded-none" : "rounded-[24px]"}`}
                draggable={false}
              />
            ) : (
              <Image
                src={asset(heroImage)}
                alt=""
                width={1920}
                height={1273}
                className={`w-full select-none object-cover object-center ${isFinanceSuperapp ? "rounded-none" : "rounded-[24px]"}`}
                draggable={false}
                unoptimized
                sizes="(max-width: 896px) 100vw, 896px"
              />
            )}
          </div>
        ) : null}

        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          {intro.split(/\n\n+/).map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>

        {introImage && (
          <div className="mt-6 flex justify-center">
            <Image
              src={asset(introImage)}
              alt=""
              width={1200}
              height={800}
              className="w-full max-w-md select-none object-contain object-center"
              draggable={false}
              sizes="(max-width: 896px) 100vw, 28rem"
            />
          </div>
        )}

        {embedTweetId && !embedVideoUrl && (
          <div className="mt-8 flex justify-center [&_.react-tweet-theme]:max-w-full">
            <div className="w-full max-w-[550px] rounded-[24px] border border-border/60 overflow-hidden">
              <Tweet id={embedTweetId} />
            </div>
          </div>
        )}

        <div className="mt-12">
          {sections.map((section, i) => (
            <div key={i}>
              {i > 0 && (
                <Separator className="mb-12 bg-slate-200/50 dark:bg-slate-700/40" />
              )}
              <section className="pb-12">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
