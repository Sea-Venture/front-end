import React from "react";

const button = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="px-9 py-5 text-xl ">
      {buttonText}
    </button>
  );
};

export default button
