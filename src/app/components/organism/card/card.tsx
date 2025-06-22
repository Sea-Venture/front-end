import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { SiAccuweather } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import ReadMoreButton from '../../molecule/dashboard/card/readmoreButton';
import EventName from '../../atom/dashboard/card/eventName';
import LocationImage from '../../atom/dashboard/card/locationImage';
import ActivityName from '../../atom/dashboard/card/activityName';
import EventDescription from '../../atom/dashboard/card/eventDescription';
import IconButton from '../../atom/dashboard/card/iconButton';
import { weatherUpdate } from '../../../utils/apiService';
import WeatherCard from '../weather/weatherCard';

interface CardProps {
  imageUrl: string;
  eventName: string;
  locationName: string;
  activityName: string;
  description: string;
  rating: number;
  lat?: number;
  lng?: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  eventName,
  locationName,
  activityName,
  description,
  rating,
  lat,
  lng
}) => {
  const [showWeather, setShowWeather] = useState(false);
  const [weatherData, setWeatherData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleWeatherClick = async () => {
    setShowWeather(true);
    setLoading(true);
    try {
      const newLocation = capitalizeFirstLetter(locationName);
      console.log("Fetching weather for:", newLocation);
      const data = await weatherUpdate({ beach: newLocation });
      setWeatherData(data);
    } catch {
      setWeatherData({ error: "Failed to load weather." });
    }
    setLoading(false);
  };

  const handleCloseWeather = () => {
    setShowWeather(false);
    setWeatherData(null);
  };

  const handleMapClick = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function isWeatherError(obj: unknown): obj is { error: string } {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "error" in obj &&
      typeof (obj as { error: unknown }).error === "string"
    );
  }

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <LocationImage imageUrl={imageUrl} />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <EventName nameText={eventName} locationName={locationName} />
          <div className="flex items-center gap-0 5 ml-auto">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <span className="text-slate-600 ml-1.5">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <ActivityName activityNameText={activityName} />
        </div>
        <EventDescription discriptionPara={description} />
      </div>

      <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
        <IconButton icon={<FaLocationDot className="w-4 h-4" />} onClick={handleMapClick} />
        <IconButton icon={<SiAccuweather className="w-4 h-4" />} onClick={handleWeatherClick} />
      </div>

      <div className="px-4 pb-4 pt-0 mt-2">
        <ReadMoreButton buttonText="Read More"/>
      </div>

      {/* Weather Modal */}
      {showWeather && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-[400px] max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseWeather}
            >
              ✕
            </button>
            {loading && <div>Loading weather...</div>}
            {!loading && weatherData && (
              <WeatherCard weather={weatherData} location={capitalizeFirstLetter(locationName)} />
            )}
            {!loading && isWeatherError(weatherData) && (
              <div className="text-red-500">{weatherData.error}</div>
            )}
          </div>
        </div>
      )}

      {showMap && lat && lng && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-[400px] h-[400px] flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseMap}
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-2">Location Map</h2>
            <iframe
              title="location-map"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default Card;