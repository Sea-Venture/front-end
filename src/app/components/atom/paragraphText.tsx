import React from "react";

const ParagraphText = ({ paragraphText }: { paragraphText: string }) => {
  return (
    <p className=" text-gray-800 text-2xl ml-10 mr-20 mt-5">
      {paragraphText}
    </p>
  );
};

export default ParagraphText
