import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between items-center text-white p-2  md:p-6">
      <span className="text-xl font-bold tracking-wide">
        Pratyush Srivastava
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#FFD700] ">
            Home
          </li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#FFD700] ">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#FFD700] ">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#FFD700] ">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#FFD700] ">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
