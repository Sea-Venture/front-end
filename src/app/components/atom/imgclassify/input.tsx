import React from "react";

const Input = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <input
      type="file"
      onChange={onChange}
      className="mt-4 p-2 rounded-md bg-slate-600 border border-blue-600"
    />
  );
};

export default Input;
