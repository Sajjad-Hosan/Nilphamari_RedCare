import { useInfiniteQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useDonors = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["donors"],
    queryFn: async ({ pageParam = null }) => {
      const res = await axiosPublic.post(
        `/donors?email=${user?.email}&cursor=${pageParam}&limit=10`
      );
      return res.data; // Directly return API response
    },
    initialPageParam: null, // Start with null cursor
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor || null; // Use nextCursor for pagination
    },
  });

  return {
    data,
    donors: data?.pages?.flatMap((page) => page.donors) || [], // Flatten donors list
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  };
};

export default useDonors;
