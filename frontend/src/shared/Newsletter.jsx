import React from "react";
import "./Newsletter.css";
import { Container } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container className="newsletterContainer">
        <div>
          <div>
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Stay updated with the latest travel tips, destinations, and offers. Subscribe to receive exclusive content directly to your inbox!
              </p>
            </div>
          </div>
          <div>
            <div className="newsletter__img">
              <img src={maleTourist} alt="Male Tourist" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
