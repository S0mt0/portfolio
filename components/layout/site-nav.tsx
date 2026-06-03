"use client";

import Link from "next/link";
import { Menu, Palette, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, profile } from "@/lib/portfolio-data";

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";

  return pathname === href || pathname.startsWith(`${href}/`);
};

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeItem = navItems.find((item) => isActivePath(pathname, item.href));

  return (
    <header className="sticky top-0 z-40 px-3 py-3">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-2xl border border-border/70 bg-white/78 px-4 shadow-sm backdrop-blur sm:px-5">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 rotate-[-5deg] items-center justify-center rounded-xl border border-border bg-[#ffe07a]">
            <Palette className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sketch text-xl font-bold leading-none">
              {profile.name}
            </span>
            <span className="block truncate text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {profile.handle} / {activeItem?.code ?? "home"}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full border border-transparent px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-border/70 hover:bg-white",
                  isActive && "border-border bg-[#ffc7e8] text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          type="button"
          size="icon-lg"
          variant="outline"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="rounded-xl border border-border bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <nav aria-label="Mobile navigation" className="mx-3 mt-2 rounded-2xl border border-border bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-border/20 px-1 py-4 text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground last:border-b-0",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                  <span>/{item.code}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
