import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const axiosSecure = UseAxiosSecure();
  // Using TanStack React Query
  const { data: menu = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data; // Return the menu data
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
