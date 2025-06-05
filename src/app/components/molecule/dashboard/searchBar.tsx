import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBlock from "../../atom/dashboard/searchbar/searchBlock";
import MiniSearch from "../../molecule/dashboard/minisearch/searchBlock";
import {
  fetchLocations,
  fetchActivities,
  fetchActivityById,
  fetchLocationById,
  fetchEventByActivityId,
  fetchEventByLocationId,
  fetchEventByLocationIdAndActivityId,
} from "../../../utils/apiService";
import { CardDetail } from "@/app/types/CardDetail";


interface EventItem {
  location_id: string;
  activity_id: string;
  name: string;
  description: string;
}

const SearchBar = ({ setCardDetails }: { setCardDetails: React.Dispatch<React.SetStateAction<CardDetail[]>> }) => {
  const [locations, setLocations] = useState<{ id: string; name: string }[]>([]);
  const [activities, setActivities] = useState<{ id: string; name: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null); 
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openMiniSearch = () => {
    setShowMiniSearch(!showMiniSearch);
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [locationsData, activitiesData] = await Promise.all([
          fetchLocations(),
          fetchActivities(),
        ]);
        setLocations(locationsData);
        setActivities(activitiesData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data.");
      }
    };

    loadData();
  }, []);

  const handleSearch = async () => {
    try {
      let data: EventItem[] = [];
      if (selectedLocation && selectedActivity) {
        data = await fetchEventByLocationIdAndActivityId(selectedLocation, selectedActivity) as unknown as EventItem[];
      } else if (selectedLocation) {
        data = await fetchEventByLocationId(selectedLocation) as unknown as EventItem[];
      } else if (selectedActivity) {
        data = await fetchEventByActivityId(selectedActivity) as unknown as EventItem[];
      } else {
        setError("Please select at least one filter.");
        return;
      }

      const extractedData = data.map((item) => ({
        locationId: item.location_id,
        activityId: item.activity_id,
        name: item.name,
        description: item.description,
      }));

      const cardDetails: CardDetail[] = [];
      for (const item of extractedData) {
        const locationDetails = await fetchLocationById(item.locationId) as { name: string; pic: string; lat: number; lng: number };
        const activityDetails = await fetchActivityById(item.activityId) as { name: string };

        cardDetails.push({
          eventName: String(item.name),
          description: String(item.description),
          locationName: String(locationDetails.name),
          imageUrl: String(locationDetails.pic), // <-- changed from locationImage to imageUrl
          activityName: String(activityDetails.name),
          lat: Number(locationDetails.lat),
          lng: Number(locationDetails.lng),
        });
      }

      setCardDetails(cardDetails);

      console.log("Card Details:", cardDetails);

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed.");
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="hidden sm:flex items-center justify-center bg-white dark:bg-gray-800 dark:shadow-gray-600 shadow-md rounded-full text-sm
                      xl:w-[750px] xl:h-[55px] mx-auto
                      lg:w-[500px] lg:h-[50px]
                      md:w-[250px] md:h-[45px]">

        <SearchBlock
          plholder="Select a location"
          paraText="Location"
          eltype="select"
          options={locations.map((location) => location.name)} // Pass names for display
          onChange={(e) => {
            const target = e.target as HTMLSelectElement;
            const selected = locations.find((location) => location.name === target.value);
            setSelectedLocation(selected ? selected.id : null); // Store the ID
          }}
        />
        <SearchBlock
          plholder="Select your activity"
          paraText="Activity"
          eltype="select"
          options={activities.map((activity) => activity.name)}
          onChange={(e) => {
            const target = e.target as HTMLSelectElement;
            const selected = activities.find((activity) => activity.name === target.value);
            setSelectedActivity(selected ? selected.id : null);
          }}
        />
        <SearchBlock
          plholder="Select a Date"
          paraText="Date"
          eltype="date"
        />
        <div className="flex flex-col justify-center px-6 w-[22%] relative hover:w-52 hover:bg-gray-100 rounded-full transition border-l border-gray-300">
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-cyan-500 text-white text-xs p-2 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out"
          >
            <FaSearch className="w-5 h-5" />
          </button>
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
              plholder="Select a location"
              paraText="Location"
              eltype="select"
              options={locations.map((location) => location.name)}
              onChange={(e) => {
                const target = e.target as HTMLSelectElement;
                const selected = locations.find((location) => location.name === target.value);
                setSelectedLocation(selected ? selected.id : null);
              }}
          />
          </div>
          <div className="flex mt-4 justify-center items-center">
            <SearchBlock
                plholder="Select your activity"
                paraText="Activity"
                eltype="select"
                options={activities.map((activity) => activity.name)}
                onChange={(e) => {
                  const target = e.target as HTMLSelectElement;
                  const selected = activities.find((activity) => activity.name === target.value);
                  setSelectedActivity(selected ? selected.id : null);
                }}
            />
          </div>
          <div className="flex mt-4 justify-center items-center">
            <SearchBlock
              plholder="Select a Date"
              paraText="Date"
              eltype="date"
            />
          </div>
          <div className="flex justify-center items-center mt-4 mb-4">
            <button className="bg-cyan-500 text-white text-xs p-3 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out">
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;