import { projects } from "@/constants";
import CustomLayout from "./CustomLayout";

import { Badge } from "./ui/badge";
import { Github, Link } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Title from "./Title";

const Projects = () => {
  

  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const infoRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const images = imagesRef.current;
    const infos = infoRef.current;
    if (!images.length) return;

    // initial state
    gsap.set(sectionRef.current, {
      backgroundColor: projects[0].bg,
    });

    gsap.set(images, {
      scale: 0.4,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set(infos, { opacity: 0, y: 50 });

    gsap.set(images[0], { scale: 1, opacity: 1 });
    gsap.set(infos[0], { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        scrub: 1,
        pin: true,

        anticipatePin: 1,
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: { min: 0.2, max: 0.4 },
          ease: "power1.inOut",
        },
      },
    });

    images.forEach((_, index) => {
      if (index === 0) return;

      // previous image zoom out & fade
      tl.to(images[index - 1], { scale: 1.2, opacity: 0, duration: 1 });
      tl.to(infos[index - 1], { opacity: 0, y: -50 }, "<");

      // current image zoom in
      tl.to(
        sectionRef.current,
        {
          backgroundColor: projects[index].bg,
          duration: 1,
        },
        "<"
      );
      tl.fromTo(
        images[index],
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "<"
      );
      tl.fromTo(
        infos[index],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "<"
      );
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="h-screen w-full p-5 relative transition-colors duration-500 mt-5 md:mt-28"
    >
      {projects.map((project, index) => (
        <div className="absolute inset-0 w-full h-full mt-5">
          <Title
            title="My"
            subtitle="Projects"
            trigger="#projects"
            start="top bottom"
            end="top 10%"
          />
          <CustomLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:min-h-[80vh] md:gap-5">
              <img
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                src={project.img}
                alt=""
                className="max-w-full h-auto rounded-md object-contain shadow-lg"
              />

              <div
                className="mt-5 flex flex-col gap-4 px-5"
                ref={(el) => {
                  if (el) infoRef.current[index] = el;
                }}
              >
                <h2 className="leading-none font-bold text-3xl">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, index) => (
                    <Badge key={index} className="flex items-center gap-1">
                      <img src={tag.icon} alt={tag.title} className="w-5 h-5" />
                      <span>{tag.title}</span>
                    </Badge>
                  ))}
                </div>
                {project.admin && (
                  <div>
                    <h3 className="font-semibold text-lg">Demo Credentials</h3>
                    <p className="text-gray-300">
                      <strong>Username:</strong> {project.admin.username}
                    </p>
                    <p className="text-gray-300">
                      <strong>Password:</strong> {project.admin.password}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {project.admin.description}
                    </p>
                  </div>
                )}
                <div className="flex gap-4 ">
                  <div>
                    <Github />
                  </div>
                  <div>
                    <Link />
                  </div>
                </div>
              </div>
            </div>
          </CustomLayout>
        </div>
      ))}
    </section>
  );
};

export default Projects;
