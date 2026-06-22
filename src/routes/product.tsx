import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ProductSidebar } from "../components/site/ProductSidebar";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Swastik Group of Steel" },
      { name: "description", content: "Alloy Steel, VSPL Billets, Black & Bright Bar, Wire Rods, Coils, Plates, Pipes and Structural Steel — full catalogue from Swastik Group of Steel." },
      { property: "og:title", content: "Product — Swastik Group of Steel" },
      { property: "og:description", content: "Alloy Steel, VSPL Billets, Black & Bright Bar, Wire Rods, Coils, Plates, Pipes and Structural Steel." },
      { property: "og:url", content: "/product" },
      { property: "og:image", content: "https://www.swastikgroupofsteel.com/img/product/ALLOY%20STEEL_0.jpg" },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  component: ProductPage,
});

const GRADES = [
  "SAE52100", "SAE8620", "SAE4140", "SAE1541", "20MnCr5", "16MnCr5", "EN31",
  "EN19", "EN24", "EN353", "EN1A", "41CR4", "ST52.3", "42CrMo4",
];

function ProductPage() {
  return (
    <>
      <PageHero title="Product" crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]} />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="lg:sticky lg:top-32 lg:order-1 order-2">
            <ProductSidebar active="ALLOY STEEL" />
          </div>

          <div className="lg:order-2 order-1">
            <article className="rounded-3xl border border-border bg-card overflow-hidden shadow-card">
              <div className="aspect-[16/9] bg-muted">
                <img
                  src="https://www.swastikgroupofsteel.com/img/product/ALLOY%20STEEL_0.jpg"
                  alt="Alloy Steel"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-9">
                <span className="chip">Featured</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">ALLOY STEEL</h2>
                <p className="mt-5 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Available alloy steel grades include :
                </p>
                <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {GRADES.map((g) => (
                    <li
                      key={g}
                      className="rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-center text-sm font-semibold text-foreground/90 hover:border-primary/50 hover:bg-primary-soft hover:text-primary transition"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="mt-10 rounded-3xl steel-gradient p-8 md:p-10 shadow-elevated text-steel-foreground">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Get A Free Quote For Industry &amp; Factory
              </h3>
              <p className="mt-3 text-steel-foreground/85 max-w-xl">
                Contact us at the Industrial nearest to you or submit a business inquiry online.
              </p>
              <Link to="/contact" className="btn-primary btn-primary-hover mt-6">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
