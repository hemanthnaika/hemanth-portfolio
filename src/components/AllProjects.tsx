import { CircleChevronLeft, Github, Link } from "lucide-react";
import { useNavigate } from "react-router";
import CustomLayout from "./CustomLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import type { LenisRef } from "lenis/react";
import { Badge } from "./ui/badge";
import { projects } from "@/constants";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const AllProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(backBtnRef.current, {
        x: -200,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(".title", {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".card", {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
    },

    { scope: containerRef }
  );

  return (
    <section className="my-10" id="AllProjects" ref={containerRef}>
      <CustomLayout>
        <div className="flex items-center  justify-between gap-4 mb-10">
          <button
            ref={backBtnRef}
            onClick={() => navigate("/")}
            className="group flex items-center justify-center w-10 h-10 rounded-full
                       border border-border bg-primary shadow-sm
                       hover:bg-primary hover:text-white transition backBtn"
            aria-label="Go back"
          >
            <CircleChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-center title">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <div />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 card">
          {projects.slice(3).map((project) => (
            <div
              key={project.id}
              className="group relative bg-primary/10 rounded-2xl overflow-hidden
                 border border-border shadow-sm hover:shadow-xl
                 transition-all duration-300 "
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt="skill-connect"
                  className="h-full w-full 
                     group-hover:scale-105 transition-transform duration-500"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed ">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech.title}>
                      <img
                        src={tech.icon}
                        alt={tech.title}
                        className="w-3 h-3"
                      />
                      <span>{tech.title}</span>
                    </Badge>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-border/60" />

                {/* Links */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    View Project
                  </span>

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 cursor-pointer hover:text-primary transition" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link className="w-5 h-5 cursor-pointer hover:text-primary transition" />
                      </a>
                    )}
                    {project.demoAdmin && (
                      <a
                        href={project.demoAdmin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link className="w-5 h-5 cursor-pointer hover:text-primary transition" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomLayout>
    </section>
  );
};

export default AllProjects;
