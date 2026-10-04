import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "full" | "icon" | "badge";
  priority?: boolean;
}

export default function Logo({
  className = "h-10 w-auto",
  width,
  height,
  variant = "full",
  priority = true,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <Image
          src="/favicon.png"
          alt="Orbous - Enterprise IT Solutions & Cloud Innovations"
          width={width || 44}
          height={height || 44}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(6,78,59,0.15)]"
          priority={priority}
        />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className={`relative flex items-center justify-center rounded-2xl bg-[#064E3B] border border-[#F8E7C9]/40 p-1.5 shadow-[0_4px_20px_rgba(6,78,59,0.25)] ${className}`}>
        <Image
          src="/favicon.png"
          alt="Orbous Emblem - Gurgaon Cyber City"
          width={width || 40}
          height={height || 40}
          className="w-full h-full object-contain"
          priority={priority}
        />
      </div>
    );
  }

  // Full Brand Logo
  return (
    <div className={`relative flex items-center shrink-0 ${className}`}>
      {/* Light & Dark optimized image rendering */}
      <Image
        src="/orbous-logo-transparent.png"
        alt="Orbous - IT & Software Solutions, Gurgaon Cyber City"
        width={width || 160}
        height={height || 44}
        className="w-auto h-full max-h-12 object-contain dark:brightness-110 drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        priority={priority}
      />
    </div>
  );
}
