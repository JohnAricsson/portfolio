"use client";

import React, { useEffect, useRef, useState, createContext, JSX } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export interface CardType {
  category: string;
  title: string;
  subtitle: string;
  period: string;
  gradientClass?: string;
  iconPath?: string;
  content: React.ReactNode;
}

export const CarouselContext = createContext<{
  currentIndex: number;
}>({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft = initialScroll;
    checkScrollability();
  }, [initialScroll]);

  const scrollLeft = () => {
    const scrollAmount = window.innerWidth < 768 ? -280 : -400;
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const scrollAmount = window.innerWidth < 768 ? 280 : 400;
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <CarouselContext.Provider value={{ currentIndex: 0 }}>
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          // FIX: Removed extreme paddings. Inherits container width cleanly.
          className="flex w-full overflow-x-auto scroll-smooth pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* FIX: Removed max-w-7xl, pl-10, pr-10. Let the parent (Milestone.tsx) handle bounds */}
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                // FIX: Added shrink-0 so cards don't squish inside their new container
                className="shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons: Removed padding-right so they align flawlessly with the right text boundary */}
        <div className="flex justify-end gap-3 md:gap-4 mt-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-600 shadow-sm transition-all duration-300 enabled:hover:border-teal-500/40 enabled:hover:text-teal-600 enabled:hover:bg-zinc-50 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400 dark:enabled:hover:text-teal-400 dark:enabled:hover:bg-teal-950/10 dark:shadow-none"
          >
            <IconArrowNarrowLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-600 shadow-sm transition-all duration-300 enabled:hover:border-teal-500/40 enabled:hover:text-teal-600 enabled:hover:bg-zinc-50 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400 dark:enabled:hover:text-teal-400 dark:enabled:hover:bg-teal-950/10 dark:shadow-none"
          >
            <IconArrowNarrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card }: { card: CardType; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(
        "relative shrink-0 h-[34rem] sm:h-[36rem] md:h-[39rem] w-[85vw] sm:w-[22rem] md:w-[26rem] rounded-[2rem] transition-all duration-500 ease-out group",
        "border-1 border-zinc-400 shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-2 md:hover:-translate-y-3 hover:border-zinc-400 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_30px_60px_-15px_rgba(0,0,0,0.14)]",
        "dark:border-zinc-800/80 dark:shadow-none dark:hover:border-zinc-700/80 dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]",
      )}
    >
      <div
        onMouseMove={handleMouseMove}
        className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] p-5 sm:p-6 md:p-8 text-left select-text bg-zinc-100 dark:bg-[#090d16]"
      >
        <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 dark:bg-grid-white/[0.015]" />

        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(20, 184, 166, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent group-hover:via-teal-500/50 transition-all duration-700 dark:via-zinc-700/30 dark:group-hover:via-teal-500/40" />

        <div className="flex items-center justify-between w-full relative z-10">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-600 font-bold border border-zinc-300 bg-white rounded-lg px-2 sm:px-3 py-1 shadow-sm dark:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none">
            {card.period}
          </span>
          {card.iconPath && (
            <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-zinc-300 shadow-sm group-hover:border-teal-500/40 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-500 dark:bg-zinc-900/60 dark:border-zinc-800 dark:shadow-none">
              <img
                src={card.iconPath}
                alt="card icon"
                className="h-4 w-4 sm:h-5 sm:w-5 object-contain opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 dark:opacity-50 dark:brightness-125"
              />
            </div>
          )}
        </div>

        <div className="my-auto w-full overflow-y-auto max-h-[16rem] sm:max-h-[18rem] md:max-h-[23rem] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative z-10 py-2">
          <div className="text-zinc-900 font-sans flex flex-col gap-4 md:gap-6 dark:text-white">
            {Array.isArray(card.content) ? (
              card.content.map((bullet: string, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="relative flex flex-col gap-2 md:gap-3 pl-4 md:pl-5 border-l-2 border-zinc-300 group-hover:border-teal-500/50 transition-all duration-300 dark:border-zinc-800 dark:group-hover:border-teal-500/40"
                >
                  <div className="font-mono text-[9px] md:text-[10px] font-semibold tracking-wider text-teal-600 uppercase opacity-60 dark:text-teal-400/80 dark:opacity-40">
                    Details
                  </div>
                  <p className="text-zinc-800 text-base sm:text-lg md:text-[19px] font-medium leading-[1.5] md:leading-[1.6] tracking-wide text-pretty group-hover:text-zinc-950 transition-colors duration-300 dark:text-neutral-100 dark:group-hover:text-white">
                    {bullet}
                  </p>
                </motion.div>
              ))
            ) : typeof card.content === "string" ? (
              <div className="relative flex flex-col gap-2 md:gap-3 pl-4 md:pl-5 border-l-2 border-zinc-300 group-hover:border-teal-500/50 transition-all duration-300 dark:border-zinc-800">
                <div className="text-teal-600 font-mono text-[9px] md:text-[10px] uppercase tracking-wider dark:text-teal-400">
                  &gt;_
                </div>
                <p className="text-zinc-800 text-base sm:text-lg md:text-[19px] font-medium leading-[1.5] md:leading-[1.6] tracking-wide dark:text-neutral-100">
                  {card.content}
                </p>
              </div>
            ) : (
              <div className="group-hover:translate-x-1 transition-transform duration-500">
                {card.content}
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 md:pt-6 border-t border-zinc-300 relative z-10 flex flex-col gap-1 md:gap-1.5 dark:border-zinc-800/60">
          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-teal-600 font-bold dark:text-teal-400">
            {card.category}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-zinc-900 tracking-tight group-hover:text-teal-600 transition-colors duration-300 dark:text-white dark:group-hover:text-teal-400">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 tracking-wide mt-0.5 dark:text-zinc-400">
            {card.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
