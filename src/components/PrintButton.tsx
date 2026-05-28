"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300 group"
    >
      <Download size={14} />
      Download PDF
    </button>
  );
}
