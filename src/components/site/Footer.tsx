import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

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

const LINKS: { to: "/about" | "/product" | "/brands" | "/contact" | "/industries"; label: string }[] = [
  { to: "/about", label: "About Us" },
  { to: "/product", label: "Product" },
  { to: "/brands", label: "Brands We Deal" },
  { to: "/contact", label: "Contact Us" },
  { to: "/industries", label: "Industries We Serve" },
];

export function Footer() {
  return (
    <footer className="steel-gradient mt-12">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://www.swastikgroupofsteel.com/img/logos.png"
              alt="Swastik Group of Steel"
              className="h-12 w-auto bg-white/95 rounded-md p-2"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mt-5 text-sm text-steel-foreground/80 leading-relaxed">
            Two decades of trust across Saurashtra and northern Gujarat — Swastik Alloys,
            Shree Ram Steel and Shree Ram Pipe under one industrial group.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white">Our Product</h3>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-steel-foreground/80">
            {PRODUCTS.map((p) => (
              <li key={p}>
                <Link to="/product" className="hover:text-white transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white">Useful Link</h3>
          <ul className="mt-5 space-y-2 text-sm text-steel-foreground/80">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.swastikgroupofsteel.com/img/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Brochure
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white">Get In Touch</h3>
          <div className="mt-5 space-y-5 text-sm text-steel-foreground/85">
            <div>
              <div className="font-semibold text-white">SHREE RAM STEEL</div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <a href="tel:+919726495939" className="hover:text-white">+91-97264 95939</a>
                <span className="opacity-50">|</span>
                <a href="tel:+919825075776" className="hover:text-white">+91-98250 75776</a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">SHREE RAM PIPE</div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <a href="tel:+919687757017" className="hover:text-white">+91-96877 57017</a>
                <span className="opacity-50">|</span>
                <a href="tel:+918000088909" className="hover:text-white">+91-80000 88909</a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">SWASTIK ALLOYS</div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <a href="tel:+919825594929" className="hover:text-white">+91-98255 94929</a>
                <span className="opacity-50">|</span>
                <a href="tel:+919925549535" className="hover:text-white">+91-99255 49535</a>
              </div>
              <a href="tel:+919909788097" className="block hover:text-white mt-1">+91-99097 88097</a>
            </div>
            <div className="space-y-1">
              <a href="mailto:srsteelrajkot@gmail.com" className="block hover:text-white inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" />srsteelrajkot@gmail.com</a>
              <a href="mailto:srpiperajkot@gmail.com" className="block hover:text-white inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" />srpiperajkot@gmail.com</a>
              <a href="mailto:swastikalloysrajkot@gmail.com" className="block hover:text-white inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" />swastikalloysrajkot@gmail.com</a>
            </div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-steel-foreground/70">
              <Clock className="h-3.5 w-3.5" /> OFFICE TIMING : 9:30 AM TO 8:30 PM
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-steel-foreground/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>Copyright 2023 Swastik Alloys</div>
          <div>Hand-crafted &amp; made with care by D'Final Solution</div>
        </div>
      </div>
    </footer>
  );
}
