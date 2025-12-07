import { socialIcons } from "@/app/data";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-gray950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-14 space-y-12">
          <h1 className="text-3xl font-bold flex-1 text-left">Shortly</h1>

          <div className="flex flex-col md:flex-row md:space-x-24 text-center md:text-left space-y-12 md:space-y-0">
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Link Shortening
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Branded Links
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-8 text-white">
            {socialIcons.map((icon, index) => 
              <SocialIcon key={index} icon={icon.icon} alt={icon.alt} href={icon.href} />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
