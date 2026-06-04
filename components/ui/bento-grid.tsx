"use client";

import React, { useState, useRef } from "react";
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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto w-full md:auto-rows-[16rem] lg:auto-rows-[18rem]",
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
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const layoutClass = GRID_LAYOUTS[id] || "md:col-span-2 md:row-span-1";

  const fullStackList = [...techStackLeft, ...techStackRight];
  const midPoint = Math.ceil(fullStackList.length / 2);
  const dynamicLeftStack = fullStackList.slice(0, midPoint);
  const dynamicRightStack = fullStackList.slice(midPoint);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": `${mousePosition.x}%`,
          "--y": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-2xl lg:rounded-3xl border transition-all duration-500 ease-out select-none",
        // Mobile: fixed height so cards don't collapse
        "min-h-[200px] sm:min-h-[220px] md:min-h-0",
        // Card 1 and 5 are the tall hero cards — give them more height on mobile
        (id === 1 || id === 5) && "min-h-[280px] sm:min-h-[320px] md:min-h-0",
        "group/bento",
        isContactCard
          ? "border-teal-500/30 dark:border-teal-500/30 bg-gradient-to-br from-white via-teal-50/40 to-white dark:from-[#090d16] dark:via-[#0d1527] dark:to-[#111c35]"
          : "border-zinc-300 dark:border-zinc-800/60 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-sm",
        "hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl hover:border-teal-500/50 dark:hover:border-indigo-500/40",
        layoutClass,
      )}
    >
      {/* Grid patterns */}
      <div className="absolute inset-0 bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:opacity-100 opacity-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:opacity-0 opacity-100 pointer-events-none" />

      {/* Background image */}
      {img && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={img}
            alt=""
            className={cn(
              "transition-all duration-700 ease-out group-hover/bento:scale-110 group-hover/bento:rotate-1",
              "opacity-90 dark:opacity-100",
              id === 1 &&
                "absolute bottom-0 right-0 w-full h-full object-cover object-right-bottom",
              id === 4 &&
                "w-full h-full opacity-40 dark:opacity-20 object-cover absolute group-hover/bento:opacity-60 dark:group-hover/bento:opacity-30",
              id === 5 &&
                "absolute right-0 bottom-0 w-full h-full object-cover object-right-bottom",
              id === 6 &&
                "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20",
            )}
          />
        </div>
      )}

      {/* Spare image */}
      {spareImg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={spareImg}
            alt=""
            className="w-full h-full object-cover opacity-20 dark:opacity-10 group-hover/bento:opacity-30 transition-opacity duration-500"
          />
        </div>
      )}

      {/* Mouse spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(20,184,166,0.12)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(20,184,166,0.08)_0%,transparent_60%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Content */}
      <div
        className={cn(
          "relative z-20 p-4 sm:p-5 lg:p-7 flex flex-col h-full w-full",
          id === 1 && "justify-end items-start text-left",
          id === 2 && "justify-start items-start text-left",
          // On mobile card 3 doesn't need the right padding since tech stack is hidden
          id === 3 && "justify-center items-start text-left md:pr-44",
          id === 4 && "justify-start items-start text-left",
          id === 5 &&
            "justify-center items-start text-left md:max-w-[55%] h-full",
          id === 6 && "justify-center items-center text-center",
        )}
      >
        {/* Gradient overlay for card 5 */}
        {id === 5 && (
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-[#090d16] dark:via-[#090d16]/95 dark:to-transparent pointer-events-none -z-10" />
        )}

        {/* Description label */}
        {(id === 1 || id === 5) && description && (
          <div className="mb-2">
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-black/70 dark:text-white/60 backdrop-blur-sm bg-black/10 dark:bg-black/30 inline-block px-2 py-0.5 rounded-full">
              {description}
            </p>
          </div>
        )}
        {id !== 1 && id !== 5 && description && (
          <div className="mb-2">
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400">
              {description}
            </p>
          </div>
        )}

        {/* Title */}
        <div className="flex flex-col gap-2 max-w-[95%] relative z-30">
          <h3
            className={cn(
              "font-sans font-bold leading-tight tracking-tight transition-all duration-300",
              // Smaller text on mobile, scales up
              "text-lg sm:text-xl lg:text-2xl",
              id === 1
                ? "text-white drop-shadow-lg"
                : id === 4
                  ? "text-zinc-800 dark:text-white group-hover/bento:text-teal-600 dark:group-hover/bento:text-teal-300"
                  : "text-zinc-800 dark:text-white group-hover/bento:text-teal-700 dark:group-hover/bento:text-teal-300",
            )}
          >
            {title}
          </h3>
        </div>

        {/* Tech stack — hidden on mobile, shown md+ */}
        {id === 3 && (
          <div className="hidden md:flex absolute right-2 top-0 bottom-0 gap-2 w-28 md:w-36 items-center justify-center opacity-90 group-hover/bento:opacity-100 transition-all duration-500 pointer-events-none z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <div className="flex flex-col gap-2 transition-transform duration-700 ease-out group-hover/bento:-translate-y-3">
              {dynamicLeftStack.map((item) => (
                <span
                  key={item}
                  className="py-1.5 text-[10px] md:text-xs font-mono font-semibold rounded-lg bg-white/90 dark:bg-zinc-900/90 text-teal-700 dark:text-teal-300 border border-teal-500/20 dark:border-teal-500/30 shadow-sm backdrop-blur-md text-center px-2.5"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 transition-transform duration-700 ease-out group-hover/bento:translate-y-3">
              {dynamicRightStack.map((item) => (
                <span
                  key={item}
                  className="py-1.5 px-2.5 text-[10px] md:text-xs font-mono font-semibold rounded-lg bg-white/90 dark:bg-zinc-900/90 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-500/30 shadow-sm backdrop-blur-md text-center"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack on mobile — horizontal pill row instead of columns */}
        {id === 3 && (
          <div className="flex md:hidden flex-wrap gap-1.5 mt-3">
            {fullStackList.map((item) => (
              <span
                key={item}
                className="py-1 px-2 text-[10px] font-mono font-semibold rounded-lg bg-white/90 dark:bg-zinc-900/90 text-teal-700 dark:text-teal-300 border border-teal-500/20 dark:border-teal-500/30"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Contact card button */}
      </div>

      {/* Bottom divider for card 1 */}
      {id === 1 && (
        <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </div>
  );
};
