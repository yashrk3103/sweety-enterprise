import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram", icon: "IG" },
  { href: "https://www.facebook.com", label: "Facebook", icon: "FB" },
  { href: "https://wa.me/919898077321", label: "WhatsApp", icon: "WA" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-maroon/10 bg-maroon py-10 text-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-heading text-2xl">Sweety Enterprise</h2>
            <p className="mt-2 text-sm text-cream/90">D-201 Navkar Palace, Opp. Gadhpur Township, Khadsad, Surat, Gujarat – 394326</p>
            <p className="mt-1 text-sm text-cream/90">+91 9898077321 / 9033043868 • sweetykhunt345@gmail.com</p>
          </div>
          <div className="flex items-start gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full border border-gold/60 px-3 py-2 text-xs font-semibold tracking-wide text-gold transition duration-200 hover:bg-gold hover:text-maroon"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs text-cream/80">© {new Date().getFullYear()} Sweety Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
}
