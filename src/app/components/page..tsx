import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#1A2238] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-14 py-4 bg-[#1A2238] fixed w-[1200px] z-10">
        <div className="text-xl font-bold pl-[100px]  ">BrandName</div>
        <ul className="flex space-x-8 text-sm">
          <li><Link href="/" >Home</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-8">
          <button className="hover:underline ">Login</button>
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Join Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-sm uppercase tracking-wide text-blue-400 mb-10 mt-12">Welcome</h1>
        <h2 className="text-6xl font-bold mb-8">Selling on the <br />internet like a pro</h2>
        <p className="text-base text-gray-300 max-w-2xl mb-8">
          We know how large objects will act, but things on a <br />small scale just do not act that way.
        </p>
        <div className="flex space-x-4 py-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Get Quote Now
          </button>
          <button className="bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer with Cards */}
      <footer className="bg-[#1A2238] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto px-6">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-custom-bg rounded-md mx-0 mb-4"></div>
            <h5 className="font-semibold text-sm mb-2 text-left">training courses</h5>
            <div className="h-0.5 bg-line-color rounded-full w-11 my-3"></div>
            <p className="text-xs text-left text-gray-500">
              The gradual accumulation of information about atomic and small-scale behavior...
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-black p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-second-card rounded-md mx-0 mb-4"></div>
            <h5 className="font-semibold text-sm mb-2 text-left">2,769 Online Courses</h5>
            <div className="h-0.5 bg-line-color rounded-full w-11 my-3"></div>
            <p className="text-xs text-left text-gray-500">
              The gradual accumulation of information about atomic and small-scale behavior...
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-third-card-body text-white p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-white rounded-md mx-0 mb-4"></div>
            <h5 className="font-semibold text-sm mb-2 text-left">training courses</h5>
            <div className="h-0.5 bg-white rounded-full w-11 my-3"></div>
            <p className="text-xs text-left text-white">
              The gradual accumulation of information about atomic and small-scale behavior...
            </p>
          </div>
        </div>
      </footer>
    </div>
)
}
