"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeadshotImage({ className = "" }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-smoke ${className}`}>
      {!hasError ? (
        <Image
          src="/images/headshot.jpg"
          alt="Helana Nosratbakhsh"
          fill
          className="object-cover object-top"
          priority
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
          <span className="font-serif text-7xl font-light text-charcoal/20">HN</span>
          <p className="text-xs font-sans text-gray-mid text-center">
            Add your photo to{" "}
            <code className="bg-smoke px-1">public/images/headshot.jpg</code>
          </p>
        </div>
      )}
    </div>
  );
}
