import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../shared/components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import ratings from '../../../assets/icon/ratings.png';
import qoute from '../../../assets/icon/quote-left.png';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='my-20'>
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
                        <SwiperSlide>
                           
                         <div className='w-2/3 flex-none'>
                         <div className='reviewbox flex items-center justify-center'>
                                <img src={ratings} className='' alt="" />
                            </div>
                            <div className='qoutebox flex items-center justify-center mt-5'>
                                <img src={qoute} alt="" />
                            </div>
                            <div className='py-5'> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam commodi architecto dolore adipisci dolorum quae, illum aliquid autem, possimus tenetur voluptatibus voluptate corporis iste alias. Modi a numquam atque.</p>
                            </div>
                            <div>
                                <p className='uppercase text-orange-500 font-semibold'> JANE DOE</p>
                            </div>
                         </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           
                         <div className='w-2/3 flex-none'>
                         <div className='reviewbox flex items-center justify-center'>
                                <img src={ratings} className='' alt="" />
                            </div>
                            <div className='qoutebox flex items-center justify-center mt-5'>
                                <img src={qoute} alt="" />
                            </div>
                            <div className='py-5'> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam commodi architecto dolore adipisci dolorum quae, illum aliquid autem, possimus tenetur voluptatibus voluptate corporis iste alias. Modi a numquam atque.</p>
                            </div>
                            <div>
                                <p className='uppercase text-orange-500 font-semibold'> JANE DOE</p>
                            </div>
                         </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           
                         <div className='w-2/3 flex-none'>
                         <div className='reviewbox flex items-center justify-center'>
                                <img src={ratings} className='' alt="" />
                            </div>
                            <div className='qoutebox flex items-center justify-center mt-5'>
                                <img src={qoute} alt="" />
                            </div>
                            <div className='py-5'> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam commodi architecto dolore adipisci dolorum quae, illum aliquid autem, possimus tenetur voluptatibus voluptate corporis iste alias. Modi a numquam atque.</p>
                            </div>
                            <div>
                                <p className='uppercase text-orange-500 font-semibold'> JANE DOE</p>
                            </div>
                         </div>
                        </SwiperSlide>
                        
                    
                    </Swiper>
                </div>
                    </div>
        </div>
        </div>
    );
};


Testimonial.propTypes = {

};


export default Testimonial;
