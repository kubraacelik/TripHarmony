import React from "react";
import ServiceCard from "./ServiceCard";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get real-time weather updates and forecast for your location with accurate and up-to-date information.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Discover the best tour guides for your next adventure. Get expert advice and recommendations for unforgettable travel experiences.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Personalize your experience with tailored options. Adjust settings and features to match your preferences and needs.",
  },
];

const ServiceList = () => {
  return (
    <div className="service__list">
      {servicesData.map((item, index) => (
        <div key={index}>
          <ServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
