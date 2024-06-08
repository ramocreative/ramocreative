"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavIconsSmall } from "./NavIcons";

export default function Menu() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer z-10 hidden max-xl:flex flex-col gap-[5px] ml-14 max-xl:ml-auto"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={`w-[11px] h-[2px] bg-black dark:bg-white transition-all duration-[300ms] ${
            open ? "w-[18px] ml-[0px] translate-y-[7px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`w-[18px] h-[2px] bg-black dark:bg-white transition-all duration-[300ms] ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-[11px] h-[2px] bg-black dark:bg-white mr-auto transition-all duration-[300ms] ${
            open ? "w-[18px] ml-[0px] translate-y-[-7px] -rotate-45" : ""
          }`}
        ></span>
      </button>
      <nav
        className={`fixed top-[-100%] left-0 w-full h-full bg-white dark:bg-[#121212] xl:hidden flex gap-14 flex-col items-center justify-center text-2xl text-center transition duration-500 ${
          open ? "!top-0" : ""
        } `}
      >
        <ul className="text-body2 tracking-body2 flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`${
                  isActive ? "text-black dark:text-white !font-extrabold" : ""
                } font-medium`}
                onClick={() => setOpen(false)}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <NavIconsSmall />
      </nav>
    </>
  );
}
