import React from "react";
import "../styles/home.css";
import { Container } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          {/* Main Content and Images */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <div className="hero__subtitle-desc">
                  <Subtitle subtitle={"Know Before You Go"} />
                </div>
                <img src={worldImg} alt="world icon" />
              </div>
              <h1>
                Traveling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Exploring new places broadens your horizons and offers
                unforgettable experiences. Whether it's nature's beauty, ancient
                history, or diverse cultures, travel enriches your life in ways
                words can't describe. Step out of your comfort zone and discover
                endless possibilities.
              </p>
            </div>

            {/* Hero Images */}
            <div className="hero__images">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
              <div className="hero__img-box">
                <video src={heroVideo} alt="" controls />
              </div>
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </div>
          </div>

          {/* SearchBar Section */}
          <div className="searchBar">
            <SearchBar />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="services__container">
            <div className="services__text">
              <h5 className="services__subtitle">What we serve?</h5>
              <h2 className="services__title">We offer our best services</h2>
            </div>
            <ServiceList />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
