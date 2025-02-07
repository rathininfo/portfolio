import React from "react";

const Education = () => {
  return (
    <div className="py-16 sm:py-24 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center py-5">
          Educational Qualification
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Card for Bachelor's Degree */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600">Bangladesh University (2024)</p>
          </div>

          {/* Card for Higher Secondary Certificate (HSC) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Diploma In Computer Engineering</h3>
            <p className="text-gray-600">Kashbon Polytechic institute (2018)</p>
          </div>

          {/* Card for Secondary School Certificate (SSC) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Secondary School Certificate (SSC)</h3>
            <p className="text-gray-600">Singra Tilkhari High School (2014)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
