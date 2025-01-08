import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../shared/components/SectionTitle";
import MenuItem from "../../../shared/header/mainHeader/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import './PopularItem.css'

const PopularItem = () => {
  const [menu, loading] = useMenu(); // Destructure loading state from useMenu
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <SectionTitle
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
        ></SectionTitle>
        {loading ? ( 
          // Show loading spinner or message while data is being fetched
          <div className="text-center my-10 flex flex-col justify-center items-center">
            <div className="loader" /> {/* Replace with a spinner or animation */}
          </div>
        ) : (
          // Show menu items when loading is complete
          <div>
            <div className="my-10 grid grid-cols-2 gap-10">
              {popular.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
              ))}
            </div>
            <div className="text-center">
              <button className="btn btn-primary bg-white border-0 border-b-2 border-orange-500 hover:border-orange-500 text-orange-500 hover:bg-gray-700 uppercase">
                View Full Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PopularItem.propTypes = {};

export default PopularItem;
