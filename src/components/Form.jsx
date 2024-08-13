import React from "react";
import google_logo from "../assets/img/google-logo.png";
import crombie_logo from "../assets/img/crombie_logo.png";
import door3_remove from "../assets/img/door3_remove.png";
import atlas1_remove from "../assets/img/atlas1_remove.png";
import laurel_remove2 from "../assets/img/laurel_remove2.png";
import atlas3 from "../assets/img/atlas3.png"
import atlas3_yellow from "../assets/img/atlas3-yellow.png"
import laurel_white from "../assets/img/laurel_white.png"
import Bars from "./Bars";

const Form = () => {
  return (
    <div className="flex justify-center items-center w-3/5 mx-auto space-x-10 mt-10">
      <div className="flex flex-col justify-center items-center mr-4">
        <img
          src={atlas3}
          className="w-[280px]"
          alt="atlas"
        />
        
      </div>
      <section className="w-1/2 flex flex-col justify-center items-center mx-auto ml-4 pt-4">
        <form className="w-full flex flex-col items-center mx-auto my-10">
          <h1 className="text-2xl text-white mb-2 animate-bounce">Welcome Back!</h1>
          <div className="w-9/12 flex justify-center items-center px-8 p-2 rounded-md mx-5 bg-white shadow shadow-slate-800 hover:bg-blue-500 cursor-pointer hover:text-white md:max-2xl:w-11/12 dark:bg-white dark:hover:bg-blue-500">
            <img src={google_logo} alt="" className="bg-white w-8 rounded-md mr-2" />
            <a href="www.google.com" className="font-bold">Sign In with Google</a>
          </div>
          <img src={laurel_remove2} alt="" className="h-20 mb-4 mt-2"/>
        </form>
      </section>
    </div>
  );
};

export default Form;
