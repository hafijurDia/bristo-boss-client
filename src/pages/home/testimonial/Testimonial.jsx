import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../shared/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ratings from "../../../assets/icon/ratings.png";
import qoute from "../../../assets/icon/quote-left.png";
import "./Testimonial.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <SectionTitle
          heading="TESTIMONIALS"
          subHeading="---What Our Clients Say---"
        ></SectionTitle>
        <div>
          <div className="my-20">
            <Swiper
              autoplay={{
                delay: 3000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              modules={[Pagination, Autoplay]}
              navigation={true} // Include Autoplay in modules
              className="mySwiper"
            >
              {reviews.map((item) => (
                <SwiperSlide>
                  <div className="w-2/3 flex-none">
                    <div className="reviewbox flex items-center justify-center">
                      <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                    </div>
                    <div className="qoutebox flex items-center justify-center mt-5">
                      <img src={qoute} alt="" />
                    </div>
                    <div className="py-5">
                      <p>
                       {item.details}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-orange-500 font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
