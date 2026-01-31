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
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
