import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ProductSidebar } from "../components/site/ProductSidebar";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Swastik Group of Steel" },
      { name: "description", content: "Swastik Group of Steel — Swastik Alloys, Shree Ram Steel and Shree Ram Pipe. Two decades of trust in the steel trading industry." },
      { property: "og:title", content: "About Swastik Group of Steel" },
      { property: "og:description", content: "Who we are: Swastik Alloys, Shree Ram Steel and Shree Ram Pipe." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div className="space-y-12">
            <div>
              <span className="chip">Who We Are</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">SWASTIK GROUP</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We have been in the steel trading industry for more than 2 decades, which has helped us
                to have presence in majority industries across saurashtra and northern gujarat.
              </p>
              <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-card">
                <img
                  src="https://www.swastikgroupofsteel.com/img/about/abt.jpg"
                  alt="Swastik Group"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <article className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-card">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Division 01</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">SWASTIK ALLOYS</h3>
              <p className="mt-4 text-muted-foreground">
                We are market leaders in steel trading industry which includes :
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {["Bright Bars", "Black Bars", "Billets", "Wire Rods", "Blooms"].map((i) => (
                  <li key={i} className="inline-flex items-center gap-2 text-foreground/90"><ChevronRight className="h-4 w-4 text-primary" />{i}</li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground">We are authorised distributor of :</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["VSPL(RINL)", "ARJAS STEEL", "ARORA STEEL", "JSPL"].map((b) => (
                  <li key={b} className="chip">{b}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-card">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Division 02</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">SHREE RAM STEEL</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                SHREE RAM STEEL COMMENCED IN 2016, AND HAVE ESTABLISHED THEIR NAME AS ONE OF THE
                BIGGEST WHOLESALERS AND STOCKIST IN COLD ROLLED(CR), HOT ROLLED(HR) AND
                GALVANIZED(GP) COIL AND SHEET/PLATES.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-card">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Division 03</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">SHREE RAM PIPE</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                SHREE RAM PIPE STARTED LATER IN 2021, WHERE WE DEAL IN ALL TYPES OF ERW, HR, CR AND GP
                ROUND / SQUARE PIPES AND WE ALSO DEAL IN ALL TYPES OF STRUCTURAL STEEL WHICH INCLUDES
                ANGLE, CHANNEL, I-BEAM, FLAT BAR AND GIRDERS.
              </p>
            </article>
          </div>

          <div className="lg:sticky lg:top-32">
            <ProductSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
