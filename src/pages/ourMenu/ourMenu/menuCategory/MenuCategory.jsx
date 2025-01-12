import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../../../shared/header/mainHeader/menuItem/MenuItem';
import { Link } from 'react-router-dom';


const MenuCategory = ({items,title}) => {
    return (
   
             <div>
            <div className="my-10 grid grid-cols-2 gap-10">
              {items.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
              ))}
            </div>
            <div className="text-center">
              <Link to={`/shop/${title}`}>
              <button className="btn btn-primary bg-white border-0 border-b-2 border-orange-500 hover:border-orange-500 text-orange-500 hover:bg-gray-700 uppercase">
              ORDER YOUR FAVOURITE FOOD
              </button>
              </Link>

            </div>
          </div>

    );
};


MenuCategory.propTypes = {

};


export default MenuCategory;
