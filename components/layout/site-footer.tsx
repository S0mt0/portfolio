import Link from "next/link";

import { navItems, profile, socialLinks } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p>
            {profile.handle} / {profile.name}. Built as a live security-workstation portfolio.
          </p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap gap-3 px-1">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="inline-flex items-center gap-2 border-b border-border/40 py-1 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-primary"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
