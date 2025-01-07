import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

import './Category.css';
import SectionTitle from '../../../shared/components/SectionTitle';

const Category = () => {
    return (
        <div className='mt-20'>
            <div className="container mx-auto">
                <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                >
                </SectionTitle>
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
                            320: { // Mobile devices
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: { // Small tablets
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: { // Laptops
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: { // Desktops
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination, Autoplay]} // Include Autoplay in modules
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={slide1} alt="Slide 1" />
                            <h3 className="text-white text-4xl absolute bottom-5">Salads</h3>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <img src={slide2} alt="Slide 2" />
                            <h3 className="text-white text-4xl absolute bottom-5">Pizzas</h3>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <img src={slide3} alt="Slide 3" />
                            <h3 className="text-white text-4xl absolute bottom-5">Soups</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide4} alt="Slide 4" />
                            <h3 className="text-white text-4xl absolute bottom-5">Desserts</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide5} alt="Slide 5" />
                            <h3 className="text-white text-4xl absolute bottom-5">Salads</h3>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <img src={slide2} alt="Slide 2" />
                            <h3 className="text-white text-4xl absolute bottom-5">Pizzas</h3>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <img src={slide3} alt="Slide 3" />
                            <h3 className="text-white text-4xl absolute bottom-5">Soups</h3>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {};

export default Category;
