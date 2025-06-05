import React from "react";

const Button = ({ buttonText, onClick }: { buttonText: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      {buttonText}
    </button>
  );
};

export default Button;
