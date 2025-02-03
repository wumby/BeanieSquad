import Basketball from "@/components/Basketball";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerate";
import { BackgroundBeams } from "@/components/ui/Background";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-evenly overflow-x-hidden">
      {/* <div className="absolute inset-0 bg-background-light dark:bg-background-dark bg-opacity-50"></div> */}
      {/* Content */}
      <div className="flex justify-center flex-col w-[50%] h-[25vh] z-10 select-none">
        <div className="flex justify-center w-[100%]">
          <h1>
            <TextGenerateEffect
              words={"Beanie Squad"}
              classes="text-8xl text-orange-1"
            />
          </h1>
        </div>
        <div className="flex justify-center w-[100%]">
          <h1>
            <TextGenerateEffect
              words={
                "A top 2K team for the past ten years filled with the top hoopers from around the globe"
              }
              classes="text-4xl text-black dark:text-white"
            />
          </h1>
        </div>
      </div>

      <div className="overflow-x-visible w-[50%] h-[100vh] z-20">
        <Basketball></Basketball>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
