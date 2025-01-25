import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import ConsumptionChart from './ConsumedChart'

const Consumption = () => {
  return (
    <div className="container mx-10 px-8 py-6 mt-28">
        
        {/* Header Section */}
        <div className="flex flex-row">
            <div className="rounded-full bg-[#AAC638] pt-4 pb-4 pl-5 pr-5 mr-5 transform hover:scale-105 transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHourglass} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-white">Power Consuption</h1>
                <h1 className="text-gray-300">Overview</h1>
            </div>
        </div>
        
        <hr className="mt-8 mb-8 border-gray-300" />

        <div className='flex flex-row gap-8'>
            <div className='w-1/3 flex flex-col'>
                <div className="bg-[#1a1a2e] bg-opacity-60 rounded-3xl shadow-md p-4 transform hover:scale-105 transition duration-300 ease-in-out flex flex-row  items-center ">
                    <h2 className="text-white text-lg mr-10 ml-8">Energy Consumed</h2>
                    <p className="text-5xl font-thin text-white text-center mt-4 mb-4">
                        10 <span className="text-4xl font-thin text-[#AAC638]">kWh</span>
                    </p>
                </div>
                <hr className='my-10 border-gray-300'></hr>
                <div className='items-center justify-around mt-2'>
                    <p className='text-gray-300'>
                    This chart tracks the energy consumed during the same period, helping identify
                    efficiency and energy-saving opportunities.
                    </p>
                </div>
            </div>
            <div className='w-2/3'>
                <ConsumptionChart/>
            </div>
        </div>

    </div>
  )
}

export default Consumption
