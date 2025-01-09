import React from "react";
import "../styles/home.css";
import { Container } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          {/* Main Content and Images */}
          <div
            className="home-hero"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <div className="hero__subtitle-desc">
                  <Subtitle subtitle={"Know Before You Go"} />
                </div>
                <img src="/images/world.png" alt="world icon" />
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
                <img src="/images/hero-img01.jpg" alt="" />
              </div>
              <div className="hero__img-box">
                <video src="/images/hero-video.mp4" alt="" controls />
              </div>
              <div className="hero__img-box">
                <img src="/images/hero-img02.jpg" alt="" />
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

      <section>
        <div>
          <div>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </div>
          <FeaturedTourList />
        </div>
      </section>

      <section>
        <Container className="experienceContainer">
          <div className="experience-container">
            <div>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> we will serve you
                </h2>
                <p>
                  Over 15 years of expertise in the industry, ensuring
                  successful trips and satisfied clients.
                </p>
              </div>
            </div>

            <div className="counter__wrapper">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </div>
          <div className="experienceImg">
            <div className="experience__img">
              <img src="/images/experience.png" alt="" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            <div>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </div>
            <div>
              <MasonryImagesGallery />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            <div>
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </div>
            <div>
              <Testimonials />
            </div>
          </div>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
