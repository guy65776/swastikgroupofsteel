import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ProductSidebar } from "../components/site/ProductSidebar";
import { Cog, Car, Disc, Drill, Wrench, Hammer, ConstructionIcon as Crane, Zap, Wheat } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Swastik Group of Steel" },
      { name: "description", content: "Forging, auto parts, bearings, boring, machining, fabrication, hoist crane, laser cutting and agriculture industries served by Swastik Group of Steel." },
      { property: "og:title", content: "Industries We Serve — Swastik Group of Steel" },
      { property: "og:description", content: "Industries served by Swastik Group of Steel across Saurashtra and North Gujarat." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const ITEMS = [
  { label: "MAJORITY FORGING INDUSTRIES", icon: Hammer },
  { label: "AUTO PARTS MANUFACTURERS", icon: Car },
  { label: "BEARING MANUFACTURERS", icon: Disc },
  { label: "BORING INDUSTRIES", icon: Drill },
  { label: "OTHER MACHINING INDUSTRIES", icon: Cog },
  { label: "FABRICATION INDUSTRIES", icon: Wrench },
  { label: "HOIST CRANE MANUFACTURERS", icon: Crane },
  { label: "LASER CUTTING INDUSTRIES", icon: Zap },
  { label: "AGRICULTURE RELATED INDUSTRIES", icon: Wheat },
];

function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries We Serve" crumbs={[{ label: "Home", to: "/" }, { label: "Industries We Serve" }]} />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <span className="chip">Industries We Serve</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Trusted partner across India's heavy-industry value chain
            </h2>

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {ITEMS.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary-soft text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold uppercase tracking-wide text-foreground">{label}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-32">
            <ProductSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
