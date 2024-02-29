'use client';

import NavBar from "@/components/NavBar";
import ThemeSwitch from "@/components/ThemeSwitch";
import MainForm from "@/components/MainForm";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row items-center justify-between pt-5 pr-5">
        <NavBar />
        <ThemeSwitch />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <MainForm />
      </div>
    </div>
  );
}