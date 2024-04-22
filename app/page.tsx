import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Sidebar from "./components/sidebar";
import { Input } from "@/components/ui/input";
import Content from "./components/content";
import NavBar from "./components/nav-bar";
export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <NavBar />
        <Content />
      </div>
    </main>
  );
}
