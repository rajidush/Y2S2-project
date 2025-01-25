import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faCartShopping, faChartSimple, faDumpster, faMap, faRecycle, faUserDoctor, faUser,faBell,faGear,faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ onClose }) => {
  const menuItems = [
    { icon: faHouse, name: "Home", href: "/home" },
    { icon: faCartShopping, name: "Cart", href: "/cart" },
    { icon: faChartSimple, name: "EchoTrack", href: "/eco-trackLand" },
    { icon: faDumpster, name: "BrightBin", href: "/bright-bin" },
    { icon: faMap, name: "SolarScope", href: "/solar-scope" },
    { icon: faRecycle, name: "Resolar", href: "/resolar" },
    { icon: faUserDoctor, name: "SolarCare", href: "/solar-care" },
  ];
 

  const profileItems = [
    { icon: faUser, name: "Profile", href: "/profile" },
    { icon: faBell, name: "Notifications", href: "/notifications" },
    { icon: faGear, name: "Settings", href: "/settings" },
  ];

  const signOutItem = { icon: faRightFromBracket, name: "Sign Out", href: "/sign-out" };

  return (
    <div className="fixed inset-0 z-20 flex">
      {/* Sidebar */}
      <div className="w-50 h-screen bg-white shadow-xl p-4 rounded-tl-3xl rounded-bl-3xl absolute right-0 flex flex-col items-center">
        <ul className="space-y-5">
          {/* Main Menu */}
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="block py-2 text-center text-gray-700">
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
              </a>
              {/* Tooltip */}
              <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                {item.name}
              </span>
            </li>
          ))}

          <hr className="w-full border-gray-300" />

          {/* Profile & Settings */}
          {profileItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="block py-2 text-center text-gray-700">
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
              </a>
              {/* Tooltip */}
              <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                {item.name}
              </span>
            </li>
          ))}

          <hr className="w-full border-gray-300" />

          {/* Sign Out */}
          <li className="relative group">
            <a href={signOutItem.href} className="block py-2 text-center text-gray-700">
              <FontAwesomeIcon icon={signOutItem.icon} className="text-lg" />
            </a>
            {/* Tooltip */}
            <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
              {signOutItem.name}
            </span>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-auto text-center">
          <p className="text-xs text-gray-500">©2025 Lumina</p>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="flex-1" onClick={onClose}></div>
    </div>
  );
};

export default Sidebar;
