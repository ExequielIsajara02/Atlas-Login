import React from "react";
import crombie_logo2 from "../assets/img/crombie_logo2.png";

const Footer = () => {
  return (
    <footer className="border border-t-black border-l-0 border-r-0 grid grid-cols-3 mt-72 pt-10 pb-8 dark:border-slate-700">
      <div className="">
        <h2 className="text-left w-[380px] mx-auto p-[2px] dark:text-white">Contact us</h2>
        <input type="text" className="border border-b-black outline-none mr-4 ml-2 bg-inherit dark:border-slate-700 dark:text-white shadow-sm shadow-slate-700 rounded-sm pl-[5px]" placeholder="Your name"/>
        <input type="text" className="border border-b-black outline-none bg-inherit dark:border-slate-700 dark:text-white shadow-sm shadow-slate-700 rounded-sm pl-[5px] py-[1px]" placeholder="your@email.com"/>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-8 text-center rounded-lg" src={crombie_logo2} alt=""/>
        <h2 className="text-[20px] dark:text-white">Crombie</h2>
      </div>
      <div className="flex justify-center items-end">
        <button className="border border-black rounded-full w-30 px-4 py-1 hover:bg-slate-700 text-black hover:text-white dark:border-slate-700 dark:text-white">People→</button>
      </div>
    </footer>
  );
};

export default Footer;
