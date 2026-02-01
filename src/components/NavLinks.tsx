
interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="group relative block py-3 px-4 text-luxury-platinum/80 font-medium text-sm rounded-lg transition-all duration-300 hover:bg-luxury-gold/10 hover:rounded-2xl"
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-luxury-gradient transform -translate-x-1/2 transition-all duration-300"></div>
    </a>
  );
};

export default NavLink;
