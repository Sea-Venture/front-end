
import React from "react";
import Hero2 from "../molecule/hero2";

const hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-12 bg-white">
      <div className="w-full mt-24 mb-60">
        <Hero2
          heading="Discover Your Perfect Beach in Sri Lanka"
          paragraph="At Sea Ventures, we harness the power of machine learning to recommend the best beaches tailored to your activities. Whether you're looking for sunny shores for a beach party or ideal surf conditions, we've got you covered."
          button1="Explore" 
          button2="Learn More" popupContent={undefined}
        />
      </div>
    </div>
  );
};

export default hero2
