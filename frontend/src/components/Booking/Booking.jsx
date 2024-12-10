import React,{useState} from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const [credentials, setCredentials] = useState({
    userId:"01",
    userEmail:"example@gmail.com",
    fullName:"",
    phone:"",
    guestSize:1,
    bookAt:""
    })

  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target}))
  };
  return (
    <div className="booking">
      <div className="booking__top">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="fa-solid fa-star"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="numberContainer">
            <input
              style={{ marginRight: "10px" }}
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="">
              ${price} <i class="fa-solid fa-xmark"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>$10</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>$109</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="form__btn btn w-100 mt-4">Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
