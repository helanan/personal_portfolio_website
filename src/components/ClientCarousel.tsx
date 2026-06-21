import Image from "next/image";

/*
  ── Client logos ──────────────────────────────────────────
  Replace each entry with your actual clients.

  Text-only entry:
    { name: "Company Name" }

  With logo image (add file to /public/images/logos/):
    { name: "Company Name", logo: "/images/logos/company.svg" }
  ─────────────────────────────────────────────────────────
*/
const clients: { name: string; logo?: string }[] = [
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
  { name: "Client Name" },
];

export default function ClientCarousel() {
  // Double the list so the marquee loops seamlessly
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 bg-smoke">
      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Trusted By
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="marquee-wrapper relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 px-10"
              aria-hidden={i >= clients.length ? true : undefined}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-50 hover:opacity-80 transition-opacity duration-300"
                />
              ) : (
                <span className="font-serif text-xl text-gray-mid/60 hover:text-gray-warm transition-colors duration-300 whitespace-nowrap tracking-wide">
                  {client.name}
                </span>
              )}

              {/* Dot separator */}
              <span className="ml-10 w-1 h-1 rounded-full bg-rose/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
