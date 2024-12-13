import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Col, Container } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import "../styles/searchResultList.css";
import Newsletter from "../shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <div className="searchResult-list">
            {data.length == 0 ? (
              <h4 className="text-center">No Tour Found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="searchResult-list-item" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </div>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
