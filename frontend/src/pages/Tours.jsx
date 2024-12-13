import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { Container } from "reactstrap";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0); // Sayfa sayısı
  const [page, setPage] = useState(0); // Şu anki sayfa

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getCountTour`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 2); // Burada tourData uzunluğuna göre sayfa sayısını hesaplıyoruz
    setPageCount(pages);
  }, [page, tourCount]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </section>
      <section>
        <Container>
          {loading && <h4>Loading.......</h4>}
          {error && <h4>{error}</h4>}
          {!loading && !error && (
            <>
              <div className="tour__Card-container">
                {tours?.map((tour) => (
                  <div key={tour._id}>
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
            </>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
