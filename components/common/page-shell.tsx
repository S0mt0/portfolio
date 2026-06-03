import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("mx-auto w-full max-w-7xl px-3 py-3 sm:px-6 lg:px-8", className)}>
      <div className="scribble-bg relative overflow-hidden rounded-[1.25rem] border border-border/60 p-3 sm:p-4">
        <div className="relative mx-auto max-w-6xl">
          {children}
        </div>
      </div>
    </main>
  );
}
