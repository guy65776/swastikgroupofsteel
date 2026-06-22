import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to?: "/" | "/about" | "/product" | "/industries" | "/brands" | "/contact"; }

export function PageHero({ title, crumbs }: { title: string; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden steel-gradient">
      <div className="absolute inset-0 opacity-[0.07] surface-grid pointer-events-none" />
      <div className="container-x py-16 md:py-20 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-white reveal">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-steel-foreground/80">
            {crumbs.map((c, i) => (
              <li key={i} className="inline-flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
