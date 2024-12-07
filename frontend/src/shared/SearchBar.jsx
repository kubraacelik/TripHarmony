import { React, useState, useRef } from "react";
import "./SearchBar.css";
import { Col } from "reactstrap";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      setErrorMessage("All fields are required!");

      // 5 saniye sonra hata mesajını kaldır
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return;
    }

  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <div className="form">
          <div className="form__group">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where Are You Going?"
                ref={locationRef}
              />
            </div>
          </div>
          <div className="form__group">
            <span>
              <i className="fa-solid fa-route"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </div>
          <div className="form__group">
            <span>
              <i className="fa-solid fa-user-group"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </div>
          <span
            className="search__icon"
            type="submit"
            onClick={searchHandler}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        {/* Hata mesajı */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </Col>
  );
};

export default SearchBar;
