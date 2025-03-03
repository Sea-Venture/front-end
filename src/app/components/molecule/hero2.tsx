"use client";
import React from "react";
import Paragraph from "../atom/paragraphText"
import Heading from "../atom/headingText"
import Button from "../atom/button"

const hero2 = ({ heading, paragraph, button1, button2 }: { heading: string; paragraph: string; button1: string; button2: string;popupContent: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:text-left  mr-auto">
      <div className="md:w-1/2 mr-auto text-darkblue">
        <Heading headingText={heading} />
      </div>
      <div className="md:w-1/2  mr-10">
        <Paragraph paragraphText={paragraph} />
        <div className="flex gap-4 ml-10 mr-20 mt-10">
          <div className=" bg-darkblue text-white  hover:bg-blue-600 transition">
            <Button buttonText={button1} />
          </div>  
          <div className=" border border-darkblue text-darkblue  hover:bg-gray-200  transition">
          <Button buttonText={button2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero2
