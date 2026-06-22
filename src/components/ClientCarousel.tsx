import Image from "next/image";

export const employers: { name: string; logo?: string }[] = [
  { name: "R1 RCM",                    logo: "/images/logos/r1rcm.svg" },
  { name: "XSOLIS",                    logo: "/images/logos/xsolis.svg" },
  { name: "Tractor Supply Company",    logo: "/images/logos/tractor-supply.svg" },
  { name: "Nashville Software School", logo: "/images/logos/nss.svg" },
  { name: "Emma / Marigold",           logo: "/images/logos/emma.svg" },
  { name: "Listrak",                   logo: "/images/logos/listrak.svg" },
  { name: "The Judge Group",           logo: "/images/logos/judge-group.svg" },
  { name: "Day & Zimmermann",          logo: "/images/logos/day-zimmermann.svg" },
];

// Add more clients here as you complete your full list
export const collaborators: { name: string; logo?: string }[] = [
  { name: "CBIZ",                        logo: "/images/logos/cbiz.svg" },
  { name: "Ron Jaworski",                logo: "/images/logos/ron-jaworski.svg" },
  { name: "McKesson Health Solutions",   logo: "/images/logos/mckesson.svg" },
  { name: "Stratford Friends School",    logo: "/images/logos/stratford-friends.svg" },
  { name: "Nashville Software School",   logo: "/images/logos/nss.svg" },
  { name: "The Drexel Triangle",         logo: "/images/logos/drexel-triangle.svg" },
  { name: "Premier Marketing Group",     logo: "/images/logos/premier-marketing.svg" },
  { name: "Range Records",              logo: "/images/logos/range-records.svg" },
  { name: "Quaker City Mercantile",      logo: "/images/logos/quaker-city.svg" },
  { name: "Raven and Whale Gallery",     logo: "/images/logos/raven-whale.svg" },
  { name: "Miller High Life",            logo: "/images/logos/miller-high-life.svg" },
  { name: "Art In the Age",             logo: "/images/logos/art-in-age.svg" },
  { name: "Framing Hanley",             logo: "/images/logos/framing-hanley.svg" },
];

interface CarouselProps {
  items: { name: string; logo?: string }[];
  label: string;
  direction?: "left" | "right";
}

export default function ClientCarousel({
  items,
  label,
  direction = "left",
}: CarouselProps) {
  const doubled = [...items, ...items];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            {label}
          </span>
        </div>
      </div>

      <div
        className="marquee-wrapper relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="marquee-track"
          style={
            direction === "right"
              ? { animationDirection: "reverse" }
              : undefined
          }
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 px-10"
              aria-hidden={i >= items.length ? true : undefined}
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
                <span className="font-serif text-xl text-gray-mid/60 hover:text-gray-warm transition-colors duration-300 whitespace-nowrap tracking-wide">
                  {item.name}
                </span>
              )}
              <span className="ml-10 w-1 h-1 rounded-full bg-rose/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
