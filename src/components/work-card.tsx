import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { WorkItem } from "@/data/portfolio";
import { asset } from "@/lib/utils";

type WorkCardProps = {
  item: WorkItem;
};

const placeholderLinkClass =
  "relative block w-full overflow-hidden rounded-[24px] " +
  "border-[0.5px] border-slate-200/50 dark:border-white/10 " +
  "bg-[#F2EEEB] dark:bg-white/5 backdrop-blur-xl " +
  "transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] " +
  "hover:bg-[#E6DED8] dark:hover:bg-white/10 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const PLACEHOLDER_FRAMES = {
  mobile: "/TravelMobileFrame.svg",
  ai: "/TravelAIFrame.svg",
} as const;

function ImagePlaceholder({
  className,
  frame,
}: { className?: string; frame?: "mobile" | "ai" } = {}) {
  const src = frame ? asset(PLACEHOLDER_FRAMES[frame]) : null;
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className={`h-full w-full object-contain block rounded-[20px] ${className ?? ""}`}
        draggable={false}
        aria-hidden
      />
    );
  }
  return (
    <div
      className={`h-full w-full bg-muted/80 rounded-[20px] border-0 ${className ?? ""}`}
      aria-hidden
    />
  );
}

function CardImage({
  src,
  href,
  className,
  imageClassName,
}: {
  src: string;
  href: string;
  className?: string;
  imageClassName?: string;
}) {
  const isSvg = src.endsWith(".svg");
  const resolvedSrc = asset(src);
  return (
    <Link
      href={href}
      className={`${placeholderLinkClass} ${isSvg ? "block" : "aspect-[16/10]"} ${className ?? ""}`}
    >
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolvedSrc}
          alt=""
          className={`w-full h-auto block ${imageClassName ?? "rounded-[24px]"}`}
          draggable={false}
        />
      ) : (
        <Image
          src={resolvedSrc}
          alt=""
          fill
          className={`object-contain ${imageClassName ?? ""}`}
          unoptimized={false}
          sizes="(max-width: 768px) 100vw, 720px"
        />
      )}
    </Link>
  );
}

function PlaceholderLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${placeholderLinkClass} ${className ?? ""}`}>
      {children}
    </Link>
  );
}

export function WorkCard({ item }: WorkCardProps) {
  const count = item.imagePlaceholders ?? 1;
  const placeholders = Array.from({ length: count }, (_, i) => i);
  const hasCardImage = item.image != null;
  const hasCardImage2 = item.image2 != null;
  const isFeatureLayout = item.imageLayout === "feature";
  const isStackLayout = item.imageLayout === "stack";
  const isSideBySideLayout = item.imageLayout === "sideBySide";

  const imagesContainerClass = isStackLayout
    ? "mt-6 grid w-full grid-cols-1 gap-4 sm:mt-8 sm:gap-6"
    : isFeatureLayout
      ? "mt-6 grid w-full grid-cols-1 grid-rows-2 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6"
      : isSideBySideLayout
        ? "mt-6 flex w-full flex-nowrap items-stretch gap-4 sm:mt-8 sm:gap-6"
        : count === 1
        ? "mt-6 w-full sm:mt-8"
        : "mt-6 grid w-full gap-4 sm:mt-8 sm:gap-6 " +
          (count === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3");

  return (
    <article className="py-10 first:pt-6 sm:py-14 sm:first:pt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex min-w-0 shrink-0 flex-col gap-0 sm:w-56">
          <h2 className="truncate text-2xl font-semibold tracking-tight">
            <Link
              href={item.href}
              className="group inline-flex max-w-full items-center gap-0.5 hover:text-muted-foreground"
              title={item.title}
            >
              <span className="min-w-0 truncate">{item.title}</span>
              <span className="shrink-0 -ml-px transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden>
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </h2>
          <p className="text-base text-muted-foreground">
            {item.company ? (
              <span className="inline-flex items-center gap-1.5">
                {item.company.icon ? (
                  <Image
                    src={asset(item.company.icon)}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0 rounded-[3px]"
                    aria-hidden
                    draggable={false}
                  />
                ) : (
                  <span
                    className="size-4 shrink-0 rounded-[3px] bg-muted inline-block"
                    aria-hidden
                  />
                )}
                <span className="tabular-nums">{item.company.name} · {item.meta}</span>
              </span>
            ) : (
              item.meta
            )}
          </p>
        </div>
        {item.description ? (
          <p className="min-w-0 max-w-xl flex-1 text-base text-muted-foreground leading-relaxed sm:pt-0.5">
            {item.description}
          </p>
        ) : null}
      </div>

      <div className={imagesContainerClass}>
        {isStackLayout && hasCardImage && hasCardImage2 ? (
          <>
            <CardImage src={item.image!} href={item.href} className="p-8" />
            <CardImage src={item.image2!} href={item.href} />
          </>
        ) : isSideBySideLayout && hasCardImage && hasCardImage2 ? (
          <>
            <CardImage
              src={item.image2!}
              href={item.href}
              className="p-8 pb-0 w-fit max-w-full"
              imageClassName="rounded-none"
            />
            <CardImage
              src={item.image!}
              href={item.href}
              className="p-8 pb-0 w-fit max-w-full"
              imageClassName="rounded-none"
            />
          </>
        ) : isFeatureLayout ? (
          <>
            <div className="sm:row-span-2">
              {hasCardImage ? (
                <CardImage
                  src={item.image!}
                  href={item.href}
                  className="sm:aspect-auto sm:h-full sm:min-h-0"
                />
              ) : (
                <PlaceholderLink href={item.href} className="aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-0">
                  <ImagePlaceholder frame="mobile" />
                </PlaceholderLink>
              )}
            </div>
            {hasCardImage2 ? (
              <CardImage
                src={item.image2!}
                href={item.href}
                className="sm:h-full sm:min-h-0"
              />
            ) : (
              <PlaceholderLink href={item.href} className="aspect-[16/10] sm:h-full sm:min-h-0">
                <ImagePlaceholder frame="ai" className="min-h-[120px] sm:min-h-0" />
              </PlaceholderLink>
            )}
            <PlaceholderLink href={item.href} className="aspect-[16/10] sm:h-full sm:min-h-0">
              <ImagePlaceholder frame="mobile" className="min-h-[120px] sm:min-h-0" />
            </PlaceholderLink>
          </>
        ) : (
          placeholders.map((i) =>
            i === 0 && hasCardImage ? (
              <CardImage key={i} src={item.image!} href={item.href} className={item.href === "/work/intuit-developer-tools" ? "p-8 pb-0" : item.href === "/work/finance-superapp" ? "flex flex-col items-end justify-end p-8 pb-0 pr-0 w-fit max-w-full" : "p-8"} imageClassName={item.href === "/work/finance-superapp" ? "rounded-none" : undefined} />
            ) :             i === 1 && hasCardImage2 ? (
              <CardImage key={i} src={item.image2!} href={item.href} className="aspect-[16/10] p-8" />
            ) : (
              <PlaceholderLink key={i} href={item.href} className="aspect-[16/10]">
                <ImagePlaceholder />
              </PlaceholderLink>
            )
          )
        )}
      </div>
    </article>
  );
}
