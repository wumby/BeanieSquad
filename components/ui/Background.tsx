"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BackgroundLines from "./BackgroundLines";
import { path, paths } from "@/data";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          "absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center bg-background-light dark:bg-background-dark",
          className,
        )}
      >
        <svg
          className=" z-0 h-full w-full pointer-events-none absolute "
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={path}
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#ff9500" stopOpacity="0"></stop>
                <stop stopColor="#ff9500"></stop>
                <stop offset="32.5%" stopColor="#ff9500"></stop>
                <stop offset="100%" stopColor="#ff9500" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <BackgroundLines />
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
