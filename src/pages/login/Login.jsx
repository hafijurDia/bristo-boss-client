import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import loginImg from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { TiSocialFacebook } from "react-icons/ti";
import { RiGoogleLine } from "react-icons/ri";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../socialLogin/SocialLogin";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location  = useLocation();
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || "/";
    console.log(location.state);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace:true});
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
          });

    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }
  return (
    <div 
    style={{
        backgroundImage: `url(${loginBg})`,
        height: "100%", // Ensures full height
        
      }}
    >
        <Helmet>
                <title>Bistro Boss | Login</title>
                </Helmet>
        <div className="container mx-auto">
        <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side: Image Section */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
        <img
          src={loginImg}
          alt="Login Illustration"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right Side: Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

         <form onSubmit={handleLogin}>
             {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          {error?<><p className="text-base text-red-700">{'Your username or password wrong!'}</p></>:<></>}
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="mb-4">
            <div className="bg-gray-200 rounded-lg py-3 px-4 text-center">
            < LoadCanvasTemplate />
            </div>
          </div>
          <div className="mb-4">
           
            <input
              type="text"
              name="captcha"
              id="captcha"
              onBlur={handleValidCaptcha}
              placeholder="Type captcha here"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
           
         </div>

          {/* Sign In Button */}
          <input disabled={disabled} type="submit" value="Login" className="w-full btn bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600" />
           
         </form>

          {/* New Here? Create Account */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              New here?{" "}
              <Link to="/signup">Create an account</Link>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
        <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
