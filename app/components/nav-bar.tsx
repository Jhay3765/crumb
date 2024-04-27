"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Cookie, Menu } from "lucide-react";

import { ModeToggle } from "./toggle-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileBar from "./mobile-bar";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-4 sm:px-0  sticky top-0 dark:bg-zinc-950 bg-white shadow-sm items-center border-b  text-2xl py-3 w-full ">
        <Link
          href={"/dashboard"}
          className=" sm:hidden flex playfair gap-1 items-center hover:text-amber-500 transition-all duration-500 text-2xl font-bold "
        >
          <Cookie /> <p>CB</p>
        </Link>
        <section className="playfair font-light  sm:pl-8  hidden sm:block  ">
          Welcome User <span className="text-xs ml-4"> lawrenceville Ga</span>
        </section>
        <Menu onClick={() => setOpen(!open)} className="sm:hidden" />
        <section className="sm:flex hidden pr-16  gap-4 items-center">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Guide</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem className="dark:bg-zinc-900 bg-zinc-100 py-1 ">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </nav>
      {open && <MobileBar setOpen={setOpen} />}
    </>
  );
}
