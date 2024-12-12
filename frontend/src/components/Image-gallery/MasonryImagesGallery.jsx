import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import "./MasonGallery.css"; 

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            className="masonry__img"
            src={item}
            key={index}
            alt={`Gallery Image ${index + 1}`}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
