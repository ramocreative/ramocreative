import { RiFlashlightLine, RiZzzLine } from "@remixicon/react";
import { format } from "date-fns";

const current: Date = new Date();
const weekDays: string = format(current, "EEE");
const hour: string = format(current, "H");

export default function WorkDays() {
  return (
    <div>
      {weekDays !== "Fri" ? (
        <div className="max-xl:hidden text-body1 tracking-body1 leading-[0px] font-medium px-6 py-3 rounded-full bg-[linear-gradient(110deg,#01CB30,#22FC58,#01CB30)] bg-[length:200%_100%] text-[#015113] flex items-center gap-2">
          <RiFlashlightLine size={18} /> {weekDays} - Work Day
        </div>
      ) : (
        <div className="max-xl:hidden text-body1 tracking-body1 leading-[0px] font-medium px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500 flex items-center gap-2">
          <RiZzzLine size={18} /> {weekDays} - Off Day
        </div>
      )}
    </div>
  );
}
