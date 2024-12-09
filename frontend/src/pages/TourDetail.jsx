import React from "react";
import "../styles/tour-detail.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";

const TourDetail = () => {
  const { id } = useParams();
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

  return (
    <section className="tour-detail-section">
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
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
                    {totalRating > 0 && <span>({reviews.length} reviews)</span>}
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
                  <span className="tour__group-size">
                    <i class="fa-solid fa-person"></i> {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour__reviews">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span>
                      1 <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      2 <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      3 <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      4 <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      5 <i class="fa-solid fa-star"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input type="text" placeholder="Share your thoughts" />
                    <button className="btn primary__btn text-white" type="submit">Submit</button>
                  </div>
                </Form>

                <ListGroup>
                  
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetail;
