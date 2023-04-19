import React, { useState } from "react";
import { motion } from "framer-motion";
import Balloon from "../components/Balloon";
import {useDrop} from 'react-dnd';

const FrequencyTable = () => {
  const [quantity, setQuantity] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);

  const handleIncrement = () => {
    if(item>0 && item <=10 )
      setQuantity(quantity+1);
  }

  // const [{ canDrop, isOver }, drop] = useDrop(() => ({
  //   accept: "balloon",
  //   drop: (item) => {
  //     switch (item.value) {
  //       case 0:
  //       case 1:
  //       case 2:
  //       case 3:
  //       case 4:
  //       case 5:
  //       case 6:
  //       case 7:
  //       case 8:
  //       case 9:
  //       case 10:
  //         setQuantity(quantity + item.value);
  //         break;
  //       case 11:
  //       case 12:
  //       case 13:
  //       case 14:
  //       case 15:
  //       case 16:
  //       case 17:
  //       case 18:
  //       case 19:
  //       case 20:
  //         setQuantity1(quantity1 + item.value);
  //         break;
  //       case 21:
  //       case 22:
  //       case 23:
  //       case 24:
  //       case 25:
  //       case 26:
  //       case 27:
  //       case 28:
  //       case 29:
  //       case 30:
  //         setQuantity2(quantity2 + item.value);
  //         break;
  //       case 31:
  //       case 32:
  //       case 33:
  //       case 34:
  //       case 35:
  //       case 36:
  //       case 37:
  //       case 38:
  //       case 39:
  //       case 40:
  //         setQuantity3(quantity3 + item.value);
  //         break;
  //       case 41:
  //       case 42:
  //       case 43:
  //       case 44:
  //       case 45:
  //       case 46:
  //       case 47:
  //       case 48:
  //       case 49:
  //       case 50:
  //         setQuantity4(quantity4 + item.value);
  //         break;
  //       default:
  //         break;
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // }));


  return (
    <div className="flex justify-center gap-3 mt-10 h-max">
      <div className="bg-[#BFACE2] opacity-100 flex justify-center h-[600px] shadow-md shadow-slate-600 w-[35vw] rounded-2xl">
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
                onClick={handleIncrement}
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
