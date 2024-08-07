import React from "react";


const Bars = () => {
  return (
    <section className="mt-20 w-[600px]">
      <div className="w-full mb-4">
        <span className="h-10 bg-red-500 w-[350px] inline-block mr-4 rounded-full"></span>
        <span className="h-10 bg-yellow-500 w-[100px] inline-block ml-4 rounded-full"></span>
      </div>
      <div className="w-full">
        <span className="h-10 bg-blue-500 w-[300px] inline-block mr-4 rounded-full"></span>
        <span className="h-10 bg-violet-500 w-[100px] inline-block rounded-full"></span>
      </div>
      <div className="w-full my-4">
        <span className="h-10 bg-yellow-500 w-[350px] inline-block rounded-full "></span>
        <span className="h-10 bg-green-500 w-[50px] inline-block rounded-full mr-14 ml-4"></span>
      </div>
      <div className="w-full">
        <span className="h-10 bg-violet-500 w-[450px] inline-block mr-4 rounded-full"></span>
      </div>
      <div className="w-full my-4">
        <span className="h-10 bg-green-500 w-[280px] inline-block rounded-full "></span>
        <span className="h-10 bg-red-500 w-[100px] inline-block rounded-full ml-4"></span>
        <span className="h-10 bg-red-500 w-[50px] inline-block rounded-full ml-4"></span>
      </div>
    </section>
  );
};

export default Bars;
