import React from "react";
import crombie_logo2 from "../assets/img/crombie_logo2.png";
import { LuYoutube } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { PiWhatsappLogoLight } from "react-icons/pi";
import logo_white from "../assets/img/logo_crombie_white.png"

const Footer = () => {
  return (
    <footer className=" grid grid-cols-3 pt-24">
      <div className="mt-2">
        <h2 className="text-left w-[380px] ml-10 p-[2px] text-white">
          Contact us
        </h2>
        <ul className="flex justify-start ml-10 space-x-1 mt-1">
          <li className="bg-white hover:bg-red-600 text-center w-8 h-8 rounded-full p-1 cursor-pointer">
            <LuYoutube className="w-full h-full"/>
          </li>
          <li className="bg-white hover:bg-[#25B2E2] text-center w-8 h-8 rounded-full p-1 cursor-pointer">
            <FiLinkedin className="w-full h-full"/>
          </li>
          <li className="bg-white hover:bg-orange-500 text-center w-8 h-8 rounded-full p-1 cursor-pointer">
            <FaInstagram  className="w-full h-full"/>
          </li>
          <li className="bg-white hover:bg-[#80319B] text-center w-8 h-8 rounded-full p-1 cursor-pointer">
            <RiTiktokLine  className="w-full h-full"/>
          </li>
          <li className="bg-white hover:bg-[#1BB55F] text-center w-8 h-8 rounded-full p-1 cursor-pointer">
            <PiWhatsappLogoLight  className="w-full h-full"/>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-12">
        <img
          className="w-6"
          src={logo_white}
          alt=""
        />
        <h2 className="text-[16px] ml-2 text-white dark:text-white">Crombie</h2>
      </div>
      <div className="flex justify-end items-end mr-10 mt-14">
        <button className="text-[12px] border border-black rounded-full w-30 px-4 py-1 bg-yellow-600 hover:bg-slate-700 text-black hover:text-white dark:border-slate-700 dark:text-white">
          People-Force →
        </button>
      </div>
    </footer>
  );
};

export default Footer;
