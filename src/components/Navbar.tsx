import React, { useState, useEffect } from "react";
import NavLink from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

interface NavLinkItem {
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About", 
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Services",
    path: "#services"
  },
  {
    title: "Contact Me",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'border-b border-luxury-gold/20 shadow-2xl shadow-luxury-gold/10 bg-black/50 backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      {/* Content centered within the vertical grid lines (8.33% from each side) */}
      <div className="max-w-[83.34%] mx-auto px-6">
        <div className="flex lg:py-6 flex-wrap items-center justify-between py-4">
          
          
          <a
            href="/"
            className="group relative"
          >
            <div className="text-2xl md:text-4xl font-bold font-display -ml-6">
              <span className="text-luxury-platinum text-2xl fira-sans-semibold">CODERHEEM</span>
              <span className="text-luxury-gold text-sm">.dev</span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></div>
          </a>
          
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border-2 rounded-lg border-luxury-gold/50 text-luxury-platinum hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 hover:bg-luxury-gold/10"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border-2 rounded-lg border-luxury-gold/50 text-luxury-gold hover:text-luxury-platinum hover:border-luxury-platinum transition-all duration-300 hover:bg-luxury-gold/10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
          </div>
          
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-0 md:flex-row md:space-x-2 items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Contact Me" ? (
                    <a
                      href={link.path}
                      className="px-4 py-1 border -mr-6 border-luxury-gold bg-luxury-gold rounded-full font-semibold transition-all duration-300  hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 block"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <NavLink href={link.path} title={link.title} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full-width border at the bottom that crosses the vertical lines */}
      <div className="w-full border-b border-luxury-gold/20"></div>
      
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;