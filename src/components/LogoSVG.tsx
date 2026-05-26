export default function LogoSVG({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Helana Nosratbakhsh logo"
    >
      {/* Left vertical – charcoal */}
      <line x1="22" y1="8" x2="22" y2="92" stroke="#3c3f52" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="8" r="3" fill="#3c3f52" />
      <circle cx="22" cy="92" r="3" fill="#3c3f52" />

      {/* Left branches */}
      <line x1="6" y1="24" x2="22" y2="24" stroke="#3c3f52" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="24" r="2.2" fill="#3c3f52" />
      <line x1="10" y1="40" x2="22" y2="40" stroke="#3c3f52" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="40" r="2" fill="#3c3f52" />
      <line x1="6" y1="68" x2="22" y2="68" stroke="#3c3f52" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="68" r="2.2" fill="#3c3f52" />
      <line x1="10" y1="82" x2="22" y2="82" stroke="#3c3f52" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="82" r="2" fill="#3c3f52" />

      {/* Right vertical – rose */}
      <line x1="58" y1="8" x2="58" y2="92" stroke="#c9a49b" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="58" cy="8" r="3" fill="#c9a49b" />
      <circle cx="58" cy="92" r="3" fill="#c9a49b" />

      {/* Right branches */}
      <line x1="58" y1="24" x2="74" y2="24" stroke="#c9a49b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="74" cy="24" r="2.2" fill="#c9a49b" />
      <line x1="58" y1="40" x2="70" y2="40" stroke="#c9a49b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="70" cy="40" r="2" fill="#c9a49b" />
      <line x1="58" y1="68" x2="74" y2="68" stroke="#c9a49b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="74" cy="68" r="2.2" fill="#c9a49b" />
      <line x1="58" y1="82" x2="70" y2="82" stroke="#c9a49b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="70" cy="82" r="2" fill="#c9a49b" />

      {/* Crossbar with cloud-like curves */}
      <path
        d="M22 53 C30 44 36 58 40 50 C44 42 50 56 58 52"
        stroke="#c9a49b"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
