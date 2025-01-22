import React from 'react';
import Header from './Header';
import { FaFire } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa6";
import leafImage from '../assets/images/leaf.png'
import Footer from './Footer';


const UserDashboard = () => {
    return (
        <div className="dashboard">
            <Header />

            <div className="pt-6 text-4xl font-bold mb-2 text-center relative">
                <p>Welcome Dave, Let's make <span className='relative text-green-600 inline-block'>green
                    <span className='absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center rotate-45'
                        style={{
                            backgroundImage: `url(${leafImage})`,
                            width: '100%',
                            height: '100%',
                            top: '-10px',
                            left: '0',
                            opacity: '0.7'

                        }}
                    ></span>
                    </span> today</p>
            </div>

            <section className="p-3 pt-6 grid grid-cols-3 gap-6 mb-8">


                <div className="p-6 border rounded-lg text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <FaFire className="text-5xl" />
                        <h2 className="text-2xl font-bold mb-2">12 Day Streak</h2>
                    </div>
                </div>

                <div className="p-6 border rounded-lg text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <AiFillThunderbolt className='text-5xl' />
                        <h2 className="text-2xl font-bold mb-2">565 Total Rewards</h2>
                    </div>
                </div>

                <div className="p-6 border rounded-lg text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <FaRupeeSign className='text-5xl'/>
                        <h2 className="text-2xl font-bold mb-2">100K Total Income</h2>
                    </div>
                </div>
            </section>

            <section className="p-3 grid grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Your Progress</h2>
                    {/* Add progress tracking logic or visual */}
                </div>
                <div className="p-6 border rounded-lg">
                    <h2 className="text-xl font-bold mb-4">How you can Earn rewards for Recycling</h2>
                    {/* Add content for recycling rewards */}
                </div>
            </section>

            <section className="mx-3 mt-8 p-6 border rounded-lg">
                <h2 className="text-xl font-bold mb-4">Recycle Achievements</h2>
                <div className="flex space-x-6">
                    <div className="text-center">
                        <div className="p-6 border rounded-full w-24 h-24 flex items-center justify-center">
                            <i className="text-2xl">🖥️</i> 
                        </div>
                        <p className="mt-2">20</p>
                    </div>
                    <div className="text-center">
                        <div className="p-6 border rounded-full w-24 h-24 flex items-center justify-center">
                            <i className="text-2xl">📱</i> 
                        </div>
                        <p className="mt-2">20</p>
                    </div>
                    <div className="text-center">
                        <div className="p-6 border rounded-full w-24 h-24 flex items-center justify-center">
                            <i className="text-2xl">💡</i> 
                        </div>
                        <p className="mt-2">20</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default UserDashboard;
