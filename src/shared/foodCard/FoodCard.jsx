import React from "react";
import PropTypes from "prop-types";

const FoodCard = ({item}) => {
    const {name,recipe,price,image} = item;
    const handleAddToCart = (food) => {
      console.log(food);
    }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-0 pt-0">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="absolute right-3 top-3 bg-gray-800 rounded-sm text-lg text-white px-1">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
        <button onClick={()=>handleAddToCart(item)} className="btn btn-primary bg-white border-0 border-b-2 border-orange-500 hover:border-orange-500 text-orange-500 hover:bg-gray-700 uppercase">
                Add To Card
              </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {};

export default FoodCard;
