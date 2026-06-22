import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  "ALLOY STEEL",
  "VSPL BILLETS",
  "BLACK & BRIGHT BAR",
  "WIRE RODS",
  "H.R/HRPO/C.R COILS",
  "CR/GP SLITTING COILS",
  "H.R/C.R/G.P PACKETS",
  "CHEQUERED PLATES",
  "ROUND PIPES",
  "SQUARE PIPES",
  "RECTANGLE PIPES",
  "STRUCTURAL STEEL",
];

export function ProductSidebar({ active }: { active?: string }) {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <h3 className="text-sm font-bold tracking-widest uppercase text-foreground">Our Product</h3>
        <ul className="mt-4 space-y-1">
          {PRODUCTS.map((p) => {
            const isActive = active === p;
            return (
              <li key={p}>
                <Link
                  to="/product"
                  className={[
                    "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-primary-soft hover:text-primary",
                  ].join(" ")}
                >
                  <span>{p}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl steel-gradient p-6 text-steel-foreground">
        <h3 className="text-xl font-semibold text-white">Get A Free Quote For Industry &amp; Factory</h3>
        <p className="mt-2 text-sm text-steel-foreground/80">
          Contact us at the Industrial nearest to you or submit a business inquiry online.
        </p>
        <Link to="/contact" className="btn-primary btn-primary-hover mt-5 text-sm">
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
