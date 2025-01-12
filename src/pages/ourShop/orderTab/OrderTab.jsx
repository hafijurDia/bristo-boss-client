import React from "react";
import PropTypes from "prop-types";
import FoodCard from "../../../shared/foodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './OrderTab.css'
// Import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items, loading }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Chunk items into groups of 6 for pagination
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    chunkedItems.push(items.slice(i, i + 4));
  }

  return (
    <div>
      {loading ? (
        <div className="text-center my-10 flex flex-col justify-center items-center">
          <div className="loader" /> {/* Replace with a spinner or animation */}
        </div>
      ) : (
        <div>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {chunkedItems.map((chunk, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
                  {chunk.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default OrderTab;
