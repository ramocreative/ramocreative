"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (resolvedTheme === "dark" && mounted) {
    return (
      <button
        className="cursor-pointer bg-white p-3 rounded-full *:hover:-rotate-[15deg]"
        onClick={() => setTheme("light")}
      >
        <RiMoonLine
          className="dark:text-black transition-transform duration-600"
          size={18}
        />
      </button>
    );
  }
  if (resolvedTheme === "light" && mounted) {
    return (
      <button
        className="cursor-pointer bg-black p-3 rounded-full *:hover:-rotate-[15deg]"
        onClick={() => setTheme("dark")}
      >
        <RiSunLine
          className="text-white transition-transform duration-600"
          size={18}
        />
      </button>
    );
  }
}
