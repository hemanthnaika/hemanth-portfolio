import { experience } from "@/constants";
import CustomLayout from "./CustomLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/SplitText";

const Card = ({
  role,
  company,
  logo,
  responsibilities,
  techStack,
  isTop,
  mobile = false,
}: {
  role: string;
  company: string;
  logo: string;
  responsibilities: string;
  techStack: string[];
  isTop?: boolean;
  mobile: boolean;
}) => {
  return (
    <div className="w-full md:max-w-xs rounded-2xl bg-primary/10 backdrop-blur-xl border border-white/10 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-2 relative hover:bg-primary/20  ease-in-out">
      {/* CONNECTOR */}
      {!mobile &&
        (isTop ? (
          <div className="bg-primary h-4 w-0.5 absolute -bottom-3 left-1/2 -translate-x-1/2" />
        ) : (
          <div className="bg-primary h-4 w-0.5 absolute -top-3 left-1/2 -translate-x-1/2" />
        ))}

      {/* Role */}
      <h3 className="font-semibold text-white">{role}</h3>

      {/* Company & logo */}
      <p className="text-sm text-white/60 mt-1 flex items-center">
        <img
          src={logo}
          alt=""
          className="w-6 h-6 bg-white/10 rounded-md mr-2"
        />
        {company}
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-white/10 my-3" />

      {/* Responsibilities */}
      <p className="text-sm text-white/80">{responsibilities}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs text-white/80 bg-white/10 rounded-full px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const progress = useRef<HTMLDivElement>(null);
  const desktopCardRef = useRef<HTMLDivElement[]>([]);
  const mobileCardRef = useRef<HTMLDivElement[]>([]);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1224px)" });

  const cardElement = isMobileOrTablet ? mobileCardRef : desktopCardRef;

  useGSAP(() => {
    const split = SplitText.create(".experience-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: isMobileOrTablet ? "top 80%" : "center center",
        end: isMobileOrTablet ? "bottom bottom" : "bottom center",
        pin: !isMobileOrTablet,
        scrub: true,
      },
    });

    tl.from(split.chars, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
    });
    tl.from(cardElement.current[0], {
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });
    tl.fromTo(progress.current, { width: "0%" }, { width: "5%" });

    tl.fromTo(progress.current, { width: "0%" }, { width: "50%" });
    tl.from(cardElement.current[1], {
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });

    tl.fromTo(progress.current, { width: "0%" }, { width: "100%" });
    tl.from(cardElement.current[2], {
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });
  });
  return (
    <section className="mt-20 md:mt-5 " id="experience">
      <CustomLayout>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold  text-center title mb-5 experience-title ">
            My <span className="text-primary">Journey</span>
          </h2>
          <div className="h-96 relative mt-28 hidden md:block ">
            <div className="absolute h-0.5 bg-white/10 w-9/12 left-1/2 -translate-x-1/2 top-1/2 ">
              <div className="bg-primary h-full w-full" ref={progress} />
            </div>
            {experience.map((item, index) => (
              <div
                className={item.style}
                key={index}
                ref={(el) => {
                  if (el) desktopCardRef.current[index] = el;
                }}
              >
                <Card {...item} isTop={index % 2 === 0} mobile={false} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5  mt-15 md:hidden">
            {experience.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) mobileCardRef.current[index] = el;
                }}
              >
                <Card {...item} mobile={true} />
              </div>
            ))}
          </div>
        </div>
      </CustomLayout>
    </section>
  );
};

export default Experience;
