import { skills } from "@/constants";
import CustomLayout from "./CustomLayout";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
const Skills = () => {
  useGSAP(() => {
    const split = SplitText.create(".skill-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    tl.from(split.chars, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
    }).from(".skill-item", {
      y: 100,
      opacity: 0,

      stagger: 0.05,
    });
  });
  return (
    <section id="skills" className="mt-20">
      <CustomLayout>
        <div className="max-w-6xl  mx-auto ">
          <h2 className="text-xl md:text-3xl font-bold  text-center title mb-5 skill-title">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="flex flex-wrap gap-5 ">
            {skills.map((skill) => (
              <div className="skill-item">
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
