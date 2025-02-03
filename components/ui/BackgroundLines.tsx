"use client";

import { useTheme } from "next-themes";
import React from "react";

const BackgroundLines = () => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "var(--neutral-300)" : "#121212";
  return (
    <>
      <radialGradient
        id="paint0_radial_242_278"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
      >
        <stop offset="0.0666667" stopColor={color}></stop>
        <stop offset="0.243243" stopColor={color}></stop>
        <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
      </radialGradient>
    </>
  );
};

export default BackgroundLines;
