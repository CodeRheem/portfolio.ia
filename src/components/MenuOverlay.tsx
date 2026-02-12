import React from "react";
import NavLinks from "./NavLinks";

interface NavLinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLinkItem[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-luxury-gold/20 animate-in slide-in-from-top duration-300">
      <ul className="flex flex-col py-4 px-6 items-center gap-1 max-w-[83.34%] mx-auto">
        {links.map((link, index) => (
          <li key={index} className="w-full">
            {link.title === "Contact Me" ? (
              <a
                href={link.path}
                className="block w-full text-center py-3 px-6 mt-2 border border-luxury-gold bg-luxury-gold rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 text-base"
              >
                {link.title}
              </a>
            ) : (
              <NavLinks href={link.path} title={link.title} mobile />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
