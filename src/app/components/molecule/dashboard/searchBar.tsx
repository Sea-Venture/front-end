import React from 'react';
import { FaSearch } from "react-icons/fa";
import SearchBlock from '../../atom/dashboard/searchbar/searchBlock';

const searchBar = () => {
  return (
    <div>
      {/* Full Search Bar for Medium to Extra-Large Devices */}
      <div className="hidden sm:flex items-center justify-center bg-white shadow-md rounded-full text-sm
                      xl:w-[750px] xl:h-[55px] mx-auto
                      lg:w-[500px] lg:h-[50px]
                      md:w-[250px] md:h-[45px]">
        <SearchBlock plholder="Select a location" paraText="Location" />
        <SearchBlock plholder="Select your activity" paraText="Activity" />
        <SearchBlock plholder="Select a Date" paraText="Date" />
        <div className="flex flex-col justify-center px-6 w-[22%] relative hover:w-52 hover:bg-gray-100 rounded-full transition border-l border-gray-300">
          <span className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-cyan-500 text-white text-xs p-2 rounded-full">
            <FaSearch className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Search Icon Only for Small Devices */}
      <div className="flex sm:hidden justify-center items-center">
        <span className="bg-cyan-500 text-white text-xs p-3 rounded-full">
          <FaSearch className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default searchBar;