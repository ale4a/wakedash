import { mockRestaurants } from "../data/mockRestaurants";
import { RestaurantCardProps } from "@/types/restaurant";

export const getRestaurantsByCursor = (
  cursor: string | null,
  limit: number
): { data: RestaurantCardProps[]; nextCursor: string | null } => {
  const index = cursor ? mockRestaurants.findIndex(r => r.id === cursor) + 1 : 0;
  const data = mockRestaurants.slice(index, index + limit);
  const nextCursor = data.length === limit ? data[data.length - 1].id : null;

  return { data, nextCursor };
};
