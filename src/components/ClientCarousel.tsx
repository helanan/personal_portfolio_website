import Image from "next/image";

const companies: { name: string; logo?: string }[] = [
  { name: "R1 RCM",                    logo: "/images/logos/r1rcm.png" },
  { name: "XSOLIS",                    logo: "/images/logos/xsolis.png" },
  { name: "Tractor Supply Company",    logo: "/images/logos/tractor-supply.png" },
  { name: "Nashville Software School", logo: "/images/logos/nss.svg" },
  { name: "Emma / Marigold",           logo: "/images/logos/emma.png" },
  { name: "Listrak",                   logo: "/images/logos/listrak.png" },
  { name: "The Judge Group",           logo: "/images/logos/judge-group.png" },
  { name: "Day & Zimmermann",          logo: "/images/logos/day-zimmermann.png" },
  { name: "CBIZ",                      logo: "/images/logos/cbiz.png" },
  { name: "Ron Jaworski Golf",         logo: "/images/logos/ron-jaworski.png" },
  { name: "McKesson Health Solutions", logo: "/images/logos/mckesson.svg" },
  { name: "Stratford Friends School",  logo: "/images/logos/stratford-friends.png" },
  { name: "The Drexel Triangle",       logo: "/images/logos/drexel-triangle.png" },
  { name: "Premier Marketing Group",   logo: "/images/logos/premier-marketing.svg" },
  { name: "Range Recording Studio",    logo: "/images/logos/range-recording-studio.jpg" },
  { name: "Quaker City Mercantile",    logo: "/images/logos/quaker-city.png" },
  { name: "Raven and Whale Gallery",   logo: "/images/logos/raven-whale.svg" },
  { name: "Miller High Life",          logo: "/images/logos/miller-high-life.svg" },
  { name: "Art In the Age",            logo: "/images/logos/art-in-age.svg" },
  { name: "Framing Hanley",            logo: "/images/logos/framing-hanley.svg" },
];

export default function ClientCarousel() {
  return (
    <section className="py-12 bg-smoke">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Companies I&apos;ve Worked With
          </span>
        </div>
      </div>

      {/* Swipeable on mobile, scrollable on desktop */}
      <div
        className="logo-strip-outer"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="logo-strip-track">
          {companies.map((company, i) => (
            <div key={i} className="flex items-center shrink-0 px-8">
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-50"
                />
              ) : (
                <span className="font-serif text-xl text-gray-mid/60 whitespace-nowrap tracking-wide">
                  {company.name}
                </span>
              )}
              {i < companies.length - 1 && (
                <span className="ml-8 w-1 h-1 rounded-full bg-rose/30 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
