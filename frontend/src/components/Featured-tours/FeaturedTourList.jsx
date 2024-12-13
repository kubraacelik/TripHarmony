import React from "react";
import TourCard from "../../shared/TourCard";
import "../../shared/TourCard.css";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

  console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading..................</h4>}
      {error && <h4>{error}</h4>}
      <div className="tour__Card-container">
        {!loading &&
          !error &&
          featuredTours?.map((tour) => (
            <div key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FeaturedTourList;
