import React from "react";
import { client, PROJECTS_QUERY } from "@/sanity/lib/sanity.queries";
import { PROJECTS_QUERY_RESULT } from "@/sanity/sanity.types";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const Projects = async () => {
  const projects: PROJECTS_QUERY_RESULT =
    (await client.fetch(PROJECTS_QUERY)) || [];

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-20 w-full bg-white dark:bg-[#090d16] text-center text-zinc-950 dark:text-white border-t border-zinc-400 dark:border-zinc-800/80 transition-colors duration-500"
      >
        <p className="text-zinc-800 dark:text-zinc-400 font-mono text-sm">
          No recent engineering builds discovered.
        </p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-20 w-full bg-white dark:bg-[#090d16] text-zinc-950 dark:text-white px-4 md:px-10 border-t border-zinc-400 dark:border-zinc-800/80 transition-colors duration-500"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
        <p className="text-teal-700 dark:text-teal-400 font-mono uppercase tracking-widest text-xs font-black mb-3">
          My Creative Laboratory
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight">
          Showcase of Featured Projects
        </h2>
        <p className="text-zinc-800 dark:text-zinc-400 mt-3 md:mt-4 text-sm md:text-base max-w-xl mx-auto font-bold leading-relaxed">
          A hand-selected gallery of development projects combining performance
          optimization with interactive, minimal UX design.
        </p>
      </div>

      {/* Grid — 1 col on mobile, 2 col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const liveUrl = project.liveLink || "";
          const gitUrl = project.gitHubLink || "";
          const uniqueKey =
            project.id !== null && project.id !== undefined
              ? String(project.id)
              : `project-${index}`;

          return (
            <div
              key={uniqueKey}
              // Mobile: normal padding, no fixed min-height that causes overlap
              // Desktop: keep the tall min-height for the 3D pin effect
              className="py-10 sm:py-12 lg:py-16 h-auto lg:min-h-[42rem] flex items-center justify-center w-full"
            >
              <PinContainer
                title={liveUrl || gitUrl || "GitHub Repo"}
                href={liveUrl || gitUrl || "#"}
              >
                <a
                  href={liveUrl || gitUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 rounded-3xl"
                />

                {/* Project image — responsive width and height */}
                <div className="relative flex items-center justify-center w-[82vw] sm:w-[480px] md:w-[540px] lg:w-[570px] overflow-hidden h-[48vw] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] mb-6 sm:mb-8 bg-zinc-200/90 dark:bg-zinc-900/20 rounded-3xl border border-zinc-300 dark:border-zinc-800 backdrop-blur-sm group/pin-card transition-colors duration-300 hover:border-zinc-500 dark:hover:border-zinc-700/50">
                  <img
                    src={project.img || "/placeholder.jpg"}
                    alt={project.title || "Project preview image"}
                    className="absolute bottom-0 z-10 w-full h-full object-cover object-top rounded-t-xl transition-transform duration-500 group-hover/pin-card:scale-[1.02] opacity-95 dark:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-400/30 dark:from-zinc-950/40 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                {/* Title */}
                <h1 className="font-sans font-black text-base sm:text-xl lg:text-2xl text-zinc-950 dark:text-white tracking-tight line-clamp-1">
                  {project.title || "Untitled Code Repository"}
                </h1>

                {/* Description */}
                <p className="font-sans font-bold text-xs sm:text-sm line-clamp-2 text-zinc-800 dark:text-zinc-400 my-2 sm:my-2.5 leading-relaxed max-w-[95%]">
                  {project.description ||
                    "No project overview parameters declared inside Sanity CMS."}
                </p>

                {/* Footer: icons + links */}
                <div className="flex items-center justify-between mt-4 sm:mt-6 mb-2">
                  {/* Tech stack icons */}
                  <div className="flex items-center flex-row">
                    {Array.isArray(project.iconLists) &&
                      project.iconLists.map((icon, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="border border-zinc-400 dark:border-zinc-800 bg-zinc-300 dark:bg-zinc-950 rounded-full w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center shadow-md shadow-black/10 dark:shadow-black/20"
                          style={{
                            transform: `translateX(-${6 * imgIndex}px)`,
                            zIndex: 10 - imgIndex,
                          }}
                        >
                          <img
                            src={icon || "/placeholder.svg"}
                            alt={`icon-${imgIndex}`}
                            className="p-1.5 sm:p-2 w-full h-full object-contain brightness-95 dark:brightness-100"
                          />
                        </div>
                      ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-center gap-2 sm:gap-4 z-30 relative font-mono text-xs">
                    {project.gitHubLink && (
                      <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-zinc-800 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-400 dark:border-zinc-800 bg-zinc-300 dark:bg-zinc-900/30 rounded-lg p-1.5 sm:p-2 transition duration-200 shadow-md dark:shadow-none"
                        title="View Source Code"
                      >
                        <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-teal-700 dark:text-teal-400 font-black items-center hover:text-teal-800 dark:hover:text-teal-300 transition duration-200 border border-teal-500/40 dark:border-teal-500/10 bg-teal-500/10 dark:bg-teal-500/5 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shadow-md dark:shadow-none"
                      >
                        <span>Live Site</span>
                        <FaLocationArrow className="ms-1.5 sm:ms-2 w-2 h-2 sm:w-2.5 sm:h-2.5 text-teal-700 dark:text-teal-400" />
                      </a>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
