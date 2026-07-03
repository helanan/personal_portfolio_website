"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LogoSVG from "./LogoSVG";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-smoke shadow-[0_1px_0_0_#e8e4de]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <LogoSVG size={30} />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-sans font-semibold text-charcoal tracking-wide">
              Helana Nosratbakhsh
            </div>
            <div className="text-[10px] font-sans text-gray-mid tracking-widest uppercase">
              Data Engineer
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-sans tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-charcoal"
                  : "text-gray-warm hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-smoke">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-sans text-charcoal hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-block px-6 py-3.5 bg-charcoal text-cream text-sm font-sans text-center tracking-wide"
            >
              Work With Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
