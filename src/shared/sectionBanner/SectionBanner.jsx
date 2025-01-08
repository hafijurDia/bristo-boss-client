import React from 'react';
import PropTypes from 'prop-types';

const SectionBanner = ({ bgImg, title, subTitle }) => {
  return (
    <div
      className="our-menu pt-36 pb-16"
      style={{
        backgroundImage: `url(${bgImg})`, // Properly interpolating the img prop
        backgroundSize: 'cover', // Ensures the background image covers the div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <div className="container mx-auto bg-black bg-opacity-55 p-24 rounded-sm">
        <div className="ourmenu-banner text-center">
          <h2 className="text-6xl uppercase text-white font-bold">{title}</h2>
          <p className="text-white">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

SectionBanner.propTypes = {
  img: PropTypes.string.isRequired, // Ensures img is a required string prop
};

export default SectionBanner;
