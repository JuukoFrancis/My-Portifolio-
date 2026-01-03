import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        " top-0 w-full z-50 transition-all duration-300 fixed",
        isScrolled ? "py-3 bg-background  shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary" href="#hero">
          <span className="text-foreground">Juuko Francis's</span> Portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden z-50 p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {<Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0  w-3/4  ml-auto z-50 bg-background/80 backdrop-blur-md flex items-center justify-center md:hidden"
          )}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-3 right-5 p-2 text-foreground"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
