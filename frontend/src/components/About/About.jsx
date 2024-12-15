import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT US</h1>
      <p className="about-description">
        Welcome to <b>TRIPHARMONY</b>! Since our inception in 2024, our mission has
        been to provide an exceptional user experience, empowering individuals
        and businesses to achieve their goals with ease. We are dedicated to
        maintaining the highest standards of quality, fostering innovation, and
        ensuring customer satisfaction at every step. With a relentless
        commitment to excellence, we continually evolve to meet the needs of our
        users, offering cutting-edge solutions and personalized support.
      </p>
      
      <img src="/images/about-us.jpg" alt="About Us" className="about-image" />
      
      <div className="about-highlight">
        <h2 className="highlight-title">Why Choose Us?</h2>
        <ul className="highlight-list">
          <li>Innovative solutions tailored for you</li>
          <li>Experienced and dedicated team</li>
          <li>Commitment to excellence</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
