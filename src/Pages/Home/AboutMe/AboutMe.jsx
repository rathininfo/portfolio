import React from "react";

const AboutMe = () => {
  return (
    <div className="py-16 sm:py-24 md:py-36">
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center py-5">About Me</h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center text-gray-500 w-full sm:w-4/6 lg:w-3/6 xl:w-4/6 px-6 md:px-12 rounded-md">
          I'm a web developer focused on creating clean, efficient websites and applications. 
          My passion for programming started with a love for technology and problem-solving. 
          I aim to combine thoughtful design with functionality to build solutions that 
          impact users positively.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
