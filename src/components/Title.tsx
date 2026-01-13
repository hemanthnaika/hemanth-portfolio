import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

type TitleProps = {
  title: string;
  subtitle: string;
  trigger: string | HTMLElement;
  start: string;
  end: string;
};

const Title = ({ title, subtitle, trigger, start, end }: TitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const split = SplitText.create(ref.current, {
      type: "chars",
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: true,
      },
    });

    return () => split.revert();
  }, []);

  return (
    <h2 ref={ref} className="text-3xl md:text-4xl font-bold text-center ">
      {title} <span className="text-primary">{subtitle}</span>
    </h2>
  );
};

export default Title;
