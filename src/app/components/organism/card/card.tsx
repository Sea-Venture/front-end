import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { SiAccuweather } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import ReadMoreButton from '../../molecule/dashboard/card/readmoreButton';
import EventName from '../../atom/dashboard/card/eventName';
import LocationImage from '../../atom/dashboard/card/locationImage';
import ActivityName from '../../atom/dashboard/card/activityName';
import EventDescription from '../../atom/dashboard/card/eventDescription';
import IconButton from '../../atom/dashboard/card/iconButton';

interface CardProps {
  imageUrl: string;
  eventName: string;
  locationName: string;
  activityName: string;
  description: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, eventName, locationName, activityName, description, rating }) => {
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
        <IconButton icon={<FaLocationDot className="w-4 h-4" />} />
        <IconButton icon={<SiAccuweather className="w-4 h-4" />} />
      </div>

      <div className="px-4 pb-4 pt-0 mt-2">
        <ReadMoreButton buttonText="Read More"/>
      </div>
    </div>
  );
};

export default Card;