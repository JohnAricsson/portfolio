import React from "react";
import { client, PROJECTS_QUERY } from "@/sanity/lib/sanity.queries";
import { PROJECTS_QUERY_RESULT } from "@/sanity/sanity.types";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

// 🌟 Pure Server Component: Fully synchronized with Minimalist Slate & Cyber Cyan Theme
const Projects = async () => {
  // Fetch live datasets directly from Sanity during the server render phase
  const projects: PROJECTS_QUERY_RESULT =
    (await client.fetch(PROJECTS_QUERY)) || [];

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-20 w-full bg-[#090d16] text-center text-white"
      >
        <p className="text-zinc-400 font-mono text-sm">
          No recent engineering builds discovered.
        </p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 w-full bg-[#090d16] text-white px-4 md:px-10 border-t border-zinc-900"
    >
      {/* Showcase Heading Block */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        {/* Theme Update: Badge text swapped from purple to themed cyber cyan */}
        <p className="text-teal-400 font-mono uppercase tracking-widest text-xs font-semibold mb-3">
          My Creative Laboratory
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Showcase of Recent Projects
        </h2>
        {/* Theme Update: Description switched to clean neutral zinc */}
        <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
          A hand-selected gallery of full-stack engineering builds combining
          performance optimization with interactive, minimal UX design.
        </p>
      </div>

      {/* Symmetric 2-Column Desktop Architecture Mesh Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-36 gap-x-12 max-w-6xl mx-auto items-center justify-center p-4 mt-10">
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
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-full"
            >
              <PinContainer
                title={liveUrl || gitUrl || "GitHub Repo"}
                href={liveUrl || gitUrl || "#"}
              >
                {/* 🌟 Absolute background overlay anchor making the entire card clickable */}
                <a
                  href={liveUrl || gitUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 rounded-3xl"
                />

                {/* Outer Card Shell Box Container updated to dark glassmorphic slate layout */}
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-8 bg-zinc-900/20 rounded-3xl border border-zinc-800 backdrop-blur-sm group/pin-card transition-colors duration-300 hover:border-zinc-700/50">
                  <img
                    src={project.img || "/placeholder.jpg"}
                    alt={project.title || "Project preview image"}
                    className="absolute bottom-0 z-10 w-full h-full object-cover object-top rounded-t-xl transition-transform duration-500 group-hover/pin-card:scale-[1.02]"
                  />
                  {/* Subtle inner dark gradient casting up over image previews for text separation clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                {/* Title and Short Description formatting updates */}
                <h1 className="font-sans font-bold lg:text-2xl md:text-xl text-base text-white tracking-tight line-clamp-1">
                  {project.title || "Untitled Code Repository"}
                </h1>
                <p className="font-sans font-light text-sm line-clamp-2 text-zinc-400 my-2.5 leading-relaxed max-w-[95%]">
                  {project.description ||
                    "No project overview parameters declared inside Sanity CMS."}
                </p>

                {/* Bottom Row Footer Layout Container Blocks */}
                <div className="flex items-center justify-between mt-6 mb-2">
                  {/* Tech Stack Icons Lists Rendering Block */}
                  <div className="flex items-center flex-row">
                    {Array.isArray(project.iconLists) &&
                      project.iconLists.map((icon, imgIndex) => (
                        <div
                          key={imgIndex}
                          // Theme Update: Border tones aligned to match minimal slate layout lines
                          className="border border-zinc-800 bg-zinc-950 rounded-full lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center shadow-md shadow-black/20"
                          style={{
                            transform: `translateX(-${6 * imgIndex}px)`,
                            zIndex: 10 - imgIndex,
                          }}
                        >
                          <img
                            src={icon || "/placeholder.svg"}
                            alt={`icon-${imgIndex}`}
                            className="p-2 w-full h-full object-contain"
                          />
                        </div>
                      ))}
                  </div>

                  {/* ✅ PURE NATIVE HTML HYPERLINKS (z-30 lifts them cleanly above the main card link layer) */}
                  <div className="flex items-center justify-center space-x-4 z-30 relative font-mono text-xs">
                    {project.gitHubLink && (
                      <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900/30 rounded-lg p-2 transition duration-200"
                        title="View Source Code"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-teal-400 font-medium items-center hover:text-teal-300 transition duration-200 border border-teal-500/10 bg-teal-500/5 rounded-lg px-3 py-1.5"
                      >
                        <span>Live Site</span>
                        <FaLocationArrow className="ms-2 w-2.5 h-2.5 text-teal-400" />
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
