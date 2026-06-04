"use client";

import React from "react";

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`group relative transform transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 opacity-0 blur transition duration-500 group-hover:opacity-70 dark:from-teal-400 dark:via-cyan-400 dark:to-indigo-400" />

      {/* Button content container */}
      <div className="relative">{children}</div>
    </button>
  );
};
