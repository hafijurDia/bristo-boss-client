import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import loginImg from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import { TiSocialFacebook } from "react-icons/ti";
import { RiGoogleLine } from "react-icons/ri";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    createUser(data.email, data.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        reset();
        // ...
        updateUserProfile(data.name, data.photo)
        .then(()=>{
            console.log('user profile info updated')
            navigate("/");
        })
        .catch(error=>{
            console.log(error);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        height: "100%",
      }}
    >
        <Helmet>
        <title>Bistro Boss | Sign Up</title>
        </Helmet>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Side: Image Section */}
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
            <img
              src={loginImg}
              alt="Sign Up Illustration"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Right Side: Sign Up Form Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Input */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phot URL
                  </label>
                  <input
                    type="text"
                    id="photo"
                    {...register("photo", { required: true })}
                    name="photo"
                    placeholder="Place your photo url"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.photo && (
                    <span className="text-red-600">photo is required</span>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,20}$/,
                      })}
                      name="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2 text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password.type === "required"
                        ? "Password is required"
                        : "Password must have at least one uppercase, one lowercase, one special character, and be 6-20 characters long"}
                    </span>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      {...register("confirmPassword", { required: true })}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-2 text-gray-500"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-600">Confirm Password is required</span>
                  )}
                </div>

                {/* Sign Up Button */}
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full btn bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600"
                />
              </form>

              {/* Already Have an Account? */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500 hover:underline">
                    Login
                  </a>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Social Login */}
              <div className="flex justify-center gap-4">
                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <TiSocialFacebook />
                </button>
                <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <RiGoogleLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
