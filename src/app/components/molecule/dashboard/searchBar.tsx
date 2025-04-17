import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SearchBlock from '../../atom/dashboard/searchbar/searchBlock';
import MiniSearch from '../../molecule/dashboard/minisearch/searchBlock';
import axios from "axios";

const searchBar = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [activities, setActivities] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openMiniSearch = () => {
    setShowMiniSearch(!showMiniSearch);
  }

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  }

  useEffect(() => {
    fetchLocations();
    fetchActivities();
  }, []);

  const fetchLocations = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You are not logged in. Please log in to fetch locations.');
        return;
      }
      const response = await axios.get('http://localhost:8080/api/user/locations/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      console.log('locations data', data);

      const locationNames = data.map((location: { name: string }) => location.name);
      setLocations(locationNames);
      setError(null);
    } catch (error) {
      console.error('Error fetching locations:', error);
      setError('Failed to fetch locations. Please try again later.');
    }
  };

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You are not logged in. Please log in to fetch activities.');
        return;
      }
      const response = await axios.get('http://localhost:8080/api/user/activities/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      console.log('activities data', data);

      const activityNames = data.map((activity: { name: string }) => activity.name);
      setActivities(activityNames);
      setError(null);
      
    } catch (error) {
      console.error('Error fetching activities:', error);
      setError('Failed to fetch activities. Please try again later.');
      
    }
  }

  console.log('locations', locations);
  console.log('activities here they are', activities);


  return (
    <div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="hidden sm:flex items-center justify-center bg-white dark:bg-gray-800 dark:shadow-gray-600 shadow-md rounded-full text-sm
                      xl:w-[750px] xl:h-[55px] mx-auto
                      lg:w-[500px] lg:h-[50px]
                      md:w-[250px] md:h-[45px]">

        <SearchBlock
          plholder={locations.length > 0 ? "Select a location" : "No locations available"}
          paraText="Location"
          eltype="select"
          options={locations}
        />
        <SearchBlock
          plholder="Select your activity"
          paraText="Activity"
          eltype="select"
          options={activities}
        />
        <SearchBlock
          plholder="Select a Date"
          paraText="Date"
          eltype="date"
        />
        <div className="flex flex-col justify-center px-6 w-[22%] relative hover:w-52 hover:bg-gray-100 rounded-full transition border-l border-gray-300">
          <span className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-cyan-500 text-white text-xs p-2 rounded-full">
            <FaSearch className="w-5 h-5" />
          </span>
        </div>
      </div>
      <div className="flex sm:hidden justify-center items-center">
        <span className="bg-cyan-500 text-white text-xs p-3 rounded-full">
          <FaSearch className="w-6 h-6" onClick={openMiniSearch} />
        </span>
        {showMiniSearch && (
          <div className="absolute mt-36 ml-32 left-16 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-80">
            <MiniSearch searchText="Search" onClick={toggleDropDown} />
          </div>
        )}

      </div>
      {showDropDown && (
            <div className="absolute mt-48 ml-32 left-16 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-80 sm:hidden">
              <div className="flex mt-4 justify-center items-center">
                <SearchBlock
                  plholder={locations.length > 0 ? "Select a location" : "No locations  available"}
                  paraText="Location"
                  eltype="select"
                  options={locations}
                />

              </div>
              <div className="flex mt-4 justify-center items-center">
                <SearchBlock
                  plholder="Select your activity"
                  paraText="Activity"
                  eltype="select"
                  options={activities}
                />

              </div>
              <div className="flex mt-4 justify-center items-center">
                <SearchBlock
                  plholder="Select a Date"
                  paraText="Date"
                  eltype="date"
                />

              </div>
              <div className='flex justify-center items-center mt-4 mb-4'>
                <button className='bg-cyan-500 text-white text-xs p-3 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out'>
                  Go
                </button>

              </div>
                
                
                
            </div>
      )}
      
    </div>
  );
};

export default searchBar;