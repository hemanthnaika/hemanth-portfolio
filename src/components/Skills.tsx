import { skills } from "@/constants";
import CustomLayout from "./CustomLayout";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Title from "./Title";
const Skills = () => {
  useGSAP(() => {
    gsap.from(".skill-item", {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <section id="skills" className="mt-20">
      <CustomLayout>
        <div className="max-w-6xl  mx-auto ">
          <Title
            title="My"
            subtitle="Skills"
            trigger="#skills"
            start="top center"
            end="center center"
          />
          <div className="flex flex-wrap gap-5 mt-10 ">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.title}>
                <Tooltip key={skill.title}>
                  <TooltipTrigger className="bg-white/20 backdrop-blur-2xl py-2 px-2 rounded-md hover:-translate-y-5 ease-in duration-300">
                    <img
                      src={skill.icon}
                      width={35}
                      height={35}
                      alt={skill.title}
                      className="rounded-md bg-white"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.title}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </CustomLayout>
    </section>
  );
};

export default Skills;
