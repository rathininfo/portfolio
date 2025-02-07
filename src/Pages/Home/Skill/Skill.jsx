import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa'; 
import { SiExpress } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="p-5 py-16 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="skill text-orange-500 hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <FaHtml5 size={50} />
          <p className="mt-3 text-lg font-medium">HTML</p>
        </div>
        <div className="skill text-blue-500 hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <FaCss3Alt size={50} />
          <p className="mt-3 text-lg font-medium">CSS</p>
        </div>
        <div className="skill text-yellow-500 hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <FaJs size={50} />
          <p className="mt-3 text-lg font-medium">JavaScript</p>
        </div>
        <div className="skill text-green-500 hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <FaNodeJs size={50} />
          <p className="mt-3 text-lg font-medium">Node.js</p>
        </div>
        <div className="skill text-green-700 hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <FaDatabase size={50} />
          <p className="mt-3 text-lg font-medium">MongoDB</p>
        </div>
        <div className="skill hover:scale-110 transform transition duration-300 ease-in-out p-6 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <SiExpress size={50} className="text-gray-600" />
          <p className="mt-3 text-lg font-medium">Express.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
