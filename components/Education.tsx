import React from "react";
import { client, EDUCATION_QUERY } from "@/sanity/lib/sanity.queries";
import { EDUCATION_QUERY_RESULT } from "@/sanity/sanity.types";
import { Timeline } from "./ui/timeline";

const Education = async () => {
  const educationData: EDUCATION_QUERY_RESULT =
    (await client.fetch(EDUCATION_QUERY)) || [];

  const timelineEntries = educationData.map((item) => ({
    title: item.period || "Academic Year",
    content: (
      <div className="group/edu-card w-full">
        {/* Optimized paddings for Mobile (p-4 -> p-6 -> p-8) */}
        <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-[#090d16] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-2xl transition-all duration-500 hover:shadow-xl dark:hover:shadow-3xl hover:border-teal-500/30 dark:hover:border-indigo-500/30 hover:-translate-y-1 max-w-3xl">
          <div className="mb-4 sm:mb-5">
            <div className="flex items-start sm:items-center gap-2 mb-2 sm:mb-3">
              <div className="h-6 sm:h-8 w-1 mt-1 sm:mt-0 bg-gradient-to-b from-teal-500 to-indigo-500 rounded-full shrink-0" />
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover/edu-card:text-teal-700 dark:group-hover/edu-card:text-teal-400 transition-colors duration-300">
                {item.title || "Degree/Program Title"}
              </h4>
            </div>

            {/* Added flex-wrap to prevent overflow on very narrow devices */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 ml-3 sm:ml-4">
              <p className="text-teal-600 dark:text-teal-400 font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-bold">
                {item.institution || "University/Platform Name"}
              </p>

              {item.period && (
                <div className="flex items-center gap-2">
                  <span className="text-neutral-300 dark:text-neutral-700 text-xs hidden sm:block">
                    •
                  </span>
                  <p className="text-neutral-500 dark:text-neutral-500 font-mono text-[10px] sm:text-xs font-medium">
                    {item.period}
                  </p>
                </div>
              )}
            </div>
          </div>

          {Array.isArray(item.description) && item.description.length > 0 && (
            <div className="mt-5 sm:mt-6 ml-2 sm:ml-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  Key Achievements
                </p>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 list-none">
                {item.description.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3 leading-relaxed text-neutral-700 dark:text-neutral-300 group/bullet"
                  >
                    <span className="text-teal-500 dark:text-teal-400 font-mono select-none text-xs sm:text-sm mt-[2px] transition-transform duration-200 group-hover/bullet:translate-x-1 shrink-0">
                      ▹
                    </span>
                    <span className="flex-1 text-sm sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 sm:mt-6 pt-4">
            <div className="h-px bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-transparent" />
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section
      id="education"
      className="w-full bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#090d16] dark:via-[#0a0e1a] dark:to-[#090d16] py-16 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] pointer-events-none" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
              Academic Journey
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
            Education
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 mt-4 sm:mt-6 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A visual roadmap tracing my academic career alongside dedicated
            engineering pursuits
          </p>
        </div>

        {timelineEntries.length > 0 ? (
          <Timeline data={timelineEntries} />
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500/10 to-indigo-500/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs sm:text-sm">
              No education records found. Please check your Sanity dashboard.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
