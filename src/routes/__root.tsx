import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary btn-primary-hover">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70dvh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary btn-primary-hover"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost text-foreground border-border hover:bg-muted">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Swastik Group of Steel — Steel Trading, Coils, Pipes & Structural Steel" },
      { name: "description", content: "Swastik Group — two decades in steel trading across Saurashtra & North Gujarat. Swastik Alloys, Shree Ram Steel and Shree Ram Pipe." },
      { name: "author", content: "Swastik Group of Steel" },
      { property: "og:site_name", content: "Swastik Group of Steel" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Swastik Group of Steel" },
      { property: "og:description", content: "Authorised distributor of VSPL (RINL), ARJAS STEEL, ARORA STEEL and JSPL. Bright Bars, Black Bars, Billets, Wire Rods, Blooms, Coils, Pipes and Structural Steel." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://www.swastikgroupofsteel.com/img/fav.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Swastik Group of Steel",
          url: "https://www.swastikgroupofsteel.com/",
          logo: "https://www.swastikgroupofsteel.com/img/logos.png",
          email: "swastikalloysrajkot@gmail.com",
          telephone: "+91-98255-94929",
          address: { "@type": "PostalAddress", addressLocality: "Rajkot", addressRegion: "Gujarat", addressCountry: "IN" },
          subOrganization: [
            { "@type": "Organization", name: "Swastik Alloys" },
            { "@type": "Organization", name: "Shree Ram Steel" },
            { "@type": "Organization", name: "Shree Ram Pipe" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md">
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-[60dvh]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
