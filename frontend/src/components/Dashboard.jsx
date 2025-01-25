import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import back6 from '../assets/images/echotrackImg/back6.png'

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-10 px-8 py-6 mt-20 bg-black">
      {/* Header Section */}
      <div className="flex flex-row">
        <div className="rounded-full bg-[#AAC638] pt-4 pb-4 pl-5 pr-5 mr-5 transform hover:scale-105 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Solar Panel</h1>
          <h1 className="text-gray-300">Overview</h1>
        </div>
      </div>

      <hr className="mt-8 mb-8 border-gray-300" />

      {/* Welcome Section */}
      <div className="flex flex-row justify-between items-center mb-2">
        {/* Left Side: Name */}
        <div className="text-left">
          <h1 className="text-6xl text-[#AAC638]">
            Hi, <span className="text-gray-100 text-4xl">Andrew Garfield</span>
          </h1>
        </div>

        {/* Right Side: Real-time Date and Time */}
        <div className="text-right text-gray-100">
          <div className="text-xl">{currentDateTime.toLocaleDateString()}</div>
          <div className="text-5xl">{currentDateTime.toLocaleTimeString()}</div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-row gap-8 mt-8 ">
        <div className="grid grid-row-3 gap-4 w-1/2  pr-8">
          <div className="flex flex-row gap-4">
            <div className="bg-[#1a1a2e] bg-opacity-60 rounded-3xl shadow-md p-4 transform hover:scale-105 transition duration-300 ease-in-out flex flex-row  items-center ">
              <h2 className="text-gray-100 text-lg mr-20">Energy Generated</h2>
              <p className="text-5xl font-thin text-white text-center mt-4 mb-4">
                40 <span className="text-4xl font-thin text-[#AAC638]">kWh</span>
              </p>
            </div>
            <div className="bg-[#1a1a2e] bg-opacity-60  rounded-3xl shadow-md p-4 transform hover:scale-105 transition duration-300 ease-in-out flex flex-row items-center ">
              <h2 className="text-gray-100 text-lg mr-20">Energy Consumed</h2>
              <p className="text-5xl font-thin text-white text-center mt-4 mb-4">
                10 <span className="text-4xl font-thin text-[#AAC638]">kWh</span>
              </p>
            </div>
          </div>
          <div className="bg-[#1a1a2e] bg-opacity-60 rounded-3xl shadow-md   p-4 transform hover:scale-105 transition duration-300 ease-in-out  flex flex-row items-center justify-center">
            <h2 className="text-white text-lg mr-10">Cost Savings</h2>
            <p className="text-5xl font-thin text-white text-center mt-4 mb-4">
              110<span className="text-4xl font-thin text-[#AAC638]"> $</span>
            </p>
          </div>
        </div>

        {/* Solar Panel View */}
        <div className="flex bg-[#1a1a2e] bg-opacity-60 shadow-md rounded-2xl p-6 transform hover:scale-105 transition duration-300 ease-in-out h-auto w-1/2">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={back6}
              alt="Solar Panel"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* Details Section */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <h2 className="text-gray-100 text-xl font-thin"><span className="text-3xl text-[#AAC638]">Garden</span> Solar Panel</h2>
            <hr className="my-4 mr-5"></hr>
            <p className="text-gray-100 mt-2 text-lg">Battery Health</p>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faBatteryThreeQuarters} className="text-white"/>
              <p className="text-6xl font-thin text-white">
                78<span className="text-4xl">%</span>
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-5">
                <button className="bg-[#AAC638] rounded-2xl px-3 py-2 text-black ransform hover:scale-105 transition duration-300 ease-in-out">Update</button>
                <button className="bg-white rounded-2xl px-3 py-2 text-black ransform hover:scale-105 transition duration-300 ease-in-out">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center"> 
        <ul className=" pl-5 space-y-2 mt-8">
          <li className="text-gray-500">The energy generated by solar panels (kWh) and the energy consumed from the electricity grid (kWh) are measured and tracked.</li>
        </ul>
      </div>

      
    </div>
  );
};

export default Dashboard;
