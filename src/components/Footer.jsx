import React from "react";
import crombie_logo2 from "../assets/img/crombie_logo2.png";
import { LuYoutube } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { PiWhatsappLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className=" grid grid-cols-3 pt-10">
      <div className="">
        <h2 className="text-left w-[380px] mx-auto p-[2px] text-white">
          Contact us
        </h2>
        <ul className="flex justify-start ml-10">
          <li className="bg-yellow-600 text-center w-8 h-8 rounded-full p-1">
            <LuYoutube className="w-full h-full"/>
          </li>
          <li className="bg-yellow-600 text-center w-8 h-8 rounded-full p-1">
            <FiLinkedin className="w-full h-full"/>
          </li>
          <li className="bg-yellow-600 text-center w-8 h-8 rounded-full p-1">
            <FaInstagram  className="w-full h-full"/>
          </li>
          <li className="bg-yellow-600 text-center w-8 h-8 rounded-full p-1">
            <RiTiktokLine  className="w-full h-full"/>
          </li>
          <li className="bg-yellow-600 text-center w-8 h-8 rounded-full p-1">
            <PiWhatsappLogoLight  className="w-full h-full"/>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-8 text-center rounded-lg"
          src={crombie_logo2}
          alt=""
        />
        <h2 className="text-[20px] dark:text-white">Crombie</h2>
      </div>
      <div className="flex justify-center items-end">
        <button className="border border-black rounded-full w-30 px-4 py-1 bg-yellow-600 hover:bg-slate-700 text-black hover:text-white dark:border-slate-700 dark:text-white">
          People-Force →
        </button>
      </div>
    </footer>
  );
};

export default Footer;
