"use client";

import { useState } from "react";

export default function Card({
  children,
  style,
  hoverable,
  onClick,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      className={className}
      style={{
        background: "var(--card)",
        border: "1.5px solid var(--border)",
        borderRadius: 20,
        padding: 28,
        transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
        boxShadow: hovered
          ? "0 8px 32px var(--card-shadow)"
          : "0 1px 4px var(--card-shadow-soft)",
        transform: hovered ? "translateY(-3px)" : "none",
        cursor: onClick ? "pointer" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
