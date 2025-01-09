import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: "/images/weather.png",
    title: "Calculate Weather",
    desc: "Get real-time weather updates and forecast for your location with accurate and up-to-date information.",
  },
  {
    imgUrl: "/images/guide.png",
    title: "Best Tour Guide",
    desc: "Discover the best tour guides for your next adventure. Get expert advice and recommendations for unforgettable travel experiences.",
  },
  {
    imgUrl: "/images/customization.png",
    title: "Customization",
    desc: "Personalize your experience with tailored options. Adjust settings and features to match your preferences and needs.",
  },
];

const ServiceList = () => {
  return (
    <div className="service__list">
      {servicesData.map((item, index) => (
        <div className="service__list__item" key={index}>
          <ServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
