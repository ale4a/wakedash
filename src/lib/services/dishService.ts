import { Dish } from "@/types/dish";
import { generateMockDishes, searchDishes } from "../data/mockDishes";

const DISHES_PER_PAGE = 9;

export const getDishesForRestaurant = (
  restaurantId: string,
  options: {
    searchTerm?: string;
    cursor: string | null;
    limit?: number;
  }
): { data: Dish[]; nextCursor: string | null } => {
  const { searchTerm, cursor, limit = DISHES_PER_PAGE } = options;
  
  // Generar platos para el restaurante
  let dishes = generateMockDishes(restaurantId);
  
  // Aplicar búsqueda si existe
  if (searchTerm) {
    dishes = searchDishes(dishes, searchTerm);
  }
  
  // Paginación
  const startIndex = cursor ? parseInt(cursor) : 0;
  const paginatedDishes = dishes.slice(startIndex, startIndex + limit);
  const nextCursor = paginatedDishes.length === limit ? 
    (startIndex + limit).toString() : null;
  
  return {
    data: paginatedDishes,
    nextCursor
  };
}; 