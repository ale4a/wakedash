// hooks/useInfiniteRestaurants.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { RestaurantCardProps } from "@/types/restaurant";

type RestaurantResponse = {
  data: RestaurantCardProps[];
  nextCursor: string | null;
};

type FetchRestaurantsParams = {
  pageParam: string | null;
};

const fetchRestaurants = async ({ pageParam }: FetchRestaurantsParams): Promise<RestaurantResponse> => {
  const params = new URLSearchParams();
  if (pageParam) params.set("cursor", pageParam);
  params.set("limit", "9");

  const res = await fetch(`/api/restaurants?${params.toString()}`);
  if (!res.ok) throw new Error("Error fetching restaurants");
  return res.json();
};

export const useInfiniteRestaurants = () =>
  useInfiniteQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
