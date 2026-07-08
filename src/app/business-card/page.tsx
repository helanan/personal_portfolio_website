import QRCode from "qrcode";
import LogoSVG from "@/components/LogoSVG";
import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Business Card | Helana Nosratbakhsh",
  description: "Scan to save Helana Nosratbakhsh's contact information.",
};

export default async function BusinessCardPage() {
  const vcardUrl = "https://helanan.com/helana.vcf";

  const qrDataUrl = await QRCode.toDataURL(vcardUrl, {
    width: 240,
    margin: 1,
    color: {
      dark: "#3c3f52",
      light: "#f5f3ef",
    },
  });

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center py-20 px-6 print:py-0 print:px-0 print:bg-white print:min-h-0">

      {/* Print/share label — hidden on print */}
      <div className="no-print mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-px bg-rose" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Digital Business Card
          </span>
          <div className="w-8 h-px bg-rose" />
        </div>
        <p className="text-sm font-sans text-gray-warm max-w-xs mx-auto">
          Print this page or show the QR code for someone to scan and save your contact.
        </p>
      </div>

      {/* Card — business card proportions at 3.5×2 in, scaled up for screen */}
      <div
        className="relative w-full max-w-2xl print:max-w-none"
        style={{ aspectRatio: "3.5 / 2" }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 bg-charcoal-dark flex print:shadow-none"
          style={{ boxShadow: "0 24px 80px rgba(28,30,40,0.22)" }}
        >
          {/* Left panel — identity */}
          <div className="flex flex-col justify-between p-[8%] flex-1 border-r border-white/10">
            {/* Logo mark */}
            <LogoSVG size={28} />

            {/* Name + title */}
            <div>
              <div className="font-serif font-light text-cream leading-none mb-2"
                style={{ fontSize: "clamp(1.1rem, 3.5vw, 2rem)" }}>
                Helana Nosratbakhsh
              </div>
              <div className="font-sans text-rose-light uppercase tracking-widest"
                style={{ fontSize: "clamp(0.45rem, 1.2vw, 0.65rem)" }}>
                Senior Data Engineer &amp; Advisor
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-px bg-rose shrink-0" />
                <span className="font-sans text-gray-mid"
                  style={{ fontSize: "clamp(0.45rem, 1.1vw, 0.6rem)" }}>
                  helanan@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-px bg-rose shrink-0" />
                <span className="font-sans text-gray-mid"
                  style={{ fontSize: "clamp(0.45rem, 1.1vw, 0.6rem)" }}>
                  267-443-8860
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-px bg-rose shrink-0" />
                <span className="font-sans text-gray-mid"
                  style={{ fontSize: "clamp(0.45rem, 1.1vw, 0.6rem)" }}>
                  helanan.com
                </span>
              </div>
            </div>
          </div>

          {/* Right panel — QR code */}
          <div className="flex flex-col items-center justify-center px-[6%] gap-3"
            style={{ width: "38%" }}>
            {/* QR code on cream background */}
            <div className="bg-cream p-2 rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrDataUrl}
                alt="QR code to save contact"
                style={{ width: "clamp(64px, 14vw, 110px)", height: "auto", display: "block" }}
              />
            </div>
            <span className="font-sans text-white/30 text-center uppercase tracking-wider"
              style={{ fontSize: "clamp(0.4rem, 0.9vw, 0.5rem)" }}>
              Scan to save contact
            </span>
          </div>
        </div>
      </div>

      {/* Download vCard link — hidden on print */}
      <div className="no-print mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/helana.vcf"
          download
          className="px-6 py-3 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300"
        >
          Download Contact Card
        </a>
        <PrintButton />
      </div>

    </div>
  );
}
