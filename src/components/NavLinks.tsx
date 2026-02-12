
interface NavLinkProps {
  href: string;
  title: string;
  mobile?: boolean;
}

const NavLink = ({ href, title, mobile = false }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`group relative block font-medium rounded-lg transition-all duration-300 hover:bg-luxury-gold/10 hover:rounded-2xl ${
        mobile
          ? "py-4 px-6 text-lg text-luxury-platinum w-full text-center"
          : "py-3 px-4 text-sm text-luxury-platinum/80"
      }`}
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-luxury-gradient transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4"></div>
    </a>
  );
};

export default NavLink;
