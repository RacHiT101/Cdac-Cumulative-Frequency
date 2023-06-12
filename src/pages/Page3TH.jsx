import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Page3TH() {
  

  const [field, setField] = useState([
    { name: "10", field: ""},
    { name: "20", field: "" },
    { name: "30", field: "" },
    { name: "40", field: ""},
    { name: "50", field: "" },
  ]);
  

  return (
    <>
      <div className="w-max mt-5 mx-auto font-poppins text-[#000000] border-blue-200 border-4 p-5 rounded-2xl">
        <div className="flex ">
          <div>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <div className=" bg-[#BFACE2] shadow-md shadow-slate-600 w-max mx-auto rounded-3xl">
                  <div className="grid grid-cols-4 justify-items-center text-xl lg:text-2xl w-[30vw]">
                    <div className="lg:text-lg text-lg font-semibold py-5">
                      Marks
                    </div>
                    <div className="lg:text-lg text-lg font-semibold py-5">
                      Frequency
                    </div>
                    <div className="lg:text-lg text-lg font-semibold py-5">
                      More than a type
                    </div>
                    <div className="lg:text-lg text-lg font-semibold py-5">
                      Cumulative Frequency
                    </div>
                    <div className="text-lg pb-1"> 0 - 10 </div>
                    <div className="text-lg pb-1">
                      {!props.quantity && props.quantity}
                    </div>
                    <div className="text-base pb-4"> MORE THAN 0</div>
                    <input
                      className="w-12 mb-2 rounded text-xl text-right font-medium"
                      type="number"
                      value={field[0].field}
                      onChange={(event) =>
                        setField((prevState) => [
                          { ...prevState[0], field: event.target.value },
                          ...prevState.slice(1),
                        ])
                      }
                    />

                    <div className="text-lg pb-1"> 10 - 20 </div>
                    <div className="text-lg pb-1"> 3 </div>
                    <div className="text-base pb-4"> MORE THAN 10</div>
                    <input
                      className="w-12 mb-2 rounded text-xl text-right font-medium"
                      type="number"
                      value={field[1].field}
                      onChange={(event) =>
                        setField((prevState) => [
                          ...prevState.slice(0, 1),
                          { ...prevState[1], field: event.target.value },
                          ...prevState.slice(2),
                        ])
                      }
                    />

                    <div className="text-lg pb-1"> 20 - 30 </div>
                    <div className="text-lg pb-1"> 8 </div>
                    <div className="text-base pb-4"> MORE THAN 20</div>
                    <input
                      className="w-12 mb-2 rounded text-xl text-right font-medium"
                      type="number"
                      value={field[2].field}
                      onChange={(event) =>
                        setField((prevState) => [
                          ...prevState.slice(0, 2),
                          { ...prevState[2], field: event.target.value },
                          ...prevState.slice(3),
                        ])
                      }
                    />
                    <div className="text-lg pb-1"> 30 - 40 </div>
                    <div className="text-lg pb-1"> 7 </div>
                    <div className="text-base pb-4"> MORE THAN 30</div>
                    <input
                      className="w-12 mb-2 rounded text-xl text-right font-medium"
                      type="number"
                      value={field[3].field}
                      onChange={(event) =>
                        setField((prevState) => [
                          ...prevState.slice(0, 3),
                          { ...prevState[3], field: event.target.value },
                          ...prevState.slice(4),
                        ])
                      }
                    />
                    <div className="text-lg pb-1"> 40 - 50 </div>
                    <div className="text-lg pb-1"> 5 </div>
                    <div className="text-base pb-4"> MORE THAN 40</div>
                    <input
                      className="w-12 mb-2 rounded text-xl text-right font-medium"
                      type="number"
                      value={field[4].field}
                      onChange={(event) =>
                        setField((prevState) => [
                          ...prevState.slice(0, 4),
                          { ...prevState[4], field: event.target.value },
                        ])
                      }
                    />
                  </div>
                </div>
                <div className=" flex   bg-[#BFDCE5]  shadow-md shadow-slate-600 h-40 justify-center items-center mt-2 w-[30vw] rounded-3xl">
                  <p className="text-3xl text-gray-400 ">INSTRUCTIONS</p>
                </div>
              </div>
              <div className=" bg-[#BFDCE5] shadow-md shadow-slate-600  rounded-3xl  w-[30vw]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={600}
                    height={100}
                    data={field}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="field" stroke="#8884d8" />
                    {/* <Line type="monotone" dataKey="field2" stroke="#8884d8" />
                    <Line type="monotone" dataKey="field3" stroke="#8884d8" />
                    <Line type="monotone" dataKey="field4" stroke="#8884d8" />
                    <Line type="monotone" dataKey="field5" stroke="#8884d8" /> */}

                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Page3TH;