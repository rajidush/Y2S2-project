import eBin from '../assets/images/e-waste-bin.jpg';

const Example = () => {
  return (
    <section className="bg-white-50 py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      <img 
        src={eBin}
        alt="Waste Management Illustration" 
        className="w-full md:w-1/2"
      />
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Make Waste Collection Smarter and Rewarding with BrightBin
        </h2>
        <p className="mt-4 text-gray-600">
          Track your waste management progress, schedule pickups effortlessly, and earn rewards for sustainable practices!
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
          Get Started Now
        </button>
      </div>
    </div>
  </section>
  )
}

export default Example