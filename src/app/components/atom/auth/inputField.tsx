import React from "react";

const inputField = ({
  type,
  placeholder,
  required = false,
  onChange,
  name,
}: {
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline text-black"
      required={required}
      onChange={onChange}
    />
  );
};

export default inputField;