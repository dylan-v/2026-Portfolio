"use client";

import * as React from "react";
import type { WorkItem } from "@/data/portfolio";
import { usePreloadImages } from "@/hooks/use-preload-images";
import { HomeSkeleton } from "@/components/skeletons/home-skeleton";
import { asset } from "@/lib/utils";

function getWorkImageUrls(work: WorkItem[]): string[] {
  const urls: string[] = [];
  work.forEach((item) => {
    if (item.image) urls.push(asset(item.image));
    if (item.image2) urls.push(asset(item.image2));
    if (item.company?.icon) urls.push(asset(item.company.icon));
  });
  return urls;
}

type HomeWithSkeletonProps = {
  work: WorkItem[];
  children: React.ReactNode;
};

export function HomeWithSkeleton({ work, children }: HomeWithSkeletonProps) {
  const urls = React.useMemo(() => getWorkImageUrls(work), [work]);
  const allLoaded = usePreloadImages(urls);

  if (!allLoaded) {
    return <HomeSkeleton cardCount={work.length} />;
  }

  return (
    <div
      className="animate-in fade-in duration-300 ease-out"
      style={{ animationFillMode: "backwards" }}
    >
      {children}
    </div>
  );
}
