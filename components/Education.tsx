import React from "react";
import { client, EDUCATION_QUERY } from "@/sanity/lib/sanity.queries";
import { EDUCATION_QUERY_RESULT } from "@/sanity/sanity.types";
import { Timeline } from "./ui/timeline";

const Education = async () => {
  // Pure Server Side Data Fetching
  const educationData: EDUCATION_QUERY_RESULT =
    (await client.fetch(EDUCATION_QUERY)) || [];

  // Transform Sanity data payload array to meet your custom Timeline entry types
  const timelineEntries = educationData.map((item) => ({
    title: item.period || "Academic Year",
    content: (
      // Theme Update: Shifted to a beautiful glassmorphic slate variant container
      <div className="p-6 md:p-8 bg-zinc-900/20 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-3xl transition-colors duration-300 hover:border-zinc-700/50 group/edu-card">
        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover/edu-card:text-teal-400 transition-colors duration-300">
          {item.title || "Degree/Program Title"}
        </h4>
        {/* Theme Update: Program Institution color matched to clean cyber teal text */}
        <p className="text-teal-400/90 font-mono text-xs md:text-sm uppercase tracking-wider mt-1.5 font-medium">
          {item.institution || "University/Platform Name"}
        </p>

        {Array.isArray(item.description) && item.description.length > 0 && (
          <ul className="mt-5 space-y-3.5 text-zinc-400 text-sm md:text-base list-none">
            {item.description.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 leading-relaxed font-normal"
              >
                {/* Theme Update: Upgraded bullet points from plain dots to high-tech code dashes */}
                <span className="text-teal-500 font-mono select-none text-sm mt-[2px]">
                  &gt;
                </span>
                <span className="text-zinc-300">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ),
  }));

  return (
    <section
      id="education"
      // Theme Update: Swapped #030014 base for your premium background token value #090d16
      className="w-full bg-[#090d16] pt-32 text-white relative border-t border-zinc-900"
    >
      {/* Premium Centered Theme Showcase Header */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        {/* Theme Update: Label badge text swapped to matched cyber teal typography */}
        <p className="text-teal-400 font-mono uppercase tracking-widest text-xs font-semibold mb-3">
          Academic Timeline
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Education & Milestones
        </h2>
        {/* Theme Update: Sub-text matched to a clean neutral zinc profile */}
        <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
          A visual roadmap tracing my academic career alongside dedicated
          engineering pursuits and project builds.
        </p>
      </div>

      {/* Render the local timeline passing the parsed data cleanly */}
      {timelineEntries.length > 0 ? (
        <Timeline data={timelineEntries} />
      ) : (
        <div className="text-center py-24 text-zinc-500 font-mono text-sm">
          No records discovered inside the Sanity dashboard dataset entries.
        </div>
      )}
    </section>
  );
};

export default Education;
