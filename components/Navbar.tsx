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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      const navHeight = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetLink);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-[9999] transition-all duration-500 border-b select-none ease-in-out",
          scrolled || isOpen
            ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-2xl py-3 md:py-4"
            : "bg-transparent border-transparent py-5 md:py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between relative min-h-[2.5rem]">
          <div className="hidden md:block w-10" />

          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase mx-auto">
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
                    "transition-all duration-300 relative py-2 group cursor-pointer font-medium tracking-widest",
                    isCurrent
                      ? "text-zinc-900 dark:text-teal-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 to-indigo-500 transition-all duration-300 rounded-full",
                      isCurrent ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              );
            })}

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative ml-4 p-[1px] rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95 group/toggle"
              aria-label="Toggle Theme"
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#0d9488,transparent)] bg-[length:200%_auto] opacity-0 group-hover/toggle:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center bg-zinc-100 dark:bg-zinc-950 px-1.5 py-1 rounded-full h-8 w-[4.5rem] transition-colors duration-300">
                <div
                  className={cn(
                    "absolute top-1 bottom-1 w-7 rounded-full transition-all duration-500 ease-[0.175,0.885,0.32,1.1] shadow-md",
                    isDarkMode
                      ? "left-[2.25rem] bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600/50"
                      : "left-1 bg-gradient-to-br from-teal-400 to-teal-500 border border-teal-300/50",
                  )}
                />

                <div className="w-full flex justify-between items-center px-1.5 text-zinc-400 dark:text-zinc-500 relative z-10 pointer-events-none">
                  <svg
                    className={cn(
                      "w-3.5 h-3.5 transition-all duration-300",
                      !isDarkMode
                        ? "text-amber-500 scale-100"
                        : "scale-90 text-zinc-500",
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
                        ? "text-teal-400 scale-100"
                        : "scale-90 text-zinc-500",
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

          <div className="flex items-center justify-between w-full md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-all duration-300 cursor-pointer h-9 w-9 flex items-center justify-center active:scale-95 shadow-sm"
            >
              {isDarkMode ? (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14c0-1.19.25-2.33.73-3.37a1 1 0 0 0-1.19-1.34A10.15 10.15 0 0 0 2 11.5a10.15 10.15 0 0 0 10.15 10.15c4.61 0 8.52-3.1 9.71-7.3a1 1 0 0 0-.22-1.35z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5 relative">
                <span
                  className={cn(
                    "w-5 h-[2px] bg-zinc-800 dark:bg-zinc-400 transition-all duration-300 rounded-full",
                    isOpen && "rotate-45 absolute",
                  )}
                />
                <span
                  className={cn(
                    "w-5 h-[2px] bg-zinc-800 dark:bg-zinc-400 transition-all duration-300 rounded-full",
                    isOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "w-5 h-[2px] bg-zinc-800 dark:bg-zinc-400 transition-all duration-300 rounded-full",
                    isOpen && "-rotate-45 absolute",
                  )}
                />
              </div>
            </button>
          </div>

          <div className="hidden md:block w-10" />
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-[57px] left-0 right-0 bg-white dark:bg-[#090d16] border-b border-zinc-200 dark:border-zinc-800 shadow-2xl z-[9999] md:hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <div className="max-h-[calc(100vh-57px)] overflow-y-auto">
          <div className="flex flex-col py-6 px-4 gap-2">
            {NAV_ITEMS.map((item, index) => {
              const isCurrent =
                activeSection === item.link ||
                (item.link === "#" && activeSection === "");
              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => handleScrollToSection(e, item.link)}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl transition-all duration-300 font-medium text-base tracking-wide cursor-pointer",
                    "transform transition-all duration-300",
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4",
                    isCurrent
                      ? "bg-gradient-to-r from-teal-500/10 to-indigo-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 dark:border-teal-500/30"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
