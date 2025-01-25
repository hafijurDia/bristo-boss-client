import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../shared/components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import UseAxiosSecure from '../../../../hooks/useAxiosSecure';
import UseAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(image_hosting_api)


const UpdateItem = () => {
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const {name, recipe, image,category, price, _id } = useLoaderData();

    
    const {register,handleSubmit,reset, formState: { errors },} = useForm();
        
          const onSubmit = async(data) => {
            console.log(data);
            //image upload to imgbb and get url
            const imageFile ={image: data.recipeImage[0]}
            const res = await axiosPublic.post(image_hosting_api,imageFile, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            if (res.data.success) {
                const menuItem = {
                    name: data.recipeName,
                    recipe: data.recipeDetails,
                    image: res.data.data.display_url,
                    category: data.category,
                    price: parseFloat(data.price),
                }
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
                if (menuRes.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.recipeName} is updated successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
          };
    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Add Items</title>
              </Helmet>
              <SectionTitle
                subHeading="---What's new?---"
                heading="UPDATE ITEM"
              ></SectionTitle>
              <div className="w-4/5 rounded-sm mx-auto">
              
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md p-5 mt-10">
                {/* Recipe Name */}
                <div className="mb-4">
                  <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-2">
                    Recipe Name*
                  </label>
                  <input
                    type="text"
                    defaultValue={name}
                    id="recipeName"
                    {...register("recipeName", { required: "Recipe name is required" })}
                   
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.recipeName && <p className="text-red-500 text-sm mt-1">{errors.recipeName.message}</p>}
                </div>
        
                {/* Category and Price */}
                <div className="mb-4 flex space-x-4">
                  <div className="w-1/2">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category*
                    </label>
                    <select
                      id="category"
                      defaultValue={category}
                      {...register("category", { required: "Category is required" })}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select category</option>
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="dessert">Dessert</option>
                      <option value="soup">Soup</option>
                      <option value="drinks">Drink</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Price*
                    </label>
                    <input
                      type="number"
                      defaultValue={price}
                      id="price"
                      {...register("price", { required: "Price is required" })}
                      placeholder="Enter price"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                  </div>
                </div>
        
                {/* Recipe Details */}
                <div className="mb-4">
                  <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Recipe Details*
                  </label>
                  <textarea
                    id="recipeDetails"
                    defaultValue={recipe}
                    {...register("recipeDetails", { required: "Recipe details are required" })}
                    rows="4"
                    placeholder="Enter recipe details"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                  {errors.recipeDetails && <p className="text-red-500 text-sm mt-1">{errors.recipeDetails.message}</p>}
                </div>
        
                {/* File Upload */}
                <div className="mb-6">
                  <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload New Recipe Image
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    {...register("recipeImage", { required: "Recipe image is required" })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.recipeImage && <p className="text-red-500 text-sm mt-1">{errors.recipeImage.message}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                    Old Image
                  </label>
                  <img className='w-[100px]' src={image} alt="" />

                </div>
        
                {/* Submit Button */}
                <button
                
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                   <span className="flex justify-center gap-3">Update Item <FaUtensils></FaUtensils></span>
                </button>
              </form>
              </div>
            </div>
    );
};




export default UpdateItem;
