import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/allImg/Lumina1.png';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Social Media */}
          <div>
        
            <img className="w-28 mb-4" src={logo} alt="Logo" />
            <p className='text-justify text-xs text-gray-300'>
            Lumina focuses on creating smart, eco-friendly solutions for a sustainable future. We offer tools like solar energy systems and green products to help individuals and businesses save energy and promote sustainability
            </p>
            <div className="flex space-x-4 mt-8">
              <Link to="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link to="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400 text-gray-300">Home</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">About</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">Contact</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">SolarCart</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">SolarScope</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">ReSolar</Link></li>
              <li><Link to="/eco-trackLand" className="hover:text-gray-400 text-gray-300">EcoTrack</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">BrightBin</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">Terms and Conditions</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">SolarCare</Link></li>
              <li><Link to="#" className="hover:text-gray-400 text-gray-300">Lumina</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 flex justify-center items-center">
          <p className='mr-3'>©2025 Lumina</p>
          <p className='mr-3'>|</p>
          <p>All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
