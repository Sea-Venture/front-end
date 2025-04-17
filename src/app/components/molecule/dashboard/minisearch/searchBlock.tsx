import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchText from '../../../atom/dashboard/searchbar/minisearch/searchText';

const searchBlock = ({ searchText, onClick }: { searchText: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick} // Attach the onClick handler here
      className="flex items-center justify-center w-full h-10 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
      <SearchText searchText={searchText} />
    </button>
  );
};

export default searchBlock;