import CustomLayout from "./CustomLayout";
import { contact } from "@/assets/icons";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Title from "./Title";
import { useState } from "react";
import toast from "react-hot-toast";


const InputBox = ({
  label,
  placeholder,
  id,
  type = "text",
  message = false,
}: {
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  message?: boolean;
}) => {
  return (
    <div className="space-y-3">
      <Label htmlFor={id} className="font-heading">
        {label}
      </Label>
      {message ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          className="bg-zinc-900"
          required
          name={id}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="bg-zinc-900"
          name={id}
          required
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1224px)" });

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: isMobileOrTablet ? "top 90%" : "top center",
        end: isMobileOrTablet ? "bottom bottom+=20%" : "bottom 94%",
        scrub: 1,
      },
    });

    tl.from(".contact-desc", { opacity: 0, duration: 0.5, delay: 0.5 });
    tl.fromTo(
      ".contact-img",
      { x: -200, y: 300, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
    );
    tl.from(".input-form", { x: 200, opacity: 0, stagger: 0.05 });
  });

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3API_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your message has been sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mb-10">
      <CustomLayout>
        <div className="max-w-6xl mx-auto">
          <Title
            title="Get in"
            subtitle="Touch"
            trigger="#contact"
            start={isMobileOrTablet ? "top 90%" : "top center"}
            end={isMobileOrTablet ? "bottom bottom+=20%" : "bottom 94%"}
          />
          <p className="text-center mt-3 contact-desc">
            I’ll get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-12">
            {/* Image */}
            <div className="w-full md:h-96 h-80 flex items-center justify-center">
              <img
                src={contact}
                alt="contact"
                className="h-full w-auto contact-img"
              />
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 bg-primary/10 p-5 md:p-10 rounded-xl shadow-lg input-form"
            >
              <input type="hidden" name="subject" value="Portfolio Contact" />
              <InputBox id="name" label="Name" placeholder="Your name" />
              <InputBox
                id="email"
                type="email"
                label="Email"
                placeholder="Where can I reach you back?"
              />
              <InputBox
                id="message"
                message
                type="text"
                label="Message"
                placeholder="Your words"
              />
              <Button
                type="submit"
                className="font-heading cursor-pointer"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </CustomLayout>
    </section>
  );
};

export default Contact;
