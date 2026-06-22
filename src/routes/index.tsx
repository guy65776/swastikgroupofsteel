import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Factory, Award, ChevronRight, Phone, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastik Group of Steel — Steel Trading, Coils, Pipes & Structural Steel" },
      { name: "description", content: "Two decades of trust in steel trading across Saurashtra and North Gujarat. Swastik Alloys, Shree Ram Steel and Shree Ram Pipe — authorised distributor of VSPL (RINL), ARJAS, ARORA & JSPL." },
      { property: "og:title", content: "Swastik Group of Steel" },
      { property: "og:description", content: "Bright Bars, Black Bars, Billets, Wire Rods, Blooms, Coils, Pipes and Structural Steel — backed by 20+ years of industry trust." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://www.swastikgroupofsteel.com/img/about/abt.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const DIVISIONS = [
  {
    name: "SWASTIK ALLOYS",
    tag: "Alloy & bar steel trading",
    items: ["Bright Bars", "Black Bars", "Billets", "Wire Rods", "Blooms"],
    phone: "+91-98255 94929",
    email: "swastikalloysrajkot@gmail.com",
  },
  {
    name: "SHREE RAM STEEL",
    tag: "Coils, sheets & plates",
    items: ["Cold Rolled (CR)", "Hot Rolled (HR)", "Galvanized (GP) Coil", "Sheet / Plates"],
    phone: "+91-97264 95939",
    email: "srsteelrajkot@gmail.com",
  },
  {
    name: "SHREE RAM PIPE",
    tag: "Pipes & structural steel",
    items: ["ERW, HR, CR & GP Round / Square Pipes", "Angle", "Channel", "I-Beam", "Flat Bar", "Girders"],
    phone: "+91-96877 57017",
    email: "srpiperajkot@gmail.com",
  },
];

const PRODUCTS = [
  "ALLOY STEEL", "VSPL BILLETS", "BLACK & BRIGHT BAR", "WIRE RODS",
  "H.R/HRPO/C.R COILS", "CR/GP SLITTING COILS", "H.R/C.R/G.P PACKETS", "CHEQUERED PLATES",
  "ROUND PIPES", "SQUARE PIPES", "RECTANGLE PIPES", "STRUCTURAL STEEL",
];

const BRANDS = ["VSPL(RINL)", "ARJAS STEEL", "ARORA STEEL", "JSPL"];

const INDUSTRIES = [
  "MAJORITY FORGING INDUSTRIES",
  "AUTO PARTS MANUFACTURERS",
  "BEARING MANUFACTURERS",
  "BORING INDUSTRIES",
  "OTHER MACHINING INDUSTRIES",
  "FABRICATION INDUSTRIES",
  "HOIST CRANE MANUFACTURERS",
  "LASER CUTTING INDUSTRIES",
  "AGRICULTURE RELATED INDUSTRIES",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden steel-gradient">
        <div className="absolute inset-0 opacity-[0.08] surface-grid pointer-events-none" aria-hidden="true" />
        <div className="container-x relative grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 py-16 md:py-24 lg:py-28 items-center">
          <div className="reveal">
            <span className="chip bg-white/10 text-white border-white/20">Since 2003 · Rajkot, Gujarat</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Steel that builds<br />
              <span className="text-primary">India's industry.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-steel-foreground/85 leading-relaxed">
              We have been in the steel trading industry for more than 2 decades, which has helped us
              to have presence in majority industries across Saurashtra and northern Gujarat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/product" className="btn-primary btn-primary-hover">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost text-white hover:bg-white/10">
                Talk to our team
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "20+", v: "Years of trust" },
                { k: "3", v: "Business divisions" },
                { k: "12+", v: "Product categories" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl md:text-4xl font-bold text-white">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-steel-foreground/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative reveal">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elevated">
              <img
                src="https://www.swastikgroupofsteel.com/img/about/abt.jpg"
                alt="Swastik Group steel operations"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-steel/60 via-transparent to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 glass-card rounded-2xl p-5 w-72">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Authorised Distributor</div>
                  <div className="text-xs text-muted-foreground">VSPL · ARJAS · ARORA · JSPL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorised brands marquee */}
      <section className="border-y border-border bg-surface-2">
        <div className="container-x py-6 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Authorised Distributor Of
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {BRANDS.map((b) => (
              <span key={b} className="text-base md:text-lg font-bold text-foreground/80">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="chip">Who We Are</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">SWASTIK GROUP</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              We have been in the steel trading industry for more than 2 decades, which has helped us
              to have presence in majority industries across Saurashtra and northern Gujarat.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "20+ Years Experience", body: "Two decades of presence across majority industries in Saurashtra and North Gujarat." },
              { icon: Factory, title: "Three Strong Divisions", body: "Swastik Alloys, Shree Ram Steel and Shree Ram Pipe — under one trusted group." },
              { icon: ShieldCheck, title: "Authorised Distributor", body: "VSPL (RINL), ARJAS STEEL, ARORA STEEL and JSPL." },
              { icon: Truck, title: "Wide Industry Reach", body: "Serving forging, auto parts, bearings, fabrication, laser cutting and more." },
            ].map((f) => (
              <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section-y bg-surface-2 border-y border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="chip">Our Divisions</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Three businesses. One group.</h2>
            </div>
            <Link to="/about" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {DIVISIONS.map((d, i) => (
              <article key={d.name} className="rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-elevated transition-all relative overflow-hidden">
                <div aria-hidden="true" className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Division {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-xl font-bold text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.tag}</p>
                <ul className="mt-5 space-y-2">
                  {d.items.map((it) => (
                    <li key={it} className="text-sm text-foreground/85 inline-flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-primary" /> {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border space-y-1 text-sm">
                  <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary">
                    <Phone className="h-4 w-4" /> {d.phone}
                  </a>
                  <a href={`mailto:${d.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary break-all">
                    <Mail className="h-4 w-4" /> {d.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="chip">Our Product</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">A complete steel catalogue</h2>
            </div>
            <Link to="/product" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p}
                to="/product"
                className="group rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-primary">Product</div>
                <div className="mt-2 font-semibold text-foreground">{p}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y bg-surface-2 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="chip">Industries We Serve</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Trusted across critical sectors</h2>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INDUSTRIES.map((i) => (
              <li key={i} className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground/90 shadow-card hover:border-primary/40 transition">
                <span className="text-primary mr-2">◆</span>{i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl steel-gradient p-8 md:p-14 shadow-elevated">
            <div className="absolute inset-0 opacity-[0.08] surface-grid pointer-events-none" aria-hidden="true" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Get A Free Quote For Industry &amp; Factory
                </h2>
                <p className="mt-3 text-steel-foreground/85 max-w-xl">
                  Contact us at the Industrial nearest to you or submit a business inquiry online.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary btn-primary-hover">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="https://www.swastikgroupofsteel.com/img/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost text-white hover:bg-white/10">
                    Download Brochure
                  </a>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                    <a href="tel:+919825594929" className="font-semibold text-foreground">+91-98255 94929</a>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
                    <div className="font-semibold text-foreground">Rajkot, Gujarat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
