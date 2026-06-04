"use client";

import React, { useState } from "react";
import { FaLocationArrow, FaCheck } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/JohnAricsson",
    svgPath: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://facebook.com/JohnAricsson1",
    svgPath: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/johnaricsson1",
    svgPath: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/8801317235251",
    svgPath: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.179.001 6.169 1.24 8.419 3.496 2.248 2.256 3.483 5.252 3.482 8.435-.005 6.618-5.342 11.963-11.91 11.963-2.004-.001-3.971-.506-5.717-1.47L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.432 0 9.851-4.401 9.854-9.81 0-2.62-1.02-5.086-2.871-6.938C16.447 1.95 13.987 1.9 11.961 1.9c-5.436 0-9.853 4.403-9.856 9.813-.001 1.634.45 3.226 1.304 4.63l-.983 3.583 3.676-.963z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const emailAddress = "johnaricsson1@gmail.com";

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Could not complete background clipboard operation:", err);
    }
  };

  return (
    <footer
      className="w-full pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden bg-white dark:bg-[#090d16] border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-500"
      id="contact"
    >
      <div className="flex flex-col items-center relative z-10 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white text-center max-w-3xl leading-[1.2] md:leading-[1.25]">
          Ready to take{" "}
          <span className="text-teal-600 dark:text-teal-400">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 font-medium mt-4 sm:mt-6 md:mt-8 mb-6 text-center max-w-md leading-relaxed text-sm sm:text-base">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your design and system engineering goals.
        </p>

        {/* Semantic Action Button (Mobile Optimized) */}
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleEmailCopy}
            className="group relative w-full sm:w-auto max-w-[16rem] active:scale-95 transition-transform duration-200 focus:outline-none"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 blur transition-all duration-500 group-hover:opacity-40" />

            <div className="relative inline-flex h-12 w-full sm:w-60 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-zinc-300 bg-white px-8 py-1 text-sm font-bold text-zinc-900 shadow-sm transition-all duration-300 group-hover:border-teal-500/50 group-hover:bg-zinc-50 dark:border-zinc-800 dark:bg-[#090d16] dark:text-white dark:group-hover:border-indigo-500/50 dark:group-hover:bg-zinc-900/80">
              <span className="relative z-10 flex items-center gap-2">
                {copied ? (
                  <>
                    <FaCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 transition-all duration-300 scale-110" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <FaLocationArrow className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Let's get in touch
                  </>
                )}
              </span>
            </div>
          </button>

          <div className="h-5 overflow-hidden flex items-center justify-center">
            <p
              className={`text-[11px] sm:text-xs font-mono tracking-wider font-medium transition-all duration-300 ${
                copied
                  ? "text-teal-600 dark:text-teal-400 opacity-100 translate-y-0"
                  : "text-zinc-500 dark:text-zinc-500 opacity-80 translate-y-0"
              }`}
            >
              {copied
                ? "✓ Ready to paste into your app!"
                : "Click button to copy email address"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-16 sm:mt-20 md:mt-24 flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-7xl mx-auto px-4 md:px-10 relative z-10 border-t border-zinc-200 dark:border-zinc-800/80 pt-6 sm:pt-8">
        <p className="text-[11px] sm:text-xs md:text-sm font-mono font-medium text-zinc-500 dark:text-zinc-500 tracking-wide order-2 md:order-1 mb-2 md:mb-0">
          Copyright © {currentYear} John Aricsson
        </p>

        <div className="flex items-center gap-3 sm:gap-4 order-1 md:order-2">
          {SOCIAL_LINKS.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              title={info.name}
              className="w-11 h-11 sm:w-10 sm:h-10 flex justify-center items-center rounded-xl border border-zinc-300 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:border-teal-500/40 hover:bg-zinc-50 hover:text-teal-600 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] group cursor-pointer dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400 dark:hover:border-teal-500/30 dark:hover:bg-zinc-900 dark:hover:text-teal-400 dark:hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] dark:shadow-none"
            >
              <div className="opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 dark:opacity-60">
                {info.svgPath}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
