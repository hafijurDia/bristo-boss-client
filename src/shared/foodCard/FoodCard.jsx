import React from "react";
import PropTypes from "prop-types";
import UseAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {name,recipe,price,image, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();

    const handleAddToCart = (food) => {
      if (user && user.email) {
        //todo send data to database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "Your are not logged in!",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            //send user to login page
            navigate('/login', {state:{from: location}});
          }
        });
      }
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
        <h4>Heleo</h4>
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
