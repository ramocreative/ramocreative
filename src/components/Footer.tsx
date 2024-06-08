import {
  RiBehanceLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "@remixicon/react";
import { format } from "date-fns";

const currentDate: Date = new Date();
const formattedDate: string = format(currentDate, "yyyy");

const socialIcons = [
  { id: 1, src: <RiInstagramLine size={18} /> },
  { id: 2, src: <RiTwitterXLine size={18} /> },
  { id: 3, src: <RiBehanceLine size={18} /> },
  { id: 4, src: <RiLinkedinLine size={18} /> },
];

export default function Footer() {
  return (
    <footer className="w-full flex max-sm:flex-col max-sm:gap-4 justify-between items-center px-8 lg:px-20 py-8 z-50">
      <div className="flex gap-4">
        <ul className="flex gap-2">
          {socialIcons.map((icon) => (
            <li key={icon.id} className="cursor-pointer p-2">
              {icon.src}
            </li>
          ))}
        </ul>
      </div>
      <small>Ramo Creative &copy;{formattedDate}. All rights reserved</small>
    </footer>
  );
}
