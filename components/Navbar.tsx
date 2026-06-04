"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#journey" },
  { name: "Contact", link: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach((item) => {
      if (item.link === "#") return;
      const el = document.querySelector(item.link);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.link);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetLink: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetLink === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
      return;
    }

    const targetElement = document.querySelector(targetLink);
    if (targetElement) {
      const navOffset = scrolled ? 70 : 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetLink);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-9999 transition-all duration-500 border-b select-none ease-in-out",
        scrolled
          ? "bg-[#090d16]/80 dark:bg-[#090d16]/80 bg-white/80 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-4"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center md:justify-center relative min-h-[2.5rem]">
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase relative mx-auto">
          {NAV_ITEMS.map((item) => {
            const isCurrent =
              activeSection === item.link ||
              (item.link === "#" && activeSection === "");
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleScrollToSection(e, item.link)}
                className={cn(
                  "transition-colors duration-300 relative py-1 group cursor-pointer font-medium tracking-widest",
                  isCurrent
                    ? "text-zinc-900 dark:text-teal-400"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] bg-teal-500 dark:bg-teal-400 transition-all duration-300 shadow-[0_0_8px_rgba(20,184,166,0.4)]",
                    isCurrent ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            );
          })}

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="relative ml-4 p-[1px] rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95 group/toggle"
            aria-label="Toggle Theme Paradigm"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#0d9488,transparent)] bg-[length:200%_auto] opacity-0 group-hover/toggle:opacity-100 group-hover/toggle:animate-[shimmer_2s_linear_infinite] transition-opacity duration-300" />

            <div className="relative flex items-center bg-zinc-100 dark:bg-zinc-950 px-1.5 py-1 rounded-full h-8 w-[4.5rem] transition-colors duration-300">
              <div
                className={cn(
                  "absolute top-1 bottom-1 w-7 rounded-full transition-all duration-500 ease-[0.175,0.885,0.32,1.1] shadow-md",
                  isDarkMode
                    ? "left-[2.25rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 shadow-black/40"
                    : "left-1 bg-gradient-to-br from-teal-400 to-teal-500 border border-teal-300/30 shadow-teal-500/20",
                )}
              />

              <div className="w-full flex justify-between items-center px-1.5 text-zinc-400 dark:text-zinc-500 relative z-10 pointer-events-none">
                <svg
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-300",
                    !isDarkMode
                      ? "text-zinc-900 scale-100 filter drop-shadow"
                      : "scale-90",
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>

                <svg
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-300",
                    isDarkMode
                      ? "text-teal-400 scale-100 drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]"
                      : "scale-90",
                  )}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14c0-1.19.25-2.33.73-3.37a1 1 0 0 0-1.19-1.34A10.15 10.15 0 0 0 2 11.5a10.15 10.15 0 0 0 10.15 10.15c4.61 0 8.52-3.1 9.71-7.3a1 1 0 0 0-.22-1.35z" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div className="w-full flex items-center justify-between md:hidden px-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 transition-all duration-300 cursor-pointer h-9 w-9 flex items-center justify-center relative active:scale-95"
          >
            {isDarkMode ? (
              <span className="text-xs">🌙</span>
            ) : (
              <span className="text-xs">☀️</span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Toggle Menu Panel"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5 relative text-zinc-800 dark:text-zinc-400">
              <span
                className={cn(
                  "w-5 h-[2px] bg-current transition-all duration-300 rounded-full",
                  isOpen && "rotate-45 absolute",
                )}
              />
              <span
                className={cn(
                  "w-5 h-[2px] bg-current transition-all duration-300 rounded-full",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "w-5 h-[2px] bg-current transition-all duration-300 rounded-full",
                  isOpen && "-rotate-45 absolute",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed top-[69px] inset-x-0 bottom-0 border-t transition-all duration-500 ease-in-out z-40 flex flex-col items-center justify-center gap-8 font-mono text-sm tracking-widest uppercase md:hidden",
          isOpen
            ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-lg border-zinc-200 dark:border-zinc-900 opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none border-transparent",
        )}
      >
        {NAV_ITEMS.map((item, index) => {
          const isCurrent =
            activeSection === item.link ||
            (item.link === "#" && activeSection === "");
          return (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleScrollToSection(e, item.link)}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={cn(
                "transition-colors duration-300 cursor-pointer py-2 text-base tracking-widest font-medium",
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2",
                isCurrent
                  ? "text-teal-500 dark:text-teal-400 font-bold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400",
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
