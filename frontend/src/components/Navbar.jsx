import React, { useState, useRef, useEffect } from 'react';

// Import Link from react-router-dom
import { Link } from 'react-router-dom';

// Import assets
import logo from '../assets/images/allImg/Lumina1.png';
import profileImage from '../assets/images/allImg/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

// Import components
import ProfileCard from './ProfileCard';
import Sidebar from './Sidebar';

const Navbar = () => {

    //funttions of the toggleDropdowns
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const profileDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);
    const toggleProfileDropdown = () => setIsProfileDropdownOpen((prevState) => !prevState);
    const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

    //funtion of Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            profileDropdownRef.current &&
            !profileDropdownRef.current.contains(event.target)
        ) {
            setIsProfileDropdownOpen(false);
        }

        if (
            servicesDropdownRef.current &&
            !servicesDropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-black w-full fixed z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

                {/* Logo */}
                <div className="flex items-center flex-1 md:ml-2">
                    <Link to="/" className="flex-shrink-0">
                    <img className="h-10 w-auto mx-auto md:mx-0" src={logo} alt="Logo" /></Link>
                </div>

                {/* Main Menu */}
                <div className="hidden md:flex space-x-4 items-center justify-center flex-1">
                    <Link
                    to="/"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-3xl text-sm font-medium md:text-xs lg:text-sm"
                    >
                    Home
                    </Link>

                    {/* Services dropdown menu */}
                    <div className="relative" ref={servicesDropdownRef}>
                    <button
                        className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-3xl text-sm font-medium flex items-center md:text-xs lg:text-sm"
                        onClick={toggleDropdown}
                    >
                        Services
                        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-5 w-72 bg-white bg-opacity-100 rounded-lg shadow-lg z-10 flex p-4">
                        {/* Left Column */}
                        <div className="flex-1">
                            <ul className="space-y-2">
                            <li>
                                <Link
                                to="/solar-scope"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                SolarScope
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/eco-trackLand"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                EcoTrack
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/bright-bin"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                BrightBin
                                </Link>
                            </li>
                            </ul>
                        </div>

                        {/* Divider */}
                        <div className="border-l border-gray-200 mx-4"></div>

                        {/* Right Column */}
                        <div className="flex-1">
                            <ul className="space-y-2">
                            <li>
                                <Link
                                to="/solar-cart"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                Solar Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/solar-care-scheduler"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                SolarCare
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/re-solar"
                                className="block text-customWhite3 hover:underline px-4 py-2 rounded hover:text-gray-700"
                                >
                                ReSolar
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    )}
                    </div>

                    <Link
                    to="/about"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-3xl text-sm font-medium md:text-xs lg:text-sm"
                    >
                    About 
                    </Link>
                    <Link
                    to="/contact"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-3xl text-sm font-medium md:text-xs lg:text-sm"
                    >
                    Contact 
                    </Link>
                </div>

                {/* Profile Icon and cart */}
                <div className="hidden md:flex flex-1 justify-end items-center space-x-4">

                    {/* cart icon */}
                    <FontAwesomeIcon icon={faCartShopping} className="text-white mr-8 transform hover:scale-110 transition duration-300 ease-in-out hover:text-[#AAC638]" />

                    {/* profile card */}
                    <div className="relative flex items-center space-x-2" ref={profileDropdownRef}>
                    <img
                        className="h-10 w-10 rounded-full object-cover cursor-pointer"
                        src={profileImage}
                        alt="Profile"
                        onClick={toggleProfileDropdown}
                    />
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-white cursor-pointer"
                        onClick={toggleProfileDropdown}
                    />
                    </div>
                    {isProfileDropdownOpen && (
                    <div
                        ref={profileDropdownRef}
                        className="absolute right-50 -mb-96 w-56 bg-white shadow-lg rounded-lg z-10"
                    >
                        <ProfileCard />
                    </div>
                    )}
                </div>

                {/* Sidebar Menu Icon */}
                <div className="md:flex flex-4 justify-end items-center space-x-4 ml-10">
                    <FontAwesomeIcon
                    icon={faBars}
                    className="text-white cursor-pointer"
                    onClick={toggleSidebar}
                    />
                </div>

            </div>
        </div>
        {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        <div className="mx-auto max-w-7xl px-4">
            <div className="border-b border-gray-800"></div>
        </div>
        </nav>
    );
};

export default Navbar;
