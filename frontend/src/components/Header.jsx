import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Bright Bin</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-green-600">Home</a>
          <a href="#services" className="text-gray-600 hover:text-green-600">Services</a>
          <a href="#about" className="text-gray-600 hover:text-green-600">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600">Contact Us</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
          Bin(0)
        </button>
      </div>
    </header>
  )
}

export default Header