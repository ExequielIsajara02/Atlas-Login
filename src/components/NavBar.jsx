import React, { useEffect, useState } from "react";
import crombie_logo from "../assets/img/crombie_logo.png";

const NavBar = () => {
  const [mode, setMode] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    if (mode === "dark") {
      document.querySelector("html").classList.add("dark");
    }
    else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [mode]);

  const handleMode = () => {
    if(mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }

  return (
    <nav
      className="bg-slate-700
    flex items-center space-x-80 max-md:flex-col py-6"
    >
      <div className="flex justify-center items-center ml-40">
        <img src={crombie_logo} alt="" className="w-10 text-center" />
        <h1 className="w-[40px] text-[25px] max-md:w-full font-bold text-white">
          Crombie
        </h1>
      </div>
      <div className="flex justify-end items-center w-3/4 text-right text-sm">
        <button
          href="www.youtube.com"
          className="p-2 h-10 px-4 mr-20 rounded-full bg-black  text-white hover:bg-slate-900 dark:bg-white dark:text-black"
          onClick={handleMode}
        >
          {mode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
