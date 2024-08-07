import React from "react";
import crombie_logo2 from "../assets/img/crombie_logo2.png";

const Footer = () => {
  return (
    <footer className="border border-t-black grid grid-cols-3 mt-80 pt-10 pb-8">
      <div>
        <h2 className="text-left w-[380px] mx-auto p-[2px]">Contact us</h2>
        <input type="text" className="border border-b-black outline-none mr-4" placeholder="Your name"/>
        <input type="text" className="border border-b-black outline-none" placeholder="your@email.com"/>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-8 text-center" src={crombie_logo2} alt=""/>
        <h2 className="text-[20px]">Crombie</h2>
      </div>
      <div className="flex justify-center items-end">
        <button className="border border-black rounded-full w-30 px-4 py-1 hover:bg-yellow-500">People→</button>
      </div>
    </footer>
  );
};

export default Footer;
