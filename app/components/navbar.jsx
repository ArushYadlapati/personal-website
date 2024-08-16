"use client"; // Mark this as a client component

import { useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
      <nav className="bg-transparent">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
              arushyadlapati.com
            </Link>
          </div>

          <ul
              className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
              id="navbar-default"
          >
            <li>
              <a
                  href="/#about"
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  onClick={(e) => handleScroll(e, "about")}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  ABOUT
                </div>
              </a>
            </li>
            <li>
              <a
                  href="/#experience"
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  onClick={(e) => handleScroll(e, "experience")}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  EXPERIENCE
                </div>
              </a>
            </li>
            <li>
              <a
                  href="/#skills"
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  onClick={(e) => handleScroll(e, "skills")}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  SKILLS
                </div>
              </a>
            </li>
            <li>
              <a
                  href="/#projects"
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  onClick={(e) => handleScroll(e, "projects")}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  PROJECTS
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
