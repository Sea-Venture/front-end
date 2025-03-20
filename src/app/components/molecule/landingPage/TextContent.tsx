import React from "react";
import Heading from "../../atom/landingPage/heroSectionHeading";
import Paragraph from "../../atom/landingPage/landingPageParagraph";
import Button from "../../atom/landingPage/ButtonText";

const TextContent = () => {
  return (
    <div className="relative z-10 text-center text-white">
      <Heading />
      <Paragraph />
      <Button buttonText={"Get Started"}/>
    </div>
  );
};

export default TextContent;

