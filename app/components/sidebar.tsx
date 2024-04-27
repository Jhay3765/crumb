import React from "react";
import Link from "next/link";

import { Pencil, CalendarRange } from "lucide-react";
import { Ghost, Cookie, Home } from "lucide-react";

import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="playfair hidden lg:block border-r shadow-md sticky h-screen top-0 left-0">
      <div className="flex flex-col justify-between  h-full  ">
        <ul className="flex flex-col  text-left mx-4 ">
          <Link
            href={"/dashboard"}
            className="px-24 py-4 playfair flex gap-1 items-center hover:text-amber-500 transition-all duration-500 text-2xl font-bold "
          >
            <Cookie /> <p>CB</p>
          </Link>
          {/* <div className="flex justify-end gap-1">
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Folder size={18} className="" />
            </div>
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Settings size={18} />
            </div>
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Plus size={18} />
            </div>
          </div> */}
          <Link
            className="px-4 border bg-stone-100 dark:bg-stone-900 rounded-md gap-6 mb-4 items-center font-light  py-2 dark:hover:bg-zinc-800 hover:bg-zinc-100  flex  "
            href={"/dashboard"}
          >
            <Home size={16} className="" />
            <p>Home</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-6 mb-4 py-2 dark:hover:bg-zinc-800 hover:bg-zinc-100 flex  "
            href={"/events"}
          >
            <CalendarRange size={18} className="" />
            <p>Events</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-6  mb-4 font-light items-center   py-2 dark:hover:bg-zinc-800 hover:bg-zinc-100 flex  "
            href={"/weekly"}
          >
            <CalendarClock size={16} className="" />
            <p>Weekly</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-6 font-light mb-4 text-base  items-center  py-2 dark:hover:bg-zinc-800 hover:bg-zinc-100 flex  "
            href={"/tasks"}
          >
            <Pencil size={16} className="" />
            <p>Tasks</p>
          </Link>
        </ul>
        <Button className="m-4" variant={"secondary"}>
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
