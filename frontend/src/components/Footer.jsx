import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#solar-cart" className="hover:underline">SolarCart</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="font-bold text-lg">Products</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#solar-scope" className="hover:underline">SolarScope</a></li>
            <li><a href="#resolar" className="hover:underline">ReSolar</a></li>
            <li><a href="#eco-track" className="hover:underline">EcoTrack</a></li>
            <li><a href="#bright-bin" className="hover:underline">BrightBin</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold text-lg">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms-conditions" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#solar-care" className="hover:underline">SolarCare</a></li>
            <li><a href="#lumina" className="hover:underline">Lumina</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer