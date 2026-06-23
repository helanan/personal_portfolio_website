"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const employers: { name: string; logo?: string }[] = [
  { name: "R1 RCM",                    logo: "/images/logos/r1rcm.svg" },
  { name: "XSOLIS",                    logo: "/images/logos/xsolis.svg" },
  { name: "Tractor Supply Company",    logo: "/images/logos/tractor-supply.svg" },
  { name: "Nashville Software School", logo: "/images/logos/nss.svg" },
  { name: "Emma / Marigold",           logo: "/images/logos/emma.svg" },
  { name: "Listrak",                   logo: "/images/logos/listrak.svg" },
  { name: "The Judge Group",           logo: "/images/logos/judge-group.svg" },
  { name: "Day & Zimmermann",          logo: "/images/logos/day-zimmermann.svg" },
];

// Add more clients here as you complete your list
const clients: { name: string; logo?: string }[] = [
  { name: "CBIZ",                       logo: "/images/logos/cbiz.svg" },
  { name: "Ron Jaworski",               logo: "/images/logos/ron-jaworski.svg" },
  { name: "McKesson Health Solutions",  logo: "/images/logos/mckesson.svg" },
  { name: "Stratford Friends School",   logo: "/images/logos/stratford-friends.svg" },
  { name: "Nashville Software School",  logo: "/images/logos/nss.svg" },
  { name: "The Drexel Triangle",        logo: "/images/logos/drexel-triangle.svg" },
  { name: "Premier Marketing Group",    logo: "/images/logos/premier-marketing.svg" },
  { name: "Range Records",             logo: "/images/logos/range-records.svg" },
  { name: "Quaker City Mercantile",     logo: "/images/logos/quaker-city.svg" },
  { name: "Raven and Whale Gallery",    logo: "/images/logos/raven-whale.svg" },
  { name: "Miller High Life",           logo: "/images/logos/miller-high-life.svg" },
  { name: "Art In the Age",            logo: "/images/logos/art-in-age.svg" },
  { name: "Framing Hanley",            logo: "/images/logos/framing-hanley.svg" },
];

type Item =
  | { type: "logo"; name: string; logo?: string }
  | { type: "sep"; label: string };

const track: Item[] = [
  ...employers.map((e) => ({ type: "logo" as const, ...e })),
  { type: "sep", label: "Clients & Collaborators" },
  ...clients.map((c) => ({ type: "logo" as const, ...c })),
  { type: "sep", label: "Employers" },
];

const doubled = [...track, ...track];

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const rafRef   = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current -= 0.6; // px per frame ≈ 36px/s at 60fps
        const half = el.scrollWidth / 2;
        if (half > 0 && Math.abs(posRef.current) >= half) {
          posRef.current = 0;
        }
        el.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="py-12 bg-smoke">
      {/* Label row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Employers
          </span>
        </div>
        <span className="text-gray-mid/40 text-xs">·</span>
        <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
          Clients &amp; Collaborators
        </span>
      </div>

      {/* Scrolling strip */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex w-max"
          style={{ transform: "translate3d(0, 0, 0)", willChange: "transform" }}
        >
          {doubled.map((item, i) =>
            item.type === "sep" ? (
              <div key={i} className="flex items-center shrink-0 px-10 gap-3" aria-hidden="true">
                <div className="w-px h-6 bg-rose/30" />
                <span className="text-[9px] font-sans uppercase tracking-widest text-rose/60 whitespace-nowrap">
                  {item.label}
                </span>
                <div className="w-px h-6 bg-rose/30" />
              </div>
            ) : (
              <div
                key={i}
                className="flex items-center shrink-0 px-8"
                aria-hidden={i >= track.length ? "true" : undefined}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain grayscale opacity-50 hover:opacity-80 transition-opacity duration-300"
                  />
                ) : (
                  <span className="font-serif text-xl text-gray-mid/60 whitespace-nowrap tracking-wide">
                    {item.name}
                  </span>
                )}
                <span className="ml-8 w-1 h-1 rounded-full bg-rose/30 shrink-0" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
