import React from "react";
import PopupContent from "../../atom/hero/popupContent";

const Popup = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl relative">
        <PopupContent onClose={onClose}>
          {children}
          <button onClick={onClose}>Close</button>
        </PopupContent>
      </div>
    </div>
  );
};

export default Popup;
