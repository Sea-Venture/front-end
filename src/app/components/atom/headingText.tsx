import React from "react";

const headingText = ({ headingText }: { headingText: string }) => {
  return (
    <h1 className="text-7xl font-bold mb-5 ml-10 ">
      {headingText}
    </h1>
  );
};

export default headingText

