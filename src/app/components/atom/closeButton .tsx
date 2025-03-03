import React from "react";

const closeButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
    >
      &times; 
    </button>
  );
};
export default closeButton