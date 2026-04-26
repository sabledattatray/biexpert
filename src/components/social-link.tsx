import React from "react";
import { LinkedInIcon, GithubIcon, TelegramIcon } from "./social-icons";

interface SocialLinkProps {
  platform: "linkedin" | "github" | "telegram";
  href: string;
  size?: number;
  className?: string;
}

export const SocialLink = ({ platform, href, size = 20, className = "" }: SocialLinkProps) => {
  const icons = {
    linkedin: <LinkedInIcon size={size} />,
    github: <GithubIcon size={size} />,
    telegram: <TelegramIcon size={size} />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center p-3 border border-border bg-card/50 text-muted-foreground hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
      aria-label={`Follow us on ${platform}`}
    >
      <span className="sr-only">{platform}</span>
      {icons[platform]}
    </a>
  );
};
