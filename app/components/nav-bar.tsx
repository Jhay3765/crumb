import React from "react";
import { ModeToggle } from "./toggle-theme";
import { User } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex justify-between px-8 items-center border-b border-b-zinc-700 text-2xl py-4 w-full ">
      <section className="playfair">Welcome BabyGirl</section>
      <section className="flex  gap-4 items-center">
        <ModeToggle />
        <User />
      </section>
    </nav>
  );
}
