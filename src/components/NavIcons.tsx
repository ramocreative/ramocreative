"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { RiMailSendLine } from "@remixicon/react";

export function NavIcons() {
  return (
    <div className="flex max-xl:hidden items-center gap-6">
      <ThemeSwitch />
      <Link href="mailto:contact@ramocreative.com">
        <button className="bg-black dark:bg-white p-3 rounded-full *:hover:translate-x-1">
          <RiMailSendLine
            className="text-white dark:text-black transition-transform duration-600"
            size={18}
          />
        </button>
      </Link>
    </div>
  );
}

export function NavIconsSmall() {
  return (
    <div className="flex xl:hidden items-center gap-6">
      <ThemeSwitch />
      <Link href="mailto:contact@ramocreative.com">
        <button className="bg-black dark:bg-white p-3 rounded-full *:hover:translate-x-1">
          <RiMailSendLine
            className="text-white dark:text-black transition-transform duration-600"
            size={18}
          />
        </button>
      </Link>
    </div>
  );
}
