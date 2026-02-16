"use client";

import { useEffect, useState } from "react";

/**
 * Preloads an array of image URLs and returns true once all have loaded or failed.
 * Used to delay revealing page content until assets are ready.
 */
export function usePreloadImages(urls: string[]): boolean {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    setAllLoaded(false);
    const deduped = Array.from(new Set(urls)).filter(Boolean);
    if (deduped.length === 0) {
      setAllLoaded(true);
      return;
    }

    let cancelled = false;
    let pending = deduped.length;
    const checkDone = () => {
      pending -= 1;
      if (pending <= 0 && !cancelled) setAllLoaded(true);
    };

    const images: HTMLImageElement[] = [];
    deduped.forEach((src) => {
      const img = new Image();
      img.onload = checkDone;
      img.onerror = checkDone;
      img.src = src;
      images.push(img);
    });

    return () => {
      cancelled = true;
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      });
    };
  }, [urls.join(",")]);

  return allLoaded;
}
