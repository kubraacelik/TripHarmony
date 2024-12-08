import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import "../../shared/TourCard.css"

const FeaturedTourList = () => {
  return (
    <>
    <div className="tour__Card-container">
      {tourData?.map((tour) => (
        <div key={tour.id}>
          <TourCard tour={tour} />
        </div>
      ))}
      </div>
    </>
  );
};

export default FeaturedTourList;
