import React from "react";
import Card from "./card";

const CardContainer = ({ cardDetails }: { cardDetails: any[] }) => {
  return (
    console.log("Card Details Card Laout:", cardDetails),
    <div className="grid grid-cols-1 gap-4 p-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {cardDetails.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.locationImage}
          eventName={card.eventName}
          locationName={card.locationName}
          activityName={card.activityName}
          description={card.description}
          lat={card.lat}
          lng={card.lng}
          rating={4.5} // You can replace this with actual rating if available
        />
      ))}
      
    </div>
  );
};

export default CardContainer;