import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/basketball-court.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
          Welcome to <span className="text-yellow-400">[Team Name]</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          The ultimate 2K basketball squad. Compete. Dominate. Win.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/join"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Join the Team
          </a>
          <a
            href="/schedule"
            className="px-6 py-3 border border-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
