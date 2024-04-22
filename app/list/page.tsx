import React from "react";
import NavBar from "../components/nav-bar";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
export default function page() {
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
