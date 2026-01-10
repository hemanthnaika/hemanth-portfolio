import CustomLayout from "@/components/CustomLayout";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-32">
      <CustomLayout>
        <div className="max-w-6xl mx-auto  border-t border-white/10 py-5">
          {/* Top Line */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-lg font-semibold tracking-wide">
              Let’s build something useful.
            </h3>

            <a
              href="mailto:your@email.com"
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Hemanth</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition">
                <Github />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Linkedin />
              </a>
              <a
                href="mailto:your@email.com"
                className="hover:text-primary transition"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </CustomLayout>
    </footer>
  );
};

export default Footer;
