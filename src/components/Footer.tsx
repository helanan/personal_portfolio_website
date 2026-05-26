import Link from "next/link";
import LogoSVG from "./LogoSVG";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <LogoSVG size={28} />
              <span className="font-sans font-semibold text-cream">
                Helana Nosratbakhsh
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed text-cream/50 max-w-xs mb-6">
              Data Engineer & Consultant specializing in scalable pipelines,
              cloud data warehouses, and ML infrastructure.
            </p>
            <div className="w-8 h-px bg-rose" />
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-rose mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/50 hover:text-rose transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-rose mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/in/helana-nosratbakhsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/50 hover:text-rose transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/helanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/50 hover:text-rose transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:helanan@gmail.com"
                  className="font-sans text-sm text-cream/50 hover:text-rose transition-colors duration-200"
                >
                  helanan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-light/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/30">
            © {new Date().getFullYear()} Helana Nosratbakhsh. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/30">
            Available for consulting engagements
          </p>
        </div>
      </div>
    </footer>
  );
}
