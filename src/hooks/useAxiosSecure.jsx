import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/", // Ensure this URL matches your backend server
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuth();

  // Request interceptor to add the authorization header
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors globally
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that falls within the range of 2xx causes this function to trigger
      return response;
    },
    async (error) => {
      const status = error.response?.status;

      // Handle 401 and 403 errors: Log out the user and navigate to login
      if (status === 401 || status === 403) {
        await logOut(); // Ensure `logOut` handles token clearing and other cleanups
        navigate("/login", { replace: true }); // Replace to avoid back-navigation to the restricted page
      }

      // Forward the error to the calling function
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
