import React from 'react';

const NavigateToggle = ({ mainText, subText, onClick }: { mainText: string; subText: string; onClick: () => void }) => {
  return (
    <div className="text-center text-black font-poppins">
      <p className="text-center text-sm">
        {mainText}
        <span className="text-red-500 ml-1 cursor-pointer" onClick={onClick}>
          {subText}
        </span>
      </p>
    </div>
  );
};

export default NavigateToggle;