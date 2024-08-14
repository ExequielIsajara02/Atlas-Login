import React, { useEffect, useState } from "react";
import crombie_logo from "../assets/img/crombie_logo.png";


const NavBar = () => {
  const [mode, setMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (mode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [mode]);

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <nav
      className="bg-[#323232]
    flex items-center space-x-80 max-md:flex-col py-6 border-4 border-gray-500 border-x-0 border-t-0"
    >
      <div className="flex justify-center items-center ml-40">
        <h1 className="text-white text-[28px] font-bold text-shadow shadow-slate-900 mr-2">
          Atlas
        </h1>
        <img src={crombie_logo} alt="" className="w-6 text-center pt-1" />
        <h2 className="w-[40px] text-[16px] max-md:w-full font-bold text-white pt-2">
          Crombie
        </h2>
      </div>
      <div className="flex justify-end items-center w-3/4 text-right text-sm">
        <button
          href="www.youtube.com"
          className="h-10 px-4 py-[2px] mr-20 text-[12px] font-bold rounded-full bg-white hover:bg-slate-900 dark:bg-white dark:text-black"
          onClick={handleMode}
        >
          {mode === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
