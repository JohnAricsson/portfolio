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

  // DYNAMIC TECH STACK HANDLING
  const fullStackList = [...techStackLeft, ...techStackRight];
  const midPoint = Math.ceil(fullStackList.length / 2);

  const dynamicLeftStack = fullStackList.slice(0, midPoint);
  const dynamicRightStack = fullStackList.slice(midPoint);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/10 backdrop-blur-sm flex flex-col justify-between group/bento transition-all duration-500 ease-out select-none h-full w-full",
        "hover:-translate-y-1.5 hover:border-zinc-700/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]",
        // Theme Update: Swapped cosmic purples out for deep unified slate backgrounds matching the hero layout
        isContactCard
          ? "bg-gradient-to-br from-[#090d16] via-[#0d1527] to-[#111c35]"
          : "bg-[#090d16] hover:bg-gradient-to-b hover:from-[#090d16] hover:to-[#0e1626]",
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
                "absolute right-0 bottom-0 w-full h-full object-cover object-right-bottom scale-100 opacity-90",
            )}
          />
        </div>
      )}

      {isContactCard && (
        <div className="absolute inset-0 bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
      )}

      {/* Theme Update: Changed radial hover spotlight effect to sharp Cyan/Teal accent match */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(20,184,166,0.05)_0%,transparent_50%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <div
        className={cn(
          "relative z-20 p-6 lg:p-8 flex flex-col h-full w-full",
          id === 1 && "justify-end items-start text-left",
          id === 2 && "justify-start items-start text-left",
          id === 3 && "justify-center items-start text-left pr-36 md:pr-40",
          id === 4 && "justify-start items-start text-left",
          id === 5 &&
            "justify-center items-start text-left md:max-w-[50%] h-full",
          id === 6 && "justify-center items-center text-center",
        )}
      >
        {id === 5 && (
          // Theme Update: Code gradient overlay seamlessly washes back to core slate (#090d16)
          <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/90 to-transparent pointer-events-none -z-10" />
        )}

        <div className="flex flex-col gap-2.5 max-w-[95%] relative z-30">
          {/* Theme Update: Crisp zinc font profiles for descriptions */}
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-zinc-400/80">
            {description}
          </p>
          {/* Theme Update: Main text colors upgraded to clean white */}
          <h3 className="font-sans font-bold text-lg lg:text-xl xl:text-2xl text-white leading-[1.3] tracking-tight transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* ⚡ CARD 3: Dynamic Tech Stack Side-panel */}
        {id === 3 && (
          <div className="absolute right-3 top-0 bottom-0 flex gap-2 w-28 md:w-45 items-center justify-center opacity-80 group-hover/bento:opacity-100 transition-all duration-500 pointer-events-none z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            {/* Left Stack Column */}
            <div className="flex flex-col gap-2 transition-transform duration-1000 ease-out group-hover/bento:-translate-y-4">
              {dynamicLeftStack.map((item) => (
                <span
                  key={item}
                  className="py-1.5 text-[9px] md:text-[11px] font-mono font-medium rounded-lg bg-zinc-900/80 text-zinc-300 border border-white/[0.03] shadow-md backdrop-blur-md text-center truncate px-2"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Right Stack Column */}
            <div className="flex flex-col gap-2 transition-transform duration-1000 ease-out group-hover/bento:translate-y-4">
              {dynamicRightStack.map((item) => (
                <span
                  key={item}
                  className="py-1.5 px-2 text-[9px] md:text-[11px] font-mono font-medium rounded-lg bg-zinc-900/80 text-zinc-300 border border-white/[0.03] shadow-md backdrop-blur-md text-center truncate"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {isContactCard && (
          <div className="mt-4 flex w-full justify-center relative z-30">
            {/* Theme Update: Copy email button matched with slate borders and subtle white glass overlay */}
            <button
              onClick={handleCopy}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 text-xs font-medium text-zinc-200 gap-2 transition-all duration-300 hover:bg-zinc-800/80 hover:text-white hover:border-zinc-700 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md cursor-pointer"
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
