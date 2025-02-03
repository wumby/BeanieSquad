import Basketball from "@/components/Basketball";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col overflow-x-hidden">
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark bg-opacity-50"></div>
      {/* Content */}
      <div className="flex justify-center flex-col w-fit h-[25vh] z-10">
        <h1 className="flex justify-center text-7xl">Beanie Squad</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 w-fit">
          The ultimate 2K basketball squad. Compete. Dominate. Win.
        </p>
      </div>
      <div className="overflow-x-visible w-[33vh] h-[50vh] z-20">
        <Basketball />
      </div>
    </div>
  );
};

export default Hero;
