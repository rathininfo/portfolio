import React from "react";
import { DiJava } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Project = () => {
  const handleProject = () => {
    window.open("https://rathininfo.github.io/Tea-house/", "_blank");
  };

  const donationLiveLink = () => {
    window.open("https://rathininfo.github.io/DOM-Quest-Build-and-Manipulate/", "_blank");
  };

  const handleProjectThree = () => {
    window.open("https://rathininfo.github.io/Hero-Travel-Website/", "_blank");
  };

  return (
    <div id="project" className="bg-gray-100 p-8 sm:p-12 md:p-16">
      <h1 className="text-center font-bold text-3xl sm:text-4xl">Projects</h1>

      {/* Tea House Project */}
      <div className="border rounded-lg p-6 shadow-md max-w-full sm:max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/6 border rounded-lg bg-gray-200 h-64 sm:h-auto flex items-center justify-center">
          <img
            src="https://i.ibb.co/5bbRpDR/Screenshot-11.png"
            alt="Tea House"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full sm:w-3/6 sm:pl-6 mt-4 sm:mt-0">
          <h2 className="text-xl font-bold">Tea House</h2>
          <p className="text-gray-700 mt-2">
            The Tea House offers a delightful selection of premium teas and botanical blends,
            ensuring the finest taste experience.
          </p>
          <ul className="list-decimal list-inside mt-2 text-gray-600">
            <li>Premium Quality Ingredients</li>
            <li>Wide Variety of Flavors</li>
            <li>Elegant & Durable Teaware</li>
          </ul>
          <div className="flex space-x-2 mt-3">
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <FaHtml5 className="text-orange-500 text-3xl" />
            </span>
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <RiTailwindCssFill className="text-blue-500 text-3xl" />
            </span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleProject}
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
            >
              View Project
            </button>
            <a
              href="https://github.com/rathininfo/Tea-house"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Donation Project */}
      <div className="border rounded-lg p-6 shadow-md max-w-full sm:max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/6 border rounded-lg bg-gray-200 h-64 sm:h-auto flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/BKHy2FxL/Screenshot-12.png"
            alt="Donation"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full sm:w-3/6 sm:pl-6 mt-4 sm:mt-0">
          <h2 className="text-xl font-bold">Donation</h2>
          <p className="text-gray-700 mt-2">
            Donate Bangladesh is dedicated to providing immediate relief to those affected by recent disasters
            across the country.
          </p>
          <ul className="list-decimal list-inside mt-2 text-gray-600">
            <li>Immediate Aid</li>
            <li>Support for Vulnerable Communities</li>
            <li>Aid for the Injured</li>
          </ul>
          <div className="flex space-x-2 mt-3">
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <FaHtml5 className="text-orange-500 text-3xl" />
            </span>
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <RiTailwindCssFill className="text-blue-500 text-3xl" />
            </span>
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <DiJava className="text-blue-500 text-3xl" />
            </span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={donationLiveLink}
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
            >
              View Project
            </button>
            <a
              href="https://github.com/rathininfo/DOM-Quest-Build-and-Manipulate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Travel Project */}
      <div className="border rounded-lg p-6 shadow-md max-w-full sm:max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/6 border rounded-lg bg-gray-200 h-64 sm:h-auto flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/23Zzv93K/Screenshot-14.png"
            alt="Travel"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full sm:w-3/6 sm:pl-6 mt-4 sm:mt-0">
          <h2 className="text-xl font-bold">Travel</h2>
          <p className="text-gray-700 mt-2">
            Hero Travel offers a wide range of travel packages to explore the most beautiful destinations around the world.
          </p>
          <ul className="list-decimal list-inside mt-2 text-gray-600">
            <li>Handpicked Hotels</li>
            <li>Wide Range of Destinations</li>
            <li>Best Price Guarantee</li>
          </ul>
          <div className="flex space-x-2 mt-3">
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <FaHtml5 className="text-orange-500 text-3xl" />
            </span>
            <span className="w-12 h-12 flex items-center justify-center rounded-md">
              <RiTailwindCssFill className="text-blue-500 text-3xl" />
            </span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleProjectThree}
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
            >
              View Project
            </button>
            <a
              href="https://github.com/rathininfo/Hero-Travel-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;
