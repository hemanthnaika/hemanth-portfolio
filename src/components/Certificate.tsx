import { useState } from "react";
import CustomLayout from "./CustomLayout";

import Title from "./Title";
import { certificates } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Certificate = () => {
  const [preview, setPreview] = useState<string | null>(null);

  useGSAP(() => {
    gsap.from(".certificate", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#certificates",
        start: "top center",
        end: "bottom 95%",
   
        scrub: 1,
      },
    });
  });
  return (
    <section id="certificates" className="my-24">
      <CustomLayout>
        <Title
          title="Awards &"
          subtitle="Certificates"
          trigger="#certificates"
          start="top 75%"
          end="bottom bottom"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10 certificate">
          {certificates.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreview(item.img)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-neutral-900 shadow-lg hover:shadow-primary/30 transition-all duration-300 h-52 flex items-center justify-center  p-5"
            >
              <img
                src={item.img}
                alt="certificate"
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {preview && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setPreview(null)}
          >
            <img
              src={preview}
              alt="Certificate Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          </div>
        )}
      </CustomLayout>
    </section>
  );
};

export default Certificate;
