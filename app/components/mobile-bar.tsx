"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
export default function MobileBar(props: any) {
  const closeMenu = () => {
    props.setOpen(false);
  };

  return (
    <div className="sm:hidden  absolute h-screen w-full top-0 bg-zinc-950 left-0 p-4">
      <section className="flex justify-end ">
        <X onClick={closeMenu} />
      </section>
      <ul className=" flex flex-col text-6xl gap-8 playfair font-bold">
        <Link
          onClick={closeMenu}
          className="hover:text-amber-600 transition-all duration-500 hover:tracking-tight"
          href={"/"}
        >
          Home
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:text-amber-600 transition-all duration-500 hover:tracking-tight"
          href={"/events"}
        >
          Events
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:text-amber-600 transition-all duration-500 hover:tracking-tight"
          href={"/tasks"}
        >
          Tasks
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:text-amber-600 transition-all duration-500 hover:tracking-tight"
          href={"/weekly"}
        >
          Weekly
        </Link>
      </ul>
    </div>
  );
}
