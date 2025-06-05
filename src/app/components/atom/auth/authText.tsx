import React from 'react';

const authText = ({ authText }: { authText: string }) => {
  return (
    <div className="text-4xl font-sans font-bold text-center text-black">
      {authText}
    </div>
  );
};
export default authText;