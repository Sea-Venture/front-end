import React from "react";
import CloseButton from "./closeButton";

const popupContent = ({ children ,onClose }: { children: React.ReactNode,onClose: () => void }) => {
  return <div className="p-8">{children}
   <div className="relative">
      <CloseButton onClick={onClose} />
    </div>

  </div>;
  
};

export default popupContent
