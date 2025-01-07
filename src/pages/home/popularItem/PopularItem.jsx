import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../shared/components/SectionTitle";
import MenuItem from "../../../shared/header/mainHeader/menuItem/MenuItem";

const PopularItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)});
  }, []);
  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <SectionTitle
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
        ></SectionTitle>
        <div className="my-10  grid grid-cols-2 gap-10">
            {
                menu.map(item => <MenuItem
                key={item._id}
                item={item}
                >
                </MenuItem>)
            }
        </div>
      </div>
    </div>
  );
};

PopularItem.propTypes = {};

export default PopularItem;
