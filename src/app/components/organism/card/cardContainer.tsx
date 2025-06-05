import React from "react";
import Card from "./card";

interface CardDetail {
  imageUrl: string;
  eventName: string;
  locationName: string;
  activityName: string;
  description: string;
  lat?: number;
  lng?: number;
  rating?: number;
}

const CardContainer = ({ cardDetails }: { cardDetails: CardDetail[] }) => {
  return (
    <>
      {console.log("Card Details Card Laout:", cardDetails)}
      <div className="grid grid-cols-1 gap-4 p-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            eventName={card.eventName}
            locationName={card.locationName}
            activityName={card.activityName}
            description={card.description}
            lat={card.lat}
            lng={card.lng}
            rating={card.rating ?? 4.5} // fallback if rating is not provided
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;