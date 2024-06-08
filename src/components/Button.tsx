"use client";

import { RiArrowRightLine } from "@remixicon/react";
import { useState } from "react";

export default function Button({ title }: { title: string }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="max-sm:w-full text-button tracking-button font-medium inline-flex w-max h-12 animate-shimmer items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#000000,45%,#1e1e1e,55%,#000000)] bg-[length:200%_100%] px-6 text-white transition-colors"
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <RiArrowRightLine
        size={18}
        className={`transition-all duration-500 ${
          hover ? "w-[20px] translate-x-0 mr-2" : "w-0 translate-x-[50%]"
        }`}
      />
      {title}
    </button>
  );
}
