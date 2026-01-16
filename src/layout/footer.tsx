import CustomLayout from "@/components/CustomLayout";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <CustomLayout>
        <div className="max-w-6xl mx-auto  border-t border-white/10 py-3">
          {/* Bottom Line */}
          <div className=" flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold font-heading text-primary">
                Hemanth
              </span>
            </p>
            <div className="flex gap-6">
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
              <a
                href="mailto:hemanthnaika12@gmail.com"
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition"
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </CustomLayout>
    </footer>
  );
};

export default Footer;
