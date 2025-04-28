import React from 'react';

const searchInput = ({
  plholder,
  eltype,
  options,
  onChange,
}: {
  plholder: string;
  eltype: string;
  options?: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}) => {
  const today = new Date().toISOString().split('T')[0];

  if (eltype === 'select' && options) {
    return (
      <select
        className="bg-transparent border-none focus:outline-none text-sm placeholder-transparent md:placeholder-transparent text-gray-900 dark:text-gray-100 xl:placeholder-gray-400 lg:placeholder-gray-400 w-full"
        defaultValue=""
        onChange={onChange} // Attach the onChange handler
      >
        <option value="" disabled className="text-gray-200 dark:text-gray-800">
          {plholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-gray-900 dark:text-gray-900">
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (eltype === 'date') {
    return (
      <input
        type="date"
        placeholder={plholder}
        min={today}
        className="bg-transparent border-none focus:outline-none text-sm placeholder-transparent md:placeholder-transparent dark:text-gray-100 xl:placeholder-gray-400 lg:placeholder-gray-400 w-full"
        onChange={onChange} // Attach the onChange handler
      />
    );
  }

  return (
    <input
      type={eltype}
      placeholder={plholder}
      className="border-none focus:outline-none text-sm placeholder-transparent md:placeholder-transparent dark:text-gray-100 xl:placeholder-gray-400 lg:placeholder-gray-400 w-full"
      onChange={onChange} // Attach the onChange handler
    />
  );
};

export default searchInput;