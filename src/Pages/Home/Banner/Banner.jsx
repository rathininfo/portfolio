import React from "react";

const Banner = () => {
  return (
    <div className="rounded-lg p-6 shadow-md mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center my-6">
        {/* Left section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className=" text-gray-600 text-4xl mb-2">Hello, I am</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Rathindra Nath Biswas</h1>
          <h3 className="text-xl font-medium  text-purple-500">Frontend Developer</h3>
          <p className="text-gray-500 mt-4">
            I make beautiful websites. I build responsive designs. I create user-friendly interfaces. I enhance web experiences.
          </p>
          <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-900">
            Resume
          </button>
        </div>
        
        {/* Right section */}
        <div className="mt-6 md:mt-0 md:w-2/2 flex justify-center shadow-xl shadow-gray-400  bg-gradient-to-r from-purple-900 to-purple-400 last:rounded-xl"> 
          <img className="rounded-md w-48 md:w-72 lg:w-96" src="https://i.ibb.co.com/gMvnDQH6/iiiiiiiiii-removebg-preview.png" alt="Rathindra Nath Biswas" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
