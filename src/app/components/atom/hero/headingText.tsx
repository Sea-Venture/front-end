import React from "react";

const headingText = ({ headingText }: { headingText: string }) => {
  return (
    <h1 className="text-3xl font-bold mb-5 ml-10 md:text-5xl sm:text-4xl lg:text-7xl ">
      {headingText}
    </h1>
  );
};

export default headingText

