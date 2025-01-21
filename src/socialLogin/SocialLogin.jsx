import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import UseAuth from "../hooks/useAuth";
import UseAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signWithGoogle } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signWithGoogle().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        <RiGoogleLine />
      </button>
      <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        <TiSocialFacebook />
      </button>
    </div>
  );
};

export default SocialLogin;
