"use client";
import React from "react";
import Heading from "../../atom/landingPage/heroSectionHeading";
import Paragraph from "../../atom/landingPage/landingPageParagraph";
import Button from "../../atom/landingPage/ButtonText";

const TextContent = () => {
  const loadRegister = () => {
    window.location.href = "/api/register";
  };

  return (
    <div className="relative z-10 text-center text-white">
      <Heading />
      <Paragraph />
      <Button buttonText={"Get Started"} onClick={loadRegister} />
    </div>
  );
};

export default TextContent;

