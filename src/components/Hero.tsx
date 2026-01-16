import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Particles from "./Particles";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { resume } from "@/assets";

const Hero = () => {
  useGSAP(() => {
    const split = new SplitText(".hero-title", {
      type: "lines",
    });

    gsap.from(split.lines, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
      delay: 1.5,
    });
  }, []);
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center mt-10 md:mt-5">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 h-72 w-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center hero-title">
          {/* Role */}
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
            <span className="bg-black/10 dark:bg-white/10  px-5 py-1 rounded-2xl backdrop-blur-md inline-flex items-center gap-2 ">
              {/* Green pulsing dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              {/* Text */}
              Software Developer (Web & Mobile)
            </span>
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span
              className="text-primary inline-block cursor-pointer"
              style={{ perspective: 600 }}
            >
              Hemanth
            </span>
            <br />I design and build modern web and mobile applications
          </h1>

          <div className="mt-5" />
          {/* Description */}
          <p className="text-base md:text-lg justify-center ">
            I design and develop clean, reliable web and mobile applications. I
            focus on solving real problems, writing maintainable code, and
            turning ideas into products that people can use with ease.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="cursor-pointer">
              <Button size="lg" className="rounded-full px-8 ">
                Contact Me <Phone />
              </Button>
            </a>

            <a href={resume} download>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-8 hover:bg-primary transition ease-out duration-300"
              >
                Download Resume <Download />
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-6 justify-center text-foreground">
            <a
              href="https://github.com/hemanthnaika"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/hemanth-naika/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:hemanthnaika12@gmail.com"
              className="hover:text-primary transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
