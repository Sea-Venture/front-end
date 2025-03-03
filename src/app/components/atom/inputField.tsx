import React from 'react'

const inputField = ({ type, placeholder, required = false }: { type: string; placeholder: string; required?: boolean }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        required={required}
      />
    );
  };
  
  export default inputField;