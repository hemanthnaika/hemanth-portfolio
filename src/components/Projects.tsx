import { book, skillConnectLap } from "@/assets";
import CustomLayout from "./CustomLayout";
import { Badge } from "./ui/badge";
import { Github, Link } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { Button } from "./ui/button";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 94%",
          scrub: 1,
        },
      });
      tl.from(".project-1", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
      }).from(".side-project", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" className="mt-24" ref={sectionRef}>
      <CustomLayout>
        <Title
          title="My"
          subtitle="Projects"
          trigger="#projects"
          start="top 80%"
          end="bottom bottom"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Featured Project */}
          <div className="project-1 md:col-span-2 rounded-xl overflow-hidden">
            <img
              src={skillConnectLap}
              alt="SkillConnect"
              className="w-full h-96 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">SkillConnect</h3>
              <p className="text-sm">
                SkillConnect is an app where people can share their skills,
                learn from others, and join live workshops with real-time video
                meetings.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>

              <div className="flex gap-4 pt-3">
                <Github />
                <Link />
              </div>
            </div>
          </div>

          {/* Side Projects */}
          <div className="space-y-6">
            <div className="group relative rounded-xl overflow-hidden side-project">
              <img src={book} alt="Book Store" className="h-64 w-full" />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <p className="text-sm text-gray-200 mb-3">
                  Online book store application with modern UI and smooth user
                  experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>React</Badge>
                  <Badge>Node</Badge>
                  <Badge>MongoDB</Badge>
                </div>

                <div className="flex gap-4 text-white">
                  <Github />
                  <Link />
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-3">Book Store</h3>
            </div>

            <div className="group relative rounded-xl overflow-hidden side-project">
              <img src="/test.png" alt="Book Store" className="h-64 w-full" />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <p className="text-sm text-gray-200 mb-3">
                  Online book store application with modern UI and smooth user
                  experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>React</Badge>
                  <Badge>Node</Badge>
                  <Badge>MongoDB</Badge>
                </div>

                <div className="flex gap-4 text-white">
                  <Github />
                  <Link />
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-3">Book Store</h3>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="/projects">
            <Button>View more</Button>
          </a>
        </div>
      </CustomLayout>
    </section>
  );
};

export default Projects;
