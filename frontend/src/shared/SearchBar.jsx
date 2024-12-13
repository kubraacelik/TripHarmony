import { useState, useRef } from "react";
import "./SearchBar.css";
import { Col } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    // Form alanlarının kontrolü
    if (location === "" || distance === "" || maxGroupSize === "") {
      setErrorMessage("All fields are required!");
      return; // Boş alan varsa işlemi sonlandır
    }

    // Hata mesajını temizle
    setErrorMessage("");

    // API'den verileri al
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    const result = await res.json();

    // API'den alınan sonuçla navigasyona yönlendirme
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
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
          <span className="search__icon" type="submit" onClick={searchHandler}>
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
