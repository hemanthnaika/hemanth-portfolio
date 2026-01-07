import { about } from "@/assets";
import CustomLayout from "./CustomLayout";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Brain, Rocket, Users } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
const About = () => {
  useGSAP(() => {
    const split = new SplitText(".title", {
      type: "chars",
    });

    const paragraph = new SplitText(".paragraph", {
      type: "lines",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center-=70 center",
        scrub: true,
      },
    });

    tl.from(split.chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
    });

    tl.from(paragraph.lines, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
    });
    tl.from(".img-container", {
      x: 100,
      opacity: 0,
    });
    tl.from(".box", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
    });
  });

  return (
    <section id="about" className="isolate min-h-screen">
      <CustomLayout>
        <div className="max-w-6xl  mx-auto ">
          <h2 className="text-xl md:text-3xl font-bold  text-center title">
            About <span className="text-primary">Me</span>
          </h2>

          {/* Top Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* LEFT — TEXT */}
            <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center ">
              <p className="text-lg justify-center tracking-wider paragraph">
                I’m a{" "}
                <span className="text-primary font-bold">
                  Software Developer
                </span>{" "}
                based in Mangalore India. I enjoy building clean, practical web
                and mobile applications that solve real-world problems.
              </p>

              <p className="text-lg tracking-wider paragraph">
                I focus on writing maintainable code, continuously learning
                modern technologies, and building features that are simple,
                reliable, and user-friendly.
              </p>
            </div>
            {/* RIGHT — IMAGE */}
            <div className="order-1 md:order-2 mb-5 md:flex md:justify-end img-container">
              <CardContainer className="inter-var bg-red-400">
                <CardBody className="bg-black w-75 h-75">
                  <CardItem
                    translateZ="100"
                    className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 "
                  >
                    <img
                      src={about}
                      className=" rounded-xl group-hover/card:shadow-xl w-full h-full object-cover "
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 tracking-wider box">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md">
              <Rocket className="text-primary w-10 h-10" />
              <div>
                <h4 className="font-semibold">Problem Solving</h4>
                <p className="text-sm">
                  I break down complex problems into simple, practical
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md box">
              <Brain className="text-primary w-10 h-10" />
              <div>
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm ">
                  Curious and always improving through learning and exploration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md box">
              <Users className="text-primary w-10 h-10" />
              <div>
                <h4 className="font-semibold">Team Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable working with teams and contributing positively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
    </section>
  );
};

export default About;
