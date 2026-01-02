import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full x-40 transition-all duration-300 z-50",
        isScrolled
          ? "py-3 bg-background/95  backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center "
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Juuko Francis</span>
            Portifolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 lg:mr-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className=" text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile menu */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 w-6 h-8"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {isMenuOpen && (
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 lg:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 z-40">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  // className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                  className=" text-blue-100 transition-colors duration-300"
                  onClick={() =>
                    setIsMenuOpen((c) => {
                      console.log(item);
                      return !c;
                    })
                  }
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          // <div className="bg-blue-50/95 top-0 right-0  bottom-0 md:hidden w-5/8 overflow-hidden fixed transition-all z-10 rounded-b-2xl">
          //   <h1 className="flex justify-end text-2xl p-4">
          //     <ImCross className="" onClick={() => setIsMenuOpen((c) => !c)} />
          //   </h1>

          //   <div className="flex gap-2 flex-col container md:hidden   items-center space-y-2">
          //     {navItems.map((el, index) => (
          //       <NavLink
          //         key={index}
          //         to={el.href}
          //         className={({ isActive }) =>
          //           `cursor-pointer font-medium ${
          //             isActive ? "text-blue-500" : ""
          //           } hover:text-blue-400`
          //         }
          //         onClick={() => setIsMenuOpen((c) => !c)}
          //       >
          //         {el.name}
          //       </NavLink>
          //     ))}
          //   </div>
          // </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
