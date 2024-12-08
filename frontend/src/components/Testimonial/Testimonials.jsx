import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
import ava05 from "../../assets/images/ava-5.jpg";
import ava06 from "../../assets/images/ava-6.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    centerMode: false, // Her sayfada 3 yorum gösterdiğimiz için center mode'yi kapatabiliriz
    dots: true,
    arrows: true,
    slidesToShow: 3, // Aynı anda 3 yorum göster
    slidesToScroll: 1, // Bir defada bir slayt kaydır
    spaceBetween: 20, // Slaytlar arasındaki boşluk
  };

  return (
    <div className="testimonials-container">
      <Slider {...settings}>
        <div className="testimonial">
          <p className="testimonial-text">
            Since I started using this service, I've noticed a huge difference.
            The processes are faster and more efficient, and the customer
            support is outstanding.
          </p>
          <div className="testimonial-author">
            <img src={ava01} className="author-img" alt="John Doe" />
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
            <img src={ava02} className="author-img" alt="Jane Smith" />
            <div className="author-info">
              <h5 className="author-name">Samantha O'Kelly</h5>
              <p className="author-role">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            Customer support is fantastic. Whenever I have an issue, they
            resolve it quickly. I use this product for both my business and
            personal projects.
          </p>
          <div className="testimonial-author">
            <img src={ava03} className="author-img" alt="Sara Lee" />
            <div className="author-info">
              <h5 className="author-name">Mia Evans</h5>
              <p className="author-role">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "This product has revolutionized how I manage my daily tasks. The
            intuitive design and features make everything so much easier. Highly
            recommend it!"
          </p>
          <div className="testimonial-author">
            <img src={ava04} className="author-img" alt="Emily Watson" />
            <div className="author-info">
              <h5 className="author-name">Barbara Miller</h5>
              <span className="author-role">Entrepreneur</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            This app has made my life so much easier. It's fast, reliable, and
            helps me get things done more efficiently. I can rely on it for both
            personal and work-related tasks, and it never lets me down. 
          </p>
          <div className="testimonial-author">
            <img src={ava05} className="author-img" alt="Emily Watson" />
            <div className="author-info">
              <h5 className="author-name">Jessica Rodriguez</h5>
              <span className="author-role">Entrepreneur</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            Great service! It's really simple to use and has helped me stay
            organized. I can easily manage my tasks and keep track of everything
            in one place. It has definitely improved my productivity!
          </p>
          <div className="testimonial-author">
            <img src={ava06} className="author-img" alt="John Smith" />
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
