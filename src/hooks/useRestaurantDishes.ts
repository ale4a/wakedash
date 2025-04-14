import { useInfiniteQuery } from "@tanstack/react-query";
import { Dish } from "@/types/dish";

interface DishResponse {
  data: Dish[];
  nextCursor: string | null;
  metadata: {
    total: number;
    restaurantId: string;
  };
}

interface UseRestaurantDishesParams {
  restaurantId: string;
  searchTerm?: string;
  limit?: number;
}

export const useRestaurantDishes = ({
  restaurantId,
  searchTerm,
  limit = 9,
}: UseRestaurantDishesParams) => {
  return useInfiniteQuery<DishResponse>({
    queryKey: ["dishes", restaurantId, searchTerm],
    queryFn: async ({ pageParam = null }) => {
      const params = new URLSearchParams();
      if (pageParam) params.set("cursor", pageParam.toString());
      if (searchTerm) params.set("search", searchTerm);
      params.set("limit", limit.toString());

      const response = await fetch(
        `/api/restaurants/${restaurantId}/dishes?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Error fetching dishes");
      }

      return response.json();
    },
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    // Configuraciones adicionales para mejorar la experiencia de usuario
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: 2,
  });
}; 