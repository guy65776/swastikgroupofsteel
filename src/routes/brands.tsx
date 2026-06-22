import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ProductSidebar } from "../components/site/ProductSidebar";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands We Deal In — Swastik Group of Steel" },
      { name: "description", content: "Brands we deal in — authorised distributor of leading Indian steel manufacturers." },
      { property: "og:title", content: "Brands We Deal In — Swastik Group of Steel" },
      { property: "og:description", content: "Brands we deal in — authorised distributor of leading Indian steel manufacturers." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

const LOGOS = [
  "https://www.swastikgroupofsteel.com/img/industry/07.png",
  "https://www.swastikgroupofsteel.com/img/industry/03.png",
  "https://www.swastikgroupofsteel.com/img/industry/06.png",
  "https://www.swastikgroupofsteel.com/img/industry/02.png",
  "https://www.swastikgroupofsteel.com/img/industry/01.png",
  "https://www.swastikgroupofsteel.com/img/industry/04.png",
  "https://www.swastikgroupofsteel.com/img/industry/05.png",
  "https://www.swastikgroupofsteel.com/img/industry/08f.png",
  "https://www.swastikgroupofsteel.com/img/industry/bra1.png",
  "https://www.swastikgroupofsteel.com/img/industry/aspl_01_01%20(1)_0.jpg",
  "https://www.swastikgroupofsteel.com/img/industry/bra3.png",
  "https://www.swastikgroupofsteel.com/img/industry/bra4.png",
];

function BrandsPage() {
  return (
    <>
      <PageHero title="Brands We Deal In" crumbs={[{ label: "Home", to: "/" }, { label: "Brands We Deal In" }]} />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <span className="chip">Brands We Deal In</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">BRANDS WE DEAL IN</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              We work with India's most trusted steel manufacturers — supplying every grade and form
              our customers rely on.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {LOGOS.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[4/3] rounded-2xl border border-border bg-card grid place-items-center p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                >
                  <img
                    src={src}
                    alt={`Brand ${i + 1}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <ProductSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
