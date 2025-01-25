import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
  return (
    <div className="w-80 bg-gray-100 rounded-lg shadow-md p-6 mx-auto text-gray-800 ">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center text-gray-500">
          <FontAwesomeIcon icon={faGear} size="lg" />
        </div>
        <div className="ml-4">
          <h2 className="font-bold text-lg">Andrew Garfield</h2>
          <p className="text-sm text-gray-500">andrewGarfield@gmail.com</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <button className="flex items-center w-full py-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          User profile
        </button>
        <button className="flex items-center w-full py-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faGear} className="mr-2" />
          Settings
        </button>
      </div>
      <hr className="my-4" />
      <button className="flex items-center w-full py-2 justify-center bg-customBlack1 text-white rounded-3xl hover:bg-gray-700">
        <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
        Sign out
      </button>
    </div>
  );
};

export default ProfileCard;
