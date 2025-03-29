import React from 'react';

const searchInput = ({ plholder }: { plholder: string }) => {
  return (
    <input
      type="text"
      placeholder={plholder}
      className="bg-transparent border-none focus:outline-none text-sm placeholder-transparent md:placeholder-transparent dark:text-gray-100 xl:placeholder-gray-400 lg:placeholder-gray-400 w-full"
    />
  );
};

export default searchInput;