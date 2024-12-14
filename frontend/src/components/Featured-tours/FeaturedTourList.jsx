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

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">An error occurred: {error}</div>}
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
