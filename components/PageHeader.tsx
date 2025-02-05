import React from "react";

interface PageHeaderProps {
  heading: string;
}
const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="flex justify-start ml-[10%] mt-10">
      <h1 className="text-orange-1 text-6xl lg:text-8xl">{props.heading}</h1>
    </div>
  );
};

export default PageHeader;
