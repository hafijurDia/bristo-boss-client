import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import BristoBoss from '../../bistroBoss/BristoBoss';
import PopularItem from '../popularItem/PopularItem';
import CallUs from '../../../shared/callUs/CallUs';
import ReconmendedItem from '../recomendedItem/ReconmendedItem';
import Featured from '../../featured/Featured';
import Testimonial from '../testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <>
           <Helmet>
                <title>Bistro Boss | Home</title>
              </Helmet>
           <Banner></Banner>
           <Category></Category>
           <BristoBoss></BristoBoss>
           <PopularItem></PopularItem>
           <CallUs></CallUs>
           <ReconmendedItem></ReconmendedItem>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </>
    );
};


Home.propTypes = {

};


export default Home;
