import React from "react";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black-100 px-4">
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(255, 255, 255, 0.05)"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[70vw]"
          fill="#14b8a6"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#6366f1"
        />
      </div>

      <div className="relative z-20 flex max-w-5xl flex-col items-center justify-center text-center gap-6">
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md px-4 py-1.5 transition-all duration-300 hover:border-zinc-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <p className="text-1rem font-mono tracking-widest uppercase text-zinc-400">
            JOHN ARICSSON MAJUMDER{" "}
            <span className="hidden md:inline">. FullStack Developer</span>
          </p>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl max-w-4xl leading-[1.15]">
          Turning Ideas into Real{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Working Experiences
          </span>
        </h1>

        <p className="text-base text-zinc-400 sm:text-lg max-w-2xl leading-relaxed font-normal">
          I build fast, scalable web applications using modern web
          technologies.I believe in smart work over hard work — I strive to
          perform more through focused learning and practical problem-solving.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-1rem font-medium text-white backdrop-blur-3xl">
              Show my work
            </span>
          </button>
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 p-[1px] font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-[11px] bg-zinc-950 px-8 py-1 text-1rem transition-all duration-300 group-hover:bg-zinc-950/40">
              Download CV
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase">
          scroll
        </span>
        <svg
          className="animate-bounce"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
