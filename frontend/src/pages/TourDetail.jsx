import React, { useRef, useState } from "react";
import "../styles/tour-detail.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";

const TourDetail = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");

  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

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

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  };

  return (
    <>
      <section className="tour-detail-section">
        <Container>
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
                      {avgRating || "No Rating"}{" "}
                      {totalRating > 0 && (
                        <span>({reviews.length} reviews)</span>
                      )}
                    </span>

                    <span className="tour__address">
                      <i className="fa-solid fa-map-location-dot"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span className="tour__city">
                      <i className="fa-solid fa-map-pin"></i> {city}
                    </span>
                    <span className="tour__price">
                      <i className="fa-solid fa-dollar-sign"></i> ${price} / per
                      person
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
                              <h5 className="review__name">muhib</h5>
                              <p className="review__date">
                                {new Date("10-12-2024").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>

                            <div className="review__rating d-flex align-items-center">
                              <span>5 </span>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#ffdf00" }}
                              ></i>
                            </div>
                          </div>

                          <h6 className="review__comment">Amazing tour</h6>
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
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetail;
