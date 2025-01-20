import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      {/* Container */}
      <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Watch, Share, and Enjoy
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Explore endless videos, upload your own, and connect with a global
            audience. Your next favorite video is just a click away.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-medium">
            Explore Now
          </button>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex justify-center">
          <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-2xl rounded-full shadow-lg">
            Start Watching
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="YouTube Clone Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
