"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
        "grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto w-full auto-rows-none",
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
  className,
  img,
  imgClassName,
  titleClassName,
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

  const isRowSpan2 =
    className?.includes("md:row-span-2") ||
    className?.includes("lg:row-span-2");
  const heightClass = isRowSpan2 ? "min-h-[28rem]" : "h-[14rem]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.05] flex flex-col justify-between group/bento transition-all duration-500 ease-out select-none",
        "hover:-translate-y-1.5 hover:border-zinc-700/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]",
        isContactCard
          ? "bg-gradient-to-br from-[#1a0b36] via-[#3b1fa3] to-[#631cb8]"
          : "bg-[#04071d] hover:bg-gradient-to-b hover:from-[#04071d] hover:to-[#0a0d24]",
        className,
        heightClass,
      )}
    >
      {img && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={img}
            alt="UI graphic resource frame"
            className={cn(
              "object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover/bento:scale-105",
              imgClassName,
            )}
          />
        </div>
      )}

      {spareImg && (
        <div className="absolute right-0 bottom-0 pointer-events-none z-0 opacity-40 mix-blend-screen transition-all duration-500 group-hover/bento:opacity-70 group-hover/bento:translate-x-1 group-hover/bento:translate-y-1">
          <img
            src={spareImg}
            alt="Secondary layout design artwork"
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {isContactCard && (
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(120,119,198,0.06)_0%,transparent_50%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <div
        className={cn(
          "relative z-20 p-6 lg:p-8 flex flex-col h-full justify-between",
          id === 1 && "justify-end",
          titleClassName,
        )}
      >
        <div className="flex flex-col gap-2.5 max-w-[90%]">
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
          <div className="mt-4 flex w-full justify-start md:justify-center relative z-30">
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
