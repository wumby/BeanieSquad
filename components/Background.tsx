import React from "react";

const Background = () => {
  return (
    <div className="h-screen w-full  bg-grid-orange-1/[0.08] flex items-center justify-center absolute top-0 left-0 z-[-1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Background;
