import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center mt-7">Contact</h1>
        <div className="mb-6">
          <div className="border rounded-lg p-6 shadow-md max-w-4xl mx-auto mt-10 flex flex-col md:flex-row">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 border rounded-lg bg-gray-100 p-4">
              <input 
                type="email" 
                placeholder="Input Your Email" 
                className="w-full p-2 border rounded mb-4" 
              />
              <textarea 
                placeholder="Your Message" 
                className="w-full p-2 border rounded mb-4 h-24"
              ></textarea>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
                Submit
              </button>
            </div>
            
            {/* Contact Information */}
            <div className="w-full md:w-1/2 border rounded-lg flex items-center justify-center bg-gray-100 mt-6 md:mt-0">
              <p className="text-gray-700 font-semibold p-4">
                <h1 className="font-bold text-2xl mb-4">Contact Information</h1>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-green-600 mr-2" />
                  <span> 01842944298</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <span>rathininfo7@gmail.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-red-600 mr-2" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
