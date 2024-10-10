// src/components/Navbar.tsx
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-customBlack">
      <ul className="flex h-[80px] justify-between items-center">
        <li>
          <Link href="/">
            <h4 className="text-h4 font-h4 ">DTL</h4>
          </Link>
        </li>
        <li className="flex space-x-16">
          <Link href="/portfolio">
            <h6 className="text-h6 font-h6 ">Portfolio</h6>
          </Link>
          <Link href="/resume">
            <h6 className="text-h6 font-h6">Resume</h6>
          </Link>
          <Link href="/contact">
            <h6 className="text-h6 font-h6">Contact Me</h6>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
