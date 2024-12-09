import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
import Newsletter from "../shared/Newsletter";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0); // Sayfa sayısı
  const [page, setPage] = useState(0); // Şu anki sayfa

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4); // Burada tourData uzunluğuna göre sayfa sayısını hesaplıyoruz
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </section>
      <section>
        <div className="tour-cards-container">
          {tourData?.map((tour, index) => (
            <div className="tour-card-item" key={index}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <span
              key={number}
              className={page === number ? "active__page" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </span>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
