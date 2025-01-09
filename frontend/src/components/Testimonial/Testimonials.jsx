import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Slider'ı buraya import edin
import "slick-carousel/slick/slick.css"; // Slick CSS dosyasını import edin
import "slick-carousel/slick/slick-theme.css"; // Slick tema CSS dosyasını import edin

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSlidesToShow(1); // Telefon boyutunda 1 öğe göster
      } else if (width <= 1024) {
        setSlidesToShow(2); // Tablet boyutunda 2 öğe göster
      } else {
        setSlidesToShow(3); // Diğer cihazlarda 3 öğe göster
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    centerMode: false,
    dots: true,
    arrows: true,
    slidesToShow: slidesToShow, // responsive olarak güncelleniyor
    slidesToScroll: 1,
    spaceBetween: 20,
  };

  return (
    <div className="testimonials-container">
      <Slider {...settings}>
        <div className="testimonial">
          <p className="testimonial-text">
            Since I started using this service, I've noticed a huge difference.
            The processes are faster, more efficient, the customer
            support is outstanding.
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-1.jpg" className="author-img" alt="John Doe" />
            <div className="author-info">
              <h5 className="author-name">Harry Smith</h5>
              <p className="author-role">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            The system is very easy to use and user-friendly. I noticed an
            increase in productivity within a short time. I highly recommend
            this product!
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-2.jpg" className="author-img" alt="Jane Smith" />
            <div className="author-info">
              <h5 className="author-name">Samantha O'Kelly</h5>
              <p className="author-role">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            Customer support is fantastic. Whenever I have an issue, they
            resolve it quickly. I use this product for both my business.
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-3.jpg" className="author-img" alt="Sara Lee" />
            <div className="author-info">
              <h5 className="author-name">Mia Evans</h5>
              <p className="author-role">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            This product has revolutionized how I manage my daily tasks. The
            intuitive design and features make everything so much easier.
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-4.jpg" className="author-img" alt="Emily Watson" />
            <div className="author-info">
              <h5 className="author-name">Barbara Miller</h5>
              <span className="author-role">Entrepreneur</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            This app has made my life so much easier. It's fast, reliable. I can rely on it for both
            personal and work-related task.
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-5.jpg" className="author-img" alt="Emily Watson" />
            <div className="author-info">
              <h5 className="author-name">Jessica Rodriguez</h5>
              <span className="author-role">Entrepreneur</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            It's really simple to use and has helped me stay
            organized. I can easily manage my tasks and keep track of everything
            in one place.
          </p>
          <div className="testimonial-author">
            <img src="/images/ava-6.jpg" className="author-img" alt="John Smith" />
            <div className="author-info">
              <h5 className="author-name">Reece Garcia</h5>
              <span className="author-role">Designer</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
