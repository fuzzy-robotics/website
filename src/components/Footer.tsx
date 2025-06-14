
import LogoSmall from './LogoSmall';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Research: ['Publications', 'Datasets', 'Open Source', 'Collaborations'],
    Company: ['About Us', 'Team', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API', 'Tutorials', 'Blog'],
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#6179f6] to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#ff914d] to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6179f6]/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <LogoSmall scale={0.8} />
            </div>
            <p 
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: 'Rubik' }}
            >
              Pioneering the future of AI-powered robotics through cutting-edge research, innovation, and real-world applications.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group bg-white/10 hover:bg-[#6179f6] p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 
                className="text-xl font-bold text-white mb-6 relative"
                style={{ fontFamily: 'Montserrat' }}
              >
                {category}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#6179f6] to-[#ff914d] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group text-gray-300 hover:text-white text-sm transition-all duration-300 flex items-center gap-2"
                      style={{ fontFamily: 'Rubik' }}
                    >
                      <span>{link}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p 
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'Rubik' }}
            >
              © 2024 Futuro Robotics. All rights reserved. Building the future, one algorithm at a time.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
