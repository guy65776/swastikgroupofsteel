import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Swastik Group of Steel" },
      { name: "description", content: "Reach Swastik Alloys, Shree Ram Steel and Shree Ram Pipe in Rajkot, Gujarat. Phone numbers, emails and office addresses." },
      { property: "og:title", content: "Contact Us — Swastik Group of Steel" },
      { property: "og:description", content: "Reach Swastik Alloys, Shree Ram Steel and Shree Ram Pipe in Rajkot, Gujarat." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const OFFICES = [
  {
    name: "SHREE RAM STEEL",
    lines: ["H.R. / C.R. / G.P.", "COILS / SHEETS AND PLATES", "CHEQUERED PLATES / SLITTING"],
    address: ["OPP.ATIKA RAILWAY CROSSING,", "DHEBAR ROAD (SOUTH),RAJKOT."],
    phones: ["97264 95939", "98250 75776"],
    email: "srsteelrajkot@gmail.com",
  },
  {
    name: "SHREE RAM PIPE",
    lines: ["ERW PIPES", "HR,CR,GP ROUND / SQUARE PIPES", "SEAMLESS PIPES / STRUCTURAL STEEL"],
    address: ["OPP.ATIKA RAILWAY CROSSING,", "DHEBAR ROAD (SOUTH),RAJKOT."],
    phones: ["96877 57017", "80000 88909"],
    email: "srpiperajkot@gmail.com",
  },
  {
    name: "Swastik Alloys",
    lines: ["ALLOY STEEL - BRIGHT BAR", "BLACK BAR- VSPL BILLETS - WIRE RODS"],
    address: ["GONDAL ROAD,", "NR. S.T.WORKSHOP, RAJKOT."],
    phones: ["98255 94929", "99255 49535", "99097 88097"],
    email: "swastikalloysrajkot@gmail.com",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-6">
            {OFFICES.map((o) => (
              <article key={o.name} className="rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-elevated transition-all">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Office</div>
                <h3 className="mt-2 text-xl font-bold text-foreground">{o.name}</h3>
                <ul className="mt-4 text-sm text-muted-foreground space-y-0.5">
                  {o.lines.map((l) => <li key={l}>{l}</li>)}
                </ul>
                <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div className="text-foreground/90">
                      {o.address.map((a) => <div key={a}>{a}</div>)}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                    <Phone className="h-4 w-4 text-primary" />
                    {o.phones.map((p, i) => (
                      <span key={p} className="inline-flex items-center gap-3">
                        <a href={`tel:+91${p.replace(/\s/g, "")}`} className="font-semibold text-foreground hover:text-primary">{p}</a>
                        {i < o.phones.length - 1 && <span className="text-muted-foreground">|</span>}
                      </span>
                    ))}
                  </div>
                  <a href={`mailto:${o.email}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary break-all">
                    <Mail className="h-4 w-4 text-primary" /> {o.email}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <span className="chip">Contact Us</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                Happy To Answer Your Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Send us a message and our team will get back to you within office hours.
              </p>

              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card grid gap-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="name" label="Your name" required />
                  <Field id="email" label="Email address" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="phone" label="Phone" type="tel" />
                  <Field id="company" label="Company" />
                </div>
                <Field id="subject" label="Subject" />
                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-y"
                  />
                </div>

                {sent && (
                  <div className="rounded-lg bg-primary-soft text-primary px-4 py-3 text-sm inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Thanks — your message has been received.
                  </div>
                )}

                <button type="submit" className="btn-primary btn-primary-hover self-start">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            <aside className="space-y-5">
              <div className="rounded-3xl steel-gradient p-7 shadow-elevated text-steel-foreground">
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href="mailto:srsteelrajkot@gmail.com" className="inline-flex items-center gap-2 hover:text-white text-steel-foreground/85"><Mail className="h-4 w-4" />srsteelrajkot@gmail.com</a></li>
                  <li><a href="mailto:srpiperajkot@gmail.com" className="inline-flex items-center gap-2 hover:text-white text-steel-foreground/85"><Mail className="h-4 w-4" />srpiperajkot@gmail.com</a></li>
                  <li><a href="mailto:swastikalloysrajkot@gmail.com" className="inline-flex items-center gap-2 hover:text-white text-steel-foreground/85"><Mail className="h-4 w-4" />swastikalloysrajkot@gmail.com</a></li>
                </ul>
                <h3 className="mt-7 text-xl font-semibold text-white">Office Timing</h3>
                <p className="mt-2 text-sm text-steel-foreground/85 inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 9:30 AM TO 8:30 PM
                </p>
                <h3 className="mt-7 text-xl font-semibold text-white">Follow Us</h3>
                <p className="mt-2 text-sm text-steel-foreground/85">Stay updated with our latest work and announcements.</p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[4/3] bg-muted">
                <iframe
                  title="Rajkot — Swastik Group"
                  src="https://www.google.com/maps?q=Dhebar+Road+Rajkot&output=embed"
                  loading="lazy"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}{required && <span aria-hidden="true" className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
