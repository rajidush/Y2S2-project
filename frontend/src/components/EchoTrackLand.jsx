import React from 'react';
import Navbar  from './Navbar';
import backImg from '../assets/images/echotrackImg/EchoTrackLand4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight,faTentArrowsDown,faMoneyCheckDollar,faChartSimple,faGrip,faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; 
import step1 from '../assets/images/echotrackImg/step1.png'
import step2 from '../assets/images/echotrackImg/step2.png'
import step3 from '../assets/images/echotrackImg/step3.png'
import step4 from '../assets/images/echotrackImg/step4.png'
import Footer from './Footer'
import  { useState } from 'react';
import intro from '../assets/Videos/luminaIntro.mp4'



// faq toggling funtions
const EchoTrackLand = () => {

  // State for toggling each FAQ
    const [openFAQs, setOpenFAQs] = useState([false, false, false]); 

    const toggleAnswer = (index) => {
    const updatedFAQs = [...openFAQs];
    updatedFAQs[index] = !updatedFAQs[index];
    setOpenFAQs(updatedFAQs);

    };


    return (
        <div className='bg-black'>

        {/* import navbar */}
        <Navbar  />

        <div className='pt-20'>

        {/* Header */}
        <section className="bg-hero bg-cover bg-center bg-no-repeat bg-customGreen h-[60vh] mb-4 "
        style={{ backgroundImage: `url(${backImg})` }}>

            <div className='text-center text-gray-400 flex flex-row justify-center pt-2 items-center'>
                <p>Already Checked? Access your solarpanel </p>

                <Link to="/eco-track" >
                    <button class="relative overflow-hidden h-8 px-6 rounded-full bg-[#AAC638] text-black border-none cursor-pointer group hover:text-black ml-5">
                        <span class="relative z-10">Dashboard <FontAwesomeIcon icon={faAnglesRight} /></span>
                        <span class="absolute inset-0 scale-x-0 origin-left bg-gradient-to-r from-white to-white rounded-full transition-transform duration-500 group-hover:scale-x-100 "></span>
                    </button>
                </Link>
            </div>

            <div className='mx-40 mt-32'>
                <h1 className='text-white text-5xl'>Empower Your <span className='text-7xl'>Echo</span></h1>
                <h1 className='text-[#AAC638] text-6xl'>Track Your Savings</h1>
                <h1 className='text-[#AAC638] text-6xl mb-8'> in Real-Time!</h1>

                <Link to="/eco-trackForm" className="h-[86px] bg-gray-800 hover:bg-gray-700 text-white px-4 py-4 my-4 rounded-lg text-center text-sm">
                    Let's start <FontAwesomeIcon icon={faAnglesRight } className="ml-2" />
                </Link>
            </div>
        </section>

        <hr className=" border-gray-700 mx-40" />

        {/* card section 1 */}
        <div className='mx-60 flex flex-row gap-10  mb-20 items-center  '>

            {/* Card 1 */}
            <div class="flex flex-col bg-transparent border-spacing-11 border-l-white w-60 h-60 ransition-all duration-300 hover:-translate-y-1">
                <div class="px-6 py-8 sm:p-10 sm:pb-6 z-50">
                    <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                        <div>
                            <FontAwesomeIcon icon={faTentArrowsDown} className='size-8 text-gray-200' />
                        </div>
                        <div class="mt-6">
                            <p>
                                <span class="text-2xl font-bold tracking-tight text-gray-200 ">
                                Real-Time
                                </span>
                            </p>
                            <span class="text-base font-medium text-gray-400"> Monitoring </span>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Divider */}
            <div className="h-30 w-[1px] bg-gray-700 flex items-center justify-center py-10"></div>

            {/* Card 2 */}
            <div class="flex flex-col bg-transparent rounded-3xl w-60 h-60 ransition-all duration-300 hover:-translate-y-1">
                <div class="px-6 py-8 sm:p-10 sm:pb-6">
                    <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                        <div>
                            <FontAwesomeIcon icon={faMoneyCheckDollar} className='size-8 text-gray-200' />
                        </div>
                        <div class="mt-6">
                            <p>
                                <span class="text-2xl font-bold tracking-tight text-gray-200">
                                Savings
                                </span>
                            </p>
                            <span class="text-base font-medium text-gray-400"> Analysis </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-30 w-[1px] bg-gray-700 flex items-center justify-center py-10"></div>

            {/* Card 3 */}
            <div class="flex flex-col bg-transparent rounded-3xl w-60 h-60 ransition-all duration-300 hover:-translate-y-1">
                <div class="px-6 py-8 sm:p-10 sm:pb-6">
                    <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                        <div>
                                <FontAwesomeIcon icon={faChartSimple}  className='size-8 text-[#AAC638]' />
                        </div>
                        <div class="mt-6">
                            <p>
                            <span class="text-2xl font-bold tracking-tight text-[#AAC638]">
                            Customizable 
                            </span>
                            </p>
                            <span class="text-base font-medium text-[#AAC638]"> Charts </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-30 w-[1px] bg-gray-700 flex items-center justify-center py-10"></div>

        {/* Card 4 */}
        <div class="flex flex-col bg-transparent rounded-3xl w-60 h-60 ransition-all duration-300 hover:-translate-y-1">
            <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div><FontAwesomeIcon icon={faAnglesRight}  className='size-8 text-gray-200' />
                    </div>
                    <div class="mt-6">
                        <p>
                            <span class="text-2xl font-bold tracking-tight text-gray-200">Easy</span>
                        </p>
                        <span class="text-base font-medium text-gray-400"> Integration </span>
                    </div>
                </div>
            </div>
        </div>


        </div>

        {/* Steps section */}
        <div className="grid grid-cols-2 gap-4 p-4 mx-40">

            {/* step1 */}
            <div className="bg-transparent text-white p-4 flex items-center justify-center">
                <div><img  src={step1} className="w-full h-full object-cover rounded-t-xl mb-8" />
                </div>
                <div className='ml-10 text-gray-300 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur venenatis, erat id eleifend tristique, justo nulla fermentum nunc, vel fringilla nisi ex ac mauris. Vestibulum ante ipsum primis.
                    </p>
                    <Link to="/signup" >
                        <button className=' mt-4 py-2 px-10 bg-[#AAC638] rounded-lg text-black'>Sign up <FontAwesomeIcon icon={faAnglesRight} className='ml-2'/></button>
                    </Link>
                </div>
            </div>

            

            {/* step-2 */}
            <div className="bg-transparent text-white p-4 flex items-center justify-center">
            <div className=' text-gray-300 text-justify'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur venenatis, erat id eleifend tristique, justo nulla fermentum nunc, vel fringilla nisi ex ac mauris. Vestibulum ante ipsum primis.
                </p>
                <Link to="/eco-trackForm" >
                <button className=' mt-4 py-2 px-10 bg-[#AAC638] rounded-lg text-black'>Let's start<FontAwesomeIcon icon={faAnglesRight} className='ml-2'/></button>
                </Link>
            </div>
            <div>
                <img  src={step2} className="w-full h-full object-cover rounded-t-xl mb-8 ml-10" />
            </div>
            </div>

            {/* step-3 */}
            <div className="bg-transparent text-white p-4 flex items-center justify-center">
            <div>
                <img  src={step3} className="w-full h-full object-cover rounded-t-xl mb-8" />
            </div>
            <div className='ml-10 text-gray-300 text-justify'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur venenatis, erat id eleifend tristique, justo nulla fermentum nunc, vel fringilla nisi ex ac mauris. Vestibulum ante ipsum primis.
                </p>
                <Link to="/eco-track" >
                <button className=' mt-4 py-2 px-10 bg-[#AAC638] rounded-lg text-black'>Dashboard <FontAwesomeIcon icon={faAnglesRight} className='ml-2'/></button>
                </Link>
            </div>
            </div>

            {/* step-4 */}
            <div className="bg-transparent text-white p-4 flex items-center justify-start align-top">
            <div className=' text-gray-300 text-justify flex '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur venenatis, erat id eleifend tristique, justo nulla fermentum nunc, vel fringilla nisi ex ac mauris. Vestibulum ante ipsum primis.
                </p>
                
            </div>
            <div>
                <img  src={step4} className="w-full h-full object-cover rounded-t-xl mb-8 ml-10" />
            </div>
            </div>
        </div>

        {/* video */}
        <div className='w-fit m-40'>
            <video  autoPlay muted loop controls={false}>
                    <source src={intro} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </div>

        {/* FAQ Section */}
        <div className='text-center text-white flex flex-row mx-40 '>
            <div className='w-1/4 '>
                <h1 className='text-5xl'>Fa<span className='text-6xl'>Q</span></h1>
                <h2 className='text-gray-400 mt-4'>Your questions answered here</h2>
            </div>
            <div className='w-3/4 text-center'>
                <h1 className='text-left ml-4 text-3xl mb-10'><FontAwesomeIcon icon={faGrip} className='mr-2' />General Questions
                </h1>

        
            {/* FAQ Items */}
            {[
            "How does EchoTrack help monitor energy usage?",
            "Can EchoTrack calculate cost savings?",
            "What devices can I use to access EchoTrack?"
            ].map((question, index) => (
            <div className="p-4 rounded shadow-md mx-auto" key={index}>
                <div className="flex justify-between items-center">
                    <p className="font-medium text-lg">{question}</p>
                    <button onClick={() => toggleAnswer(index)} className="text-xl text-[#AAC638] focus:outline-none">
                    <FontAwesomeIcon icon={openFAQs[index] ? faMinus : faPlus} />
                    </button>
                </div>
                {openFAQs[index] && (
                    <p className="mt-2 text-gray-500 text-justify">
                    {/* Add dynamic answers here */}
                    {index === 0 && "EchoTrack uses input data such as solar energy production, consumption, and uptime to display real-time energy performance. This helps users track their energy patterns and identify ways to optimize energy efficiency."}
                    {index === 1 && "Yes, EchoTrack provides a cost savings analysis feature that calculates the financial benefits of using solar energy compared to traditional energy sources, helping users make informed decisions."}
                    {index === 2 && "EchoTrack is accessible via web browsers on desktops, laptops, tablets, and smartphones. The responsive design ensures that you get an optimized experience on any device."}
                    </p>
                )}
                <hr className="mt-5" />
            </div>
            ))}
            </div>
        </div>

        <hr className=" border-gray-700 mx-40 mt-16" />

        {/* import footer */}
        <Footer />
        </div>
    </div>
    );

};

export default EchoTrackLand;
