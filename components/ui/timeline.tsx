"use client";
import { useScroll, useTransform, motion } from "framer-motion"; // Adjusted import package to safe universal standard
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
  }, [data]); // Depend on data updates to calculate layout dimensions cleanly

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"], // Tighter offset tracks for compressed nodes
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-[#090d16] font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            // Tighter vertical padding structure: md:pt-40 reduced to md:pt-20 to pull items closer
            className="flex justify-start pt-10 md:pt-20 md:gap-10 group/timeline-item"
          >
            {/* Left Node Sidebar Container */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dynamic Theme Glow Bullet Node */}
              <div className="h-10 absolute left-3 md:left-8 w-10 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800/80 group-hover/timeline-item:border-teal-500/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {/* Core Glowing Dot — Pulsates subtle cyan light reflections on hover */}
                <div className="h-3 w-3 rounded-full bg-zinc-800 border border-zinc-700 transition-all duration-300 group-hover/timeline-item:bg-teal-400 group-hover/timeline-item:border-teal-300 group-hover/timeline-item:shadow-[0_0_12px_rgba(20,184,166,0.8)]" />
              </div>

              {/* Desktop Timeline Period Label */}
              <h3 className="hidden md:block text-xl md:pl-24 md:text-4xl font-mono font-bold text-zinc-600 transition-colors duration-300 group-hover/timeline-item:text-zinc-200">
                {item.title}
              </h3>
            </div>

            {/* Right Academic Content Payload Box */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Timeline Period Label */}
              <h3 className="md:hidden block text-xl mb-4 text-left font-mono font-bold text-zinc-500 group-hover/timeline-item:text-zinc-200 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Content entry container with layout transitions handling custom nested blocks */}
              <div className="transition-transform duration-500 ease-out group-hover/timeline-item:translate-x-1">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Outer Absolute Timeline Line Vector Rails Track */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-12 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          {/* Active Progress Indicator vector track reflecting the Cyber Cyan colorway */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-teal-400 via-indigo-500 to-transparent from-[0%] via-[40%] rounded-full shadow-[0_0_8px_rgba(20,184,166,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};
