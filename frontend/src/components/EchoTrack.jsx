import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Generation from "./Generation";



import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHourglassEnd, faHourglass, faPiggyBank, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Consumption from "./Consumption";

const EchoTrack = () => {
  const [active, setActive] = useState("Dashboard"); // State to track active page

  const menuItems = [
    { label: "Dashboard", icon: faHouse },
    { label: "Generation", icon: faHourglassEnd },
    { label: "Consumption", icon: faHourglass },
    { label: "Savings", icon: faPiggyBank },
  ];

  // Function to render the active page
  const renderContent = () => {
    switch (active) {
      case "Dashboard":
        return <Dashboard />;
      case "Generation":
        return <Generation />;
      case "Consumption":
        return <Consumption />;
      case "Savings":
        return <Savings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="flex justify-center">
        {/* Sidebar */}
        <div className="h-[90vh] w-1/6 flex flex-col bg-black mt-20">
          <ul className="flex-grow mr-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)} // Update active page on click
                  className={`block py-2 text-left pl-16 pr-8 mt-5 mr-5 rounded-r-2xl w-full text-sm ${
                    active === item.label
                      ? "bg-white text-gray-600" // Active state styles
                      : "text-white hover:bg-white hover:text-gray-600"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Footer with EchoTrack */}
          <div>
            <hr className="border-gray-600 mb-8 mx-5" />
            <li className="mb-8">
              <a
                href="/eco-trackLand"
                className="block py-2 text-white pl-16 pr-8 mr-5"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                EchoTrack
              </a>
            </li>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-auto w-5/6 flex flex-row bg-black p-4">
          {renderContent()} {/* Render the active page content */}
        </div>
      </div>
    </div>
  );
};

export default EchoTrack;
