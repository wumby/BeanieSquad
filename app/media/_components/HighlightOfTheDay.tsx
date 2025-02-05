import { Highlight } from "@/types";
import React from "react";

interface HighlightOfTheDayProps {
  highlight: Highlight;
}
const HighlightOfTheDay = (props: HighlightOfTheDayProps) => {
  return (
    <div>
      {" "}
      <div className="sticky top-5 mt-5 bg-background-light dark:bg-background-dark z-50 mb-2 px-10 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-orange-1 text-6xl lg:text-8xl">
          Highlight of The Day
        </h1>
      </div>
      <div className="w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full mt-10"
          src={props.highlight.url}
          title="YouTube video player"
          frameBorder="0"
          allow=""
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center text-center text-orange-1 mt-10 text-2xl lg:text-4xl">
        {props.highlight.heading}
      </div>
    </div>
  );
};

export default HighlightOfTheDay;
