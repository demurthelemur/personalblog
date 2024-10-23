// src/components/Navbar.tsx
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger Icon

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-customBlack">
      <ul className="flex h-[80px] justify-between items-center">
        <li>
          <Link href="/">
            <h4 className="text-h4 font-h4 hover:text-primary ">DTL</h4>
          </Link>
        </li>

        {/* Hamburger icon, hidden on large screens */}
        <li className="block md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <HiMenuAlt3 className="w-8 h-8 text-customBlack" />
          </button>
        </li>

        {/* Menu links, hidden on small screens, visible on large screens */}
        <li className="hidden md:flex space-x-16">
          <Link href="/portfolio">
            <h6
              className={`text-h6 font-h6 hover:text-primary ${
                pathname === "/portfolio" ? "underline" : ""
              }`}
            >
              Portfolio
            </h6>
          </Link>
          <Link href="/aboutMe">
            <h6
              className={`text-h6 font-h6 hover:text-primary ${
                pathname === "/aboutMe" ? "underline" : ""
              }`}
            >
              About Me
            </h6>
          </Link>
          <Link href="/contact">
            <h6
              className={`text-h6 font-h6 hover:text-primary ${
                pathname === "/contact" ? "underline" : ""
              }`}
            >
              Contact Me
            </h6>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center space-y-4 md:hidden bg-white">
          <Link href="/portfolio">
            <h6
              className={`text-h6 font-h6 ${
                pathname === "/portfolio" ? "underline" : ""
              }`}
            >
              Portfolio
            </h6>
          </Link>
          <Link href="/resume">
            <h6
              className={`text-h6 font-h6 ${
                pathname === "/resume" ? "underline" : ""
              }`}
            >
              Resume
            </h6>
          </Link>
          <Link href="/contact">
            <h6
              className={`text-h6 font-h6 ${
                pathname === "/contact" ? "underline" : ""
              }`}
            >
              Contact Me
            </h6>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
