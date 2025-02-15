import { useInfiniteQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useDonors = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data = [],
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["donors"],
    queryFn: async ({ pageParam }) => {
      const res = await axiosPublic.get(
        `/donors?email=${user.email}&cursor=${pageParam}`
      );
      return res.data.pages;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return {
    data,
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
