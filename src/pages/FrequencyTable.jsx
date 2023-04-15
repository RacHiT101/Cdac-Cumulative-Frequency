import React, { useState } from "react";
import { motion } from "framer-motion";
import Balloon from "../components/Balloon";

const FrequencyTable = () => {

    

  const quantity = 0;
  const quantity4 = 0;
  const quantity3 = 0;
  const quantity1 = 0;
  const quantity2 = 0;
  return (
    <div className="flex justify-center gap-3 mt-10">
      <div className="bg-[#BFACE2] opacity-100 flex justify-center items-center h-[600px] shadow-md shadow-slate-600 w-[35vw] rounded-2xl">
        <Balloon/>
      </div>
      <div className="flex gap-3 flex-col">
        <div className=" bg-[#BFDCE5] h-full shadow-md shadow-slate-600 w-[25vw] rounded-xl pr-5">
          <div className="grid grid-cols-3 justify-items-center text-xl ">
            <div className="lg:text-2xl text-lg font-semibold py-5">Marks</div>
            <div className="lg:text-2xl text-lg font-semibold py-5 ">
              Frequency
            </div>
            <div className="lg:text-2xl text-lg font-semibold py-5 ">
              Increase
            </div>
            <div className="pb-4"> 0 - 10 </div>
            <div className="pb-4"> {quantity} </div>
            <button
              type="button"
              // onClick={handleIncrement}
              className=" input-group-text bg-white h-6 px-2  "
            >
              +
            </button>
            <div className="pb-4"> 10 - 20 </div>
            <div className="pb-4"> {quantity1} </div>
            <button
              type="button"
              // onClick={handleIncrement1}
              className="input-group-text bg-white h-6 px-2"
            >
              +
            </button>
            <div className="pb-4"> 20 - 30 </div>
            <div className="pb-4"> {quantity2} </div>
            <button
              type="button"
              // onClick={handleIncrement2}
              className="input-group-text bg-white h-6 px-2"
            >
              +
            </button>
            <div className="pb-4"> 30 - 40 </div>
            <div className="pb-4"> {quantity3} </div>
            <button
              type="button"
              // onClick={handleIncrement3}
              className="input-group-text bg-white h-6 px-2"
            >
              +
            </button>
            <div className="pb-4"> 40 - 50 </div>
            <div className="pb-4"> {quantity4} </div>
            <button
              type="button"
              // onClick={handleIncrement4}
              className="input-group-text bg-white h-6 px-2"
            >
              +
            </button>
          </div>
          <hr className="bg-black h-1 border-none mx-auto w-16" />
          {/* <div className="flex justify-center mt-3 text-xl">{Frequency}</div> */}
        </div>

        <div className="bg-[#BFACE2] shadow-md shadow-slate-600 h-52 flex items-center px-3 w-[25vw] rounded-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
      {/* <div className="bg-[#BFACE2] shadow-md shadow-slate-600 flex justify-center items-center px-3 w-[25vw] rounded-xl">
              
                <button className="bg-[#BFDCE5] px-5 rounded hover:opacity-80 py-1 text-xl">
                  Next
                </button>
              
            </div> */}
    </div>
  );
};

export default FrequencyTable;
