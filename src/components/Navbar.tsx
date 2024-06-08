"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@/components/Menu";
import { NavIcons } from "./NavIcons";
import WorkDays from "./WorkDays";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <header className="relative w-full flex items-center px-8 lg:px-20 py-8 z-50">
      <span className="text-body1 tracking-body1 mr-24">
        &copy;Ramo Creative
      </span>
      <nav className="hidden xl:flex">
        <ul className="text-body2 tracking-body2 flex space-x-8 text-zinc-600 font-medium transition duration-20">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`${
                  isActive ? "text-black dark:text-white !font-extrabold" : ""
                } font-medium`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex gap-12 ml-auto">
        <WorkDays />
        <NavIcons />
      </div>
      <Menu />
    </header>
  );
}
