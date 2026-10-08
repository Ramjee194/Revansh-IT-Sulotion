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
          className="w-full h-full object-contain rounded-xl filter drop-shadow-[0_2px_8px_rgba(6,78,59,0.15)]"
          priority={priority}
        />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className={`relative flex items-center justify-center rounded-2xl bg-white/95 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${className}`}>
        <Image
          src="/favicon.png"
          alt="Orbous Emblem"
          width={width || 40}
          height={height || 40}
          className="w-full h-full object-contain rounded-lg"
          priority={priority}
        />
      </div>
    );
  }

  // Full Brand Logo
  return (
    <div className={`relative flex items-center gap-3 shrink-0 ${className}`}>
      <Image
        src="/favicon.png"
        alt="Orbous - IT & Software Solutions"
        width={width || 40}
        height={height || 40}
        className="w-10 h-10 object-contain rounded-xl shadow-sm"
        priority={priority}
      />
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 dark:from-white dark:via-slate-100 dark:to-orange-400 bg-clip-text text-transparent font-outfit leading-none">
          Orbous
        </span>
        <span className="text-[10px] tracking-wider uppercase font-semibold text-orange-600 dark:text-orange-400 mt-0.5">
          IT Solutions
        </span>
      </div>
    </div>
  );
}
