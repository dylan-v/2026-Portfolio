import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
        /** Custom variant (not in shadcn docs): softer gray for meta/case studies */
        muted:
          "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
        indigo:
          "border-transparent bg-indigo-100 text-indigo-800 hover:bg-indigo-100/80 dark:bg-indigo-100/60 dark:text-indigo-900 dark:hover:bg-indigo-100/70",
        violet:
          "border-transparent bg-violet-100 text-violet-800 hover:bg-violet-100/80 dark:bg-violet-100/60 dark:text-violet-900 dark:hover:bg-violet-100/70",
        slate:
          "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-100/80 dark:bg-slate-100/60 dark:text-slate-900 dark:hover:bg-slate-100/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
