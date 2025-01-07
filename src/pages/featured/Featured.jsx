import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../shared/components/SectionTitle';
import feturedImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {

    return (
        <div className='feature-section'>
            <div className="container mx-auto">
                    <SectionTitle
                      heading="FROM OUR MENU"   
                      subHeading="---Check it out---"
                    ></SectionTitle>
                    <div>
                    <div className="hero my-20">
  <div className="w-2/3 grid md:grid-cols-2 items-center justify-between gap-10"> 
    <div className='w-full '>
    <img
      src={feturedImg}
      className="" />
    </div>
    <div>
    <p className="">
    March 20, 2023
      </p>
      <h3 className="py-2 font-semibold">
      WHERE CAN I GET SOME?
      </h3>
      <p className="mb-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
      </p> 
      <button className="btn btn-primary border-0 border-b-2 border-yellow-500 hover:border-orange-500 bg-white text-orange-500 hover:bg-gray-700 ">Read More</button>
    </div>
  </div>
</div>
                    </div>
                </div>
        </div>
    );
};


Featured.propTypes = {

};


export default Featured;
