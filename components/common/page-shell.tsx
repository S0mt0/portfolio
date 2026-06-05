import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </main>
  );
}
