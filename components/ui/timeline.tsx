"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#090d16] dark:via-[#0a0e1a] dark:to-[#090d16] font-sans md:px-10 transition-all duration-500"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-16 lg:pt-20 md:gap-10 group/timeline-item"
            >
              {/* Sticky Timeline Dot Container */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 lg:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-8 w-10 rounded-full bg-white dark:bg-[#090d16] flex items-center justify-center border-2 border-neutral-200 dark:border-neutral-800 group-hover/timeline-item:border-teal-500 dark:group-hover/timeline-item:border-teal-400 transition-all duration-300 shadow-md dark:shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 group-hover/timeline-item:bg-teal-500 dark:group-hover/timeline-item:bg-teal-400 group-hover/timeline-item:scale-125" />
                </div>

                <h3 className="hidden md:block text-xl md:pl-24 lg:pl-28 md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-400 dark:text-neutral-600 transition-all duration-300 group-hover/timeline-item:text-neutral-800 dark:group-hover/timeline-item:text-neutral-200 group-hover/timeline-item:translate-x-1">
                  {item.title}
                </h3>
              </div>

              {/* Content Container (Optimized mobile padding: pl-14 instead of pl-20) */}
              <div className="relative pl-14 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold tracking-tight text-neutral-400 dark:text-neutral-500 group-hover/timeline-item:text-neutral-800 dark:group-hover/timeline-item:text-neutral-200 transition-all duration-300">
                  {item.title}
                </h3>

                <div className="transition-all duration-500 ease-out group-hover/timeline-item:translate-x-1 sm:group-hover/timeline-item:translate-x-2">
                  {item.content}
                </div>
              </div>
            </div>
          ))}

          {/* Animated Gradient Line */}
          <div
            style={{
              height: height + "px",
            }}
            // Adjusted md:left-[52px] to perfectly center the line through the 40px dot container located at md:left-8 (32px)
            className="absolute left-8 md:left-[52px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-teal-500 via-indigo-500 to-teal-400 rounded-full shadow-lg shadow-teal-500/50 dark:shadow-teal-400/30"
            />
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-[-4px] top-0 w-[10px] bg-gradient-to-t from-teal-500/30 via-indigo-500/30 to-teal-400/30 rounded-full blur-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
