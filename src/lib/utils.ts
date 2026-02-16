import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix for public assets (e.g. /2026-Portfolio on GH Pages). Empty when no basePath. */
export function basePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

/** Public asset URL: basePath + path (e.g. /avatar.png → /2026-Portfolio/avatar.png). */
export function asset(path: string): string {
  const base = basePath();
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
