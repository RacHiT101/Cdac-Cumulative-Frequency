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
        <div className=" bg-[#BFDCE5] h-full shadow-md shadow-slate-600 w-[25vw] rounded-xl px-12">
          <div className=" text-xl ">
            <div className="flex justify-evenly mx-auto">
            <div className="lg:text-2xl text-lg font-semibold py-5">Value</div>
            <div className="lg:text-2xl text-lg font-semibold py-5 ">
              Frequency
            </div>
            <div className="lg:text-2xl text-lg font-semibold py-5 ">
              Increase
            </div>
            </div>
            <div className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center">
              <div className="text-2xl font-semibold"> 0 - 10 </div>
              <div className="text-2xl font-semibold"> {quantity} </div>
              <button
                type="button"
                // onClick={handleIncrement}
                className=" input-group-text bg-white h-8 rounded-sm  w-12"
              >
                +
              </button>
            </div>
            <div className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center">
              <div className="text-2xl font-semibold"> 10 - 20 </div>
              <div className="text-2xl font-semibold"> {quantity1} </div>
              <button
                type="button"
                // onClick={handleIncrement}
                className=" input-group-text bg-white h-8 rounded-sm  w-12"
              >
                +
              </button>
            </div>
            <div className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center">
              <div className="text-2xl font-semibold"> 20 - 30 </div>
              <div className="text-2xl font-semibold"> {quantity2} </div>
              <button
                type="button"
                // onClick={handleIncrement}
                className=" input-group-text bg-white h-8 rounded-sm  w-12"
              >
                +
              </button>
            </div>
            <div className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center">
              <div className="text-2xl font-semibold"> 30 - 40 </div>
              <div className="text-2xl font-semibold"> {quantity3} </div>
              <button
                type="button"
                // onClick={handleIncrement}
                className=" input-group-text bg-white h-8 rounded-sm  w-12"
              >
                +
              </button>
            </div>
            <div className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center">
              <div className="text-2xl font-semibold"> 40 - 50</div>
              <div className="text-2xl font-semibold"> {quantity4} </div>
              <button
                type="button"
                // onClick={handleIncrement}
                className=" input-group-text bg-white h-8 rounded-sm  w-12"
              >
                +
              </button>
            </div>
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
