import React from "react";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";

const PageBanner = ({ img, title,subTitle }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="Our Menu"
      strength={-200}
    >
      <div className="our-menu pt-36 pb-16">
        <div className="container mx-auto bg-black bg-opacity-55 p-24 rounded-sm">
          <div className="ourmenu-banner text-center">
            <h2 className="text-6xl uppercase text-white font-bold">
              {title}
            </h2>
            <p className="text-white">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

PageBanner.propTypes = {
  img: PropTypes.string.isRequired, // Ensures img is a required string prop
};

export default PageBanner;
