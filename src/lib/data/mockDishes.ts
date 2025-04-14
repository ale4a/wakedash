import { Dish } from "@/types/dish";

interface DishTemplate {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const DISH_TEMPLATES: DishTemplate[] = [
  {
    name: "Fresh Garden Salad",
    description: "Mixed greens with seasonal vegetables and house dressing.",
    price: 3.59,
    imageUrl: "/cdn/dishes/1.png"
  },
  {
    name: "Spicy Seasoned chickend",
    description: "Fresh seafood seasoned with our special spicy blend.",
    price: 2.29,
    imageUrl: "/cdn/dishes/2.png"
  },
  {
    name: "Spicy Instant Noodle",
    description: "Classic instant noodles with a spicy twist.",
    price: 3.49,
    imageUrl: "/cdn/dishes/3.png"  
  },
  {
    name: "Fries instant with meet",
    description: "Classic instant noodles with a spicy twist.",
    price: 3.49,
    imageUrl: "/cdn/dishes/3.png"
  }
];

const generateDishId = (restaurantId: string, index: number) => 
  `${restaurantId}-dish-${index + 1}`;

export const generateMockDishes = (restaurantId: string, count: number = 400): Dish[] => {
  return Array.from({ length: count }, (_, index) => {
    const template = DISH_TEMPLATES[index % DISH_TEMPLATES.length];
    
    return {
      id: generateDishId(restaurantId, index),
      name: template.name,
      description: template.description,
      price: template.price,
      imageUrl: template.imageUrl,
      available: true
    };
  });
};

// Función auxiliar para buscar platos
export const searchDishes = (
  dishes: Dish[],
  searchTerm: string
): Dish[] => {
  const term = searchTerm.toLowerCase();
  return dishes.filter(
    dish =>
      dish.name.toLowerCase().includes(term) ||
      dish.description.toLowerCase().includes(term)
  );
}; 