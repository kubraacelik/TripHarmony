import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-detail.css";
import { Container, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import { AuthContext } from "./../context/AuthContext";

const TourDetail = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");

  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    desc,
    title,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign In");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section className="tour-detail-section">
        <Container>
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">An error occurred: {error}</div>}
          {!loading && !error && (
            <div className="tourDetail-section">
              <div className="tour__content">
                <div className="tour__content-wrapper">
                  <img className="tour__img" src={photo} alt={title} />

                  <div className="tour__info">
                    <h2 className="tour__title">{title}</h2>

                    <div className="tour__rating-location">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffdf00" }}
                        ></i>
                        {avgRating && avgRating !== "NaN"
                          ? avgRating
                          : "No Rating"}{" "}
                        {totalRating > 0 && (
                          <span>({reviews.length} reviews)</span>
                        )}
                      </span>

                      <span className="tour__address">
                        <i className="fa-solid fa-map-location-dot"></i>{" "}
                        {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span className="tour__city">
                        <i className="fa-solid fa-map-pin"></i> {city}
                      </span>
                      <span className="tour__price">
                        <i className="fa-solid fa-dollar-sign"></i> ${price} /
                        per person
                      </span>
                      <span className="tour__price">
                        <i class="fa-solid fa-location-dot"></i> {distance} k/m
                      </span>
                      <span className="tour__group-size">
                        <i class="fa-solid fa-person"></i> {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <i class="fa-solid fa-star"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src="/images/avatar.jpg" alt="" />

                          <div className="review__details">
                            <div className="review_detail">
                              <div className="d-flex align-items-center justify-content-between">
                                <h5 className="review__name">
                                  {review.username}
                                </h5>
                                <p className="review__date">
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>

                              <div className="review__rating d-flex align-items-center">
                                <span>{review.rating}</span>
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "#ffdf00" }}
                                ></i>
                              </div>
                            </div>

                            <h6 className="review__comment">
                              {review.reviewText}
                            </h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </div>
              <div className="tour__booking">
                <Booking tour={tour} avgRating={avgRating} />
              </div>
            </div>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetail;
