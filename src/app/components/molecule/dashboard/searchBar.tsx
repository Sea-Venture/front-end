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

const SearchBar = ({
  setCardDetails,
}: {
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetail[]>>;
}) => {
  const [locations, setLocations] = useState<{ id: string; name: string }[]>([]);
  const [activities, setActivities] = useState<{ id: string; name: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openMiniSearch = () => setShowMiniSearch((prev) => !prev);
  const toggleDropDown = () => setShowDropDown((prev) => !prev);

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
          imageUrl: String(locationDetails.pic),
          activityName: String(activityDetails.name),
          lat: Number(locationDetails.lat),
          lng: Number(locationDetails.lng),
        });
      }

      setCardDetails(cardDetails);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed.");
    }
  };

  return (
    <div className="relative w-full">
      {error && (
        <p className="text-red-500 text-xs text-center mb-2">{error}</p>
      )}
      {/* Desktop Searchbar */}
      <div className="hidden sm:flex items-center justify-center bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-full text-sm
                      xl:w-[750px] xl:h-[55px] mx-auto
                      lg:w-[500px] lg:h-[50px]
                      md:w-[350px] md:h-[45px]
                      border border-gray-200 dark:border-gray-700 transition-all duration-300 gap-4">
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
        <div className="flex flex-col justify-center px-6 w-[22%] relative">
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Mobile Searchbar */}
      <div className="flex sm:hidden justify-center items-center">
        <button
          className="bg-cyan-500 text-white p-3 rounded-full shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          aria-label="Open search"
          onClick={openMiniSearch}
        >
          <FaSearch className="w-6 h-6" />
        </button>
        {showMiniSearch && (
          <div className="absolute mt-36 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-80 z-40 p-4">
            <MiniSearch searchText="Search" onClick={toggleDropDown} />
          </div>
        )}
      </div>
      {/* Dropdown for mobile */}
      {showDropDown && (
        <div className="absolute mt-48 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-80 sm:hidden z-40 p-4">
          <div className="flex flex-col gap-4">
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
            <button
              className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
              onClick={handleSearch}
              aria-label="Search"
            >
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;