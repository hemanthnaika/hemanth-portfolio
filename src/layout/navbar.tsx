"use client";

import React, { useRef } from "react";
import CustomLayout from "@/components/CustomLayout";
import { navBar } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        ".nav-item",
        {
          y: -10,
          opacity: 0,
          stagger: 0.12,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      let lastScroll = 0;

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll();

          if (currentScroll > lastScroll && currentScroll > 100) {
            // scrolling DOWN → hide navbar
            gsap.to(navRef.current, {
              y: -100,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          } else {
            // scrolling UP → show navbar
            gsap.to(navRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }

          lastScroll = currentScroll;
        },
      });
    },
    { scope: navRef }
  );

  return (
    <header className="pt-5 fixed top-0 left-0 w-full z-50">
      <CustomLayout>
        <nav className="flex items-center justify-center">
          <div
            ref={navRef}
            className="
              flex px-5 items-center gap-5
              bg-white/10
              rounded-md
              backdrop-blur-2xl
            "
          >
            <img src="/Logo.svg" alt="Hemanth" className="w-8 h-8 nav-item" />

            <ul className="flex items-center gap-5">
              {navBar.map((item) => {
                const Icon = item.icons;
                return (
                  <li key={item.title} className="nav-item">
                    <a
                      href={item.link}
                      className="
                        flex items-center gap-1
                        font-heading text-xs font-bold
                        text-white/70
                        transition-colors duration-300
                        hover:text-primary
                      "
                    >
                      <Icon className="w-4 h-4" />
                      <span className="tracking-wider hidden md:block">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </CustomLayout>
    </header>
  );
};

export default Navbar;
