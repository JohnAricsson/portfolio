"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const GRID_LAYOUTS: Record<number, string> = {
  1: "md:col-span-4 md:row-span-2",
  2: "md:col-span-2 md:row-span-1",
  3: "md:col-span-2 md:row-span-1",
  4: "md:col-span-2 md:row-span-1",
  5: "md:col-span-4 md:row-span-2",
  6: "md:col-span-2 md:row-span-1",
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto w-full md:auto-rows-[14rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
  spareImg,
  techStackLeft = [],
  techStackRight = [],
  isContactCard = false,
}: {
  id: number;
  title?: string;
  description?: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  techStackLeft?: string[];
  techStackRight?: string[];
  isContactCard?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("johnaricsson@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const layoutClass = GRID_LAYOUTS[id] || "md:col-span-2 md:row-span-1";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.05] flex flex-col justify-between group/bento transition-all duration-500 ease-out select-none h-full w-full",
        "hover:-translate-y-1.5 hover:border-zinc-700/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]",
        isContactCard
          ? "bg-gradient-to-br from-[#1a0b36] via-[#3b1fa3] to-[#631cb8]"
          : "bg-[#04071d] hover:bg-gradient-to-b hover:from-[#04071d] hover:to-[#0a0d24]",
        layoutClass,
      )}
    >
      {img && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={img}
            alt="UI graphic asset framework"
            className={cn(
              "transition-transform duration-700 ease-out group-hover/bento:scale-105",
              id === 1 &&
                "absolute bottom-0 right-0 w-full h-full object-cover object-right-bottom",
              id === 4 && "w-full h-full opacity-20 object-cover absolute",
              id === 5 &&
                "absolute right-0 top-0 w-full md:w-1/2 h-full object-contain object-center scale-100 opacity-90",
            )}
          />
        </div>
      )}

      {isContactCard && (
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(120,119,198,0.06)_0%,transparent_50%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <div
        className={cn(
          "relative z-20 p-6 lg:p-8 flex flex-col h-full w-full",
          id === 1 && "justify-end items-start text-left",
          id === 2 && "justify-start items-start text-left",
          id === 3 && "justify-center items-start text-left",
          id === 4 && "justify-start items-start text-left",
          id === 5 &&
            "justify-center items-start text-left md:max-w-[50%] h-full",
          id === 6 && "justify-center items-center text-center",
        )}
      >
        {id === 5 && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#04071d] via-[#04071d]/90 to-transparent pointer-events-none -z-10" />
        )}

        <div className="flex flex-col gap-2.5 max-w-[95%] relative z-30">
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-zinc-400/80">
            {description}
          </p>
          <h3 className="font-sans font-bold text-lg lg:text-xl xl:text-2xl text-neutral-100 leading-[1.3] tracking-tight transition-colors duration-300 group-hover/bento:text-white">
            {title}
          </h3>
        </div>

        {id === 3 && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 h-[85%] items-center justify-center opacity-80 group-hover/bento:opacity-100 transition-all duration-500 pointer-events-none z-10">
            <div className="flex flex-col gap-2 transition-transform duration-700 ease-out group-hover/bento:translate-y-2">
              {techStackLeft.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="py-1.5 px-3 text-[10px] font-mono font-medium rounded-lg bg-[#10132E]/90 text-zinc-400 border border-white/[0.04] shadow-md backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 transition-transform duration-700 ease-out group-hover/bento:-translate-y-2">
              {techStackRight.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="py-1.5 px-3 text-[10px] font-mono font-medium rounded-lg bg-[#10132E]/90 text-zinc-400 border border-white/[0.04] shadow-md backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {isContactCard && (
          <div className="mt-4 flex w-full justify-center relative z-30">
            <button
              onClick={handleCopy}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-xs font-medium text-white gap-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md cursor-pointer"
            >
              {copied ? (
                <>
                  <span>📋</span> Copied Email Successfully!
                </>
              ) : (
                <>
                  <span>🔗</span> Copy my email address
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
