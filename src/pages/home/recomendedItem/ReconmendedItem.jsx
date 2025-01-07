import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../shared/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const ReconmendedItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const reconmendedItem = data.filter(
          (item) => item.category === "salad"
        );
        setMenu(reconmendedItem);
      });
  }, []);
  console.log(menu);
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <SectionTitle
          heading="CHEF RECOMMENDS"
          subHeading="---Should Try---"
        ></SectionTitle>
        <div>
          <div className="my-20">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              autoplay={{
                delay: 3000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // Breakpoints for responsiveness
                320: {
                  // Mobile devices
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  // Small tablets
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  // Laptops
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  // Desktops
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay]} // Include Autoplay in modules
              className="mySwiper"
            >
              {menu.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="">
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-lg font-semibold">{item.name}</h2>
                      <p className="text-base">{item.recipe}</p>
                      <div className="card-actions">
                        <button className="btn btn-primary bg-white border-0 border-b-2 border-orange-500 hover:border-orange-500 text-orange-500 hover:bg-gray-700 uppercase">
                          Add to card
                        </button>
                      </div>
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

ReconmendedItem.propTypes = {};

export default ReconmendedItem;
