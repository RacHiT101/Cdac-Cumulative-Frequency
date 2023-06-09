import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Balloon from "../components/Balloon";
import { useDrop } from "react-dnd";
import Page3TH from "./Page3TH";

const FrequencyTable = () => {
  const [quantity, setQuantity] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const boxRef = useRef();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);
    setQuantity(10)
    const y = boxRef.current.offsetTop;
    setY(y);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);
  console.log(x);
  console.log(y);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  // const handleIncrement = () => {
  //   if (item > 0 && item <= 10) setQuantity(quantity + 1);
  // };

  return (
    <div className="flex flex-col gap-10">
      {/* <header className="text-blue text-center pt-5 -mb-12 font-extrabold text-5xl">CUMULATIVE FREQUENCY</header> */}
      <div className="flex justify-center gap-3 mt-10">
        <div className="bg-[#BFACE2] p-5 opacity-100 flex h-[650px] justify-center shadow-md shadow-slate-600 rounded-2xl">
          <Balloon className="" />
        </div>
        <div className="flex gap-3 flex-col h-[650px] ">
          <div className=" bg-[#BFDCE5] h-full shadow-md shadow-slate-600 rounded-xl px-12">
            <div className=" text-xl ">
              <div className="flex justify-evenly mx-auto">
                <div className="lg:text-2xl text-lg font-semibold py-5">
                  Value
                </div>
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
              <div
                className="flex py-4 justify-evenly shadow-2xl shadow-slate-600 rounded-lg my-5 items-center"
                ref={boxRef}
              >
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

          <div className="bg-[#BFACE2] shadow-md shadow-slate-600 h-52 flex items-center px-3 rounded-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        </div>
        {/* <div className="bg-[#BFACE2] shadow-md shadow-slate-600 flex justify-center items-center px-3 w-[25vw] rounded-xl">
              
                <button className="bg-[#BFDCE5] px-5 rounded hover:opacity-80 py-1 text-xl">
                  Next
                </button>
              
            </div> */}
      </div>
      {/* <Page3TH
        quantity={quantity}
        quantity1={quantity1}
        quantity2={quantity2}
        quantity3={quantity3}
        quantity4={quantity4}
        className=""
      /> */}
    </div>
  );
};

export default FrequencyTable;
