import React from "react";
import Link from "next/link";
import home from "/public/icons/home.svg";
import Image from "next/image";
import { File, Folder } from "lucide-react";
import { Ghost } from "lucide-react";
import { Calendar } from "lucide-react";
import { Plus } from "lucide-react";
import { Settings } from "lucide-react";
import { FolderPlus } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className=" border-r border-zinc-700">
      <div className="flex flex-col justify-between py-2 h-full ">
        <ul className="flex flex-col gap-6 text-left mx-4 ">
          <h1 className="px-16 py-4 playfair text-3xl">Crumb</h1>
          <div className="flex justify-end gap-1">
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Folder size={18} className="" />
            </div>
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Settings size={18} />
            </div>
            <div className="hover:bg-zinc-800 p-2 rounded-md">
              <Plus size={18} />
            </div>
          </div>
          <Link
            className="px-4 rounded-md gap-4  py-2 hover:bg-zinc-800 flex  "
            href={"/"}
          >
            <Ghost size={18} className="" />
            <p>Home</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-4  py-2 hover:bg-zinc-800 flex  "
            href={"/"}
          >
            <Calendar size={18} className="" />
            <p>Calender</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-4  py-2 hover:bg-zinc-800 flex  "
            href={"/"}
          >
            <File size={20} className="" />
            <p>List</p>
          </Link>
          <Link
            className="px-4 rounded-md gap-4  py-2 hover:bg-zinc-800 flex  "
            href={"/"}
          >
            <Ghost size={20} className="" />
            <p>Home</p>
          </Link>
        </ul>
        <button>Sign Out</button>
      </div>
    </aside>
  );
}
