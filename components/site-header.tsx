import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-xl font-semibold tracking-wide text-maroon transition-colors hover:text-gold">
          Sweety Enterprise
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-maroon/80 transition duration-200 hover:bg-gold/20 hover:text-maroon"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
