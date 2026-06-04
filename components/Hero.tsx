"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";
import { MagicButton } from "./ui/magic-button";

const Hero = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#projects");
    if (targetElement) {
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "John_Aricsson_Majumder_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white px-4 py-24 transition-colors duration-500 dark:from-[#090d16] dark:via-[#0a0e1a] dark:to-[#090d16] sm:py-28 md:py-0">
      <div className="absolute inset-0 z-0 bg-grid-white/[0.015] dark:bg-grid-white/[0.02]" />

      <div className="absolute top-0 -left-4 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/5 sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 -right-4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="rgba(20, 184, 166, 0.04)"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[70vw]"
          fill="rgba(20, 184, 166, 0.08)"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(79, 70, 229, 0.06)"
        />
        <Spotlight
          className="bottom-0 right-0 h-[60vh] w-[40vw]"
          fill="rgba(139, 92, 246, 0.04)"
        />
      </div>

      <div className="relative z-20 flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-16">
        <div className="flex w-full max-w-2xl flex-1 flex-col items-center gap-6 text-center md:order-2 md:items-start md:gap-8 md:text-left">
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 blur transition-all duration-500 group-hover:opacity-30" />
            <div className="relative flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-teal-500/50 dark:border-neutral-800 dark:bg-black/50 dark:hover:border-indigo-500/50 sm:gap-3 sm:px-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300 sm:text-xs">
                John Aricsson Majumder
                <span className="mx-2 hidden text-neutral-400 dark:text-neutral-600 md:inline">
                  •
                </span>
                <span className="hidden bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-indigo-400 md:inline">
                  FullStack Developer
                </span>
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Turning Ideas into{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent dark:from-teal-400 dark:via-cyan-400 dark:to-indigo-400">
                Real Experiences
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q75 12 150 6 Q225 0 300 6"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base lg:text-lg">
            I build fast, scalable web applications using modern web
            technologies. I believe in smart work over hard work — striving to
            deliver more through focused execution and practical
            problem-solving.
          </p>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <MagicButton
              onClick={handleScrollToProjects}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 blur transition-all duration-500 group-hover:opacity-50" />
              <div className="relative inline-flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white px-6 py-1 text-sm font-medium text-neutral-900 shadow-lg transition-all duration-300 hover:shadow-teal-500/25 dark:bg-neutral-900 dark:text-white dark:hover:shadow-indigo-500/25 sm:h-12 sm:px-8 sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  Show my work
                </span>
              </div>
            </MagicButton>

            <MagicButton
              onClick={handleDownloadCV}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-all duration-500 group-hover:opacity-50" />
              <div className="relative inline-flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white/50 px-6 py-1 text-sm font-medium text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/30 hover:bg-white hover:shadow-lg dark:border-neutral-800 dark:bg-black/50 dark:text-neutral-300 dark:hover:border-indigo-500/30 dark:hover:bg-black/70 sm:h-12 sm:px-8 sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                  Download CV
                </span>
              </div>
            </MagicButton>
          </div>
        </div>

        <div className="flex w-full max-w-xs flex-1 items-center justify-center md:order-1 md:max-w-none sm:max-w-sm">
          <div className="group relative aspect-square w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px]">
            <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 opacity-30 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 p-1.5 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-teal-500/50 dark:border-neutral-800 dark:bg-black/30 dark:shadow-none dark:group-hover:border-indigo-500/50">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src="/profile.jpg"
                  alt="John Aricsson Majumder"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-tr from-teal-500/20 to-indigo-500/20 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-20 sm:w-20" />
            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full bg-gradient-to-bl from-cyan-500/20 to-teal-500/20 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-16 sm:w-16" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 opacity-60 transition-all hover:opacity-100 hover:text-teal-500 dark:text-neutral-600 dark:hover:text-teal-400 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="h-4 w-4 animate-bounce"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6L8 11L13 6"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
