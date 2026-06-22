import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock, Phone, Mail, Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Product" },
  { to: "/industries", label: "Industries We Serve" },
  { to: "/brands", label: "Brands We Deal" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-steel text-steel-foreground/90 text-xs">
        <div className="container-x flex h-9 items-center justify-end gap-6">
          <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> OFFICE TIMING : 9:30 AM TO 8:30 PM</span>
          <a href="tel:+919825594929" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-3.5 w-3.5" /> +91-98255 94929
          </a>
          <a href="mailto:swastikalloysrajkot@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> swastikalloysrajkot@gmail.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={[
          "transition-all duration-300 border-b",
          scrolled
            ? "bg-white/85 backdrop-blur-md border-border shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)]"
            : "bg-white/95 border-transparent",
        ].join(" ")}
      >
        <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Swastik Group of Steel — Home">
            <img
              src="https://www.swastikgroupofsteel.com/img/logos.png"
              alt="Swastik Group of Steel"
              width={170}
              height={48}
              className="h-10 w-auto shrink-0 md:h-12"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-primary-soft" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-primary-soft/60" }}
                className="px-3.5 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://www.swastikgroupofsteel.com/img/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-md text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary-soft/60"
            >
              Brochure
            </a>
            <Link
              to="/contact"
              className="btn-primary btn-primary-hover ml-2 text-sm"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container-x py-3 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary bg-primary-soft" }}
                  inactiveProps={{ className: "text-foreground/85" }}
                  className="px-3 py-3 rounded-md text-sm font-semibold"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="https://www.swastikgroupofsteel.com/img/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-md text-sm font-semibold text-foreground/85"
              >
                Brochure
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary btn-primary-hover mt-2 text-sm"
              >
                Contact <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground space-y-2">
                <div className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> OFFICE TIMING : 9:30 AM TO 8:30 PM</div>
                <a href="tel:+919825594929" className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +91-98255 94929</a>
                <a href="mailto:swastikalloysrajkot@gmail.com" className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> swastikalloysrajkot@gmail.com</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
