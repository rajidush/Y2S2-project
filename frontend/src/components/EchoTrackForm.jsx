
import React from 'react'
import { Link } from 'react-router-dom'; 
import Navbar  from './Navbar';

const EchoTrackForm = () => {
  return (

    <div>
        <Navbar  />
        <div className='flex flex-row pt-24 bg-black px-40 h-screen'>

            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-white text-6xl'>EchoTrack </h1>
                <h1 className='text-white text-5xl'>Data Collection Form</h1>
                <p className='text-[#AAC638] text-xl'>Accurate Data for Smarter Solar Monitoring</p>
                

            </div>

            

            <div className='w-1/2'>

            <form className="w-full  mt-20 ">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Solar pannel ID
                    </label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Soalr Pannel Type
                    </label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                    placeholder=" "
                    required
                    />
                    <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    User Name
                    </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Generated Energy(kwh)
                    </label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="text"
                        name="floating_company"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                        placeholder=" "
                        
                    />
                    <label
                        htmlFor="floating_company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Consumed Energy(kwh)
                    </label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                    placeholder=" "
                    required
                    />
                    <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Battery Status(%)
                    </label>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-400 dark:focus:border-[#AAC638] focus:outline-none focus:ring-0 focus:border-[#AAC638] peer"
                    placeholder=" "
                    required
                    />
                    <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#AAC638] peer-focus:dark:text-[#AAC638] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Carbon Offset(kg)
                    </label>
                </div>

                

                <button
                    type="submit"
                    className="text-black font-bold bg-[#AAC638] hover:bg-[#AAC638] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-[#AAC638] dark:hover:bg-[#C2DA60] dark:focus:ring-blue-800"
                >
                Submit
                </button>

                

                
                </form>

            </div>

        </div>
    </div>
    )
}

export default EchoTrackForm