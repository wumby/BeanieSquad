import Basketball from "@/components/Basketball";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerate";
import { BackgroundBeams } from "@/components/ui/Background";
import { headers } from "next/headers";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import BeanieStats from "./BeanieStats";
import Link from "next/link";

const Hero = async () => {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
  return (
    <div className="w-full h-screen flex items-center justify-evenly overflow-x-hidden">
      {isMobile && (
        <div className="h-screen w-full  bg-grid-orange-1/[0.08] flex items-center justify-center absolute top-0 left-0 z-10">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      )}

      <div className="flex justify-center flex-col w-[50%] h-[25vh] z-10 select-none mb-[10%]">
        <div className="flex justify-center w-[100%]">
          <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-orange-1 font-bold pl-4">
            Beanie Squad
          </h1>
        </div>
        <div className="flex justify-center w-[100%]">
          <h1>
            <TextGenerateEffect
              words={
                "A top 2K team for the past ten years filled with the top hoopers from around the globe"
              }
              classes="sm:text-2xl lg:text-4xl text-black dark:text-white text-center pl-5"
            />
          </h1>
        </div>
        <div className="flex justify-center mt-10 gap-4">
          <Link href="/media">
            <ShimmerButton className="shadow-2xl w-[10vh] sm:w-[20vh]">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-orange-1 dark:to-slate-900/10 lg:text-lg">
                Our Best Plays
              </span>
            </ShimmerButton>
          </Link>
          <Link href="/roster">
            <ShimmerButton className="shadow-2xl w-[10vh] sm:w-[20vh]">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-orange-1 dark:to-slate-900/10 lg:text-lg">
                See Our Team
              </span>
            </ShimmerButton>
          </Link>
        </div>
        <div>
          <BeanieStats />
        </div>
      </div>

      <div className="overflow-x-visible w-[50%] lg:h-[90vh] z-20 md:h-[45vh] h-[30vh]">
        <Basketball />
      </div>

      {!isMobile && <BackgroundBeams />}
    </div>
  );
};

export default Hero;
