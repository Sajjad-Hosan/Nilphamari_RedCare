import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useState } from "react";

const useDonors = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [page, setPage] = useState(0);
  const { data, error, isPending, isError, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["donors", page],
      // initialPageParam: 0, // Start with null cursor
      queryFn: async () => {
        const res = await axiosPublic.post(
          `/donors?email=${user?.email}&cursor=${page}&limit=10`
        );
        return res.data; // Directly return API response
      },
      placeholderData: keepPreviousData,
    });

  return {
    data,
    donors: data?.donors,
    count: data?.count,
    error,
    isPending,
    isError,
    isFetching,
    isPlaceholderData,
    page,
    setPage,
  };
};

export default useDonors;
