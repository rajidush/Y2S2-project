import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center py-12">
        <div className="w-full max-w-4xl flex justify-center items-center space-x-4">
          <div className="h-40 w-40 bg-green-500"></div>
          <div className="h-40 w-40 bg-green-500"></div>
          <div className="h-40 w-40 bg-green-500"></div>
        </div>
        <button className="mt-6 px-6 py-2 bg-green-600 rounded">Watch Video</button>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-around py-12">
        <div className="text-center">
          <div className="h-20 w-20 rounded-full border-4 border-white mx-auto"></div>
          <p className="mt-4">Monthly Recycle Count</p>
        </div>
        <div className="text-center">
          <div className="h-20 w-20 rounded-full border-4 border-white mx-auto"></div>
          <p className="mt-4">Successful Recycle Count</p>
        </div>
        <div className="text-center">
          <div className="h-20 w-20 rounded-full border-4 border-white mx-auto"></div>
          <p className="mt-4">Monthly Revenue</p>
        </div>
        <div className="text-center">
          <div className="h-20 w-40 bg-white mx-auto"></div>
          <p className="mt-4">Issued Promo Codes</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-center text-2xl font-bold">Industry Expertise</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          America’s most advanced recycler, made for and by the solar industry...
        </p>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-green-600 rounded">About Us</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl font-bold mb-8">
          Fast, Environmentally Friendly, and Fully Permitted
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="h-40 w-40 bg-gray-700 mx-auto"></div>
            <p className="mt-4">Construction Breakage</p>
          </div>
          <div className="text-center">
            <div className="h-40 w-40 bg-gray-700 mx-auto"></div>
            <p className="mt-4">Operations and Maintenance</p>
          </div>
          <div className="text-center">
            <div className="h-40 w-40 bg-gray-700 mx-auto"></div>
            <p className="mt-4">Repowering Old Systems</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-center text-2xl font-bold mb-6">
          Solar’s Second Life: Renewing Energy, Recycling Panels
        </h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 bg-gray-700 rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 bg-gray-700 rounded focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Product Type"
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Serial Number"
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
          />
          <select className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none">
            <option>Condition</option>
            <option>New</option>
            <option>Used</option>
          </select>
          <button className="w-full px-4 py-2 bg-green-600 rounded">
            Submit
          </button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Join Us in Building Solar’s Circular Economy
        </h2>
        <div className="h-40 bg-gray-700 mx-auto w-3/4"></div>
        <button className="mt-6 px-6 py-2 bg-green-600 rounded">Contact Us</button>
      </section>
    </div>
  );
}

export default App;