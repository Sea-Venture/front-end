import React from "react";
import Heading from "../../atom/nav-bar/heroSectionHeading";
import Paragraph from "../../atom/nav-bar/landingPageParagraph";
import Button from "../../atom/nav-bar/ButtonText";

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

