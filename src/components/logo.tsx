import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

// Premium SVG icon — hexagonal data-intelligence mark
function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Hexagon background */}
      <path
        d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
        fill="url(#logoGrad)"
      />
      {/* Subtle inner border */}
      <path
        d="M18 4L30.12 11V25L18 32L5.88 25V11L18 4Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.8"
      />
      {/* Bar chart — 3 bars at different heights */}
      <rect x="9"  y="18" width="4" height="9" rx="0.8" fill="white" fillOpacity="0.95" />
      <rect x="16" y="13" width="4" height="14" rx="0.8" fill="white" fillOpacity="0.95" />
      <rect x="23" y="21" width="4" height="6" rx="0.8" fill="white" fillOpacity="0.75" />
      {/* Trend line across bars */}
      <polyline
        points="11,17 18,12 25,20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
        fill="none"
        opacity="0.9"
      />
      {/* Dot on peak */}
      <circle cx="18" cy="12" r="1.5" fill="white" opacity="0.95" />
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#3b82f6" />
          <stop offset="55%"  stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ size = "md", href = "/", className = "", ...props }: LogoProps & { "aria-label"?: string }) {
  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  const inner = (
    <span className={`flex items-center gap-2.5 group ${className}`}>
      <span className="drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-105">
        <LogoMark size={size} />
      </span>
      <span className={`font-black ${textSizes[size]} tracking-tight leading-none`}>
        <span className="text-foreground">BI</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">
          {" "}EXPERT
        </span>
      </span>
    </span>
  );

  return href ? (
    <Link href={href} className="w-fit" aria-label={props["aria-label"] || "BI Expert"}>
      {inner}
    </Link>
  ) : (
    inner
  );
}
