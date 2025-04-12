import { RestaurantCardProps } from "@/types/restaurant";

export const mockRestaurants: RestaurantCardProps[] = Array.from({ length: 200 }, (_, index) => {
  const id = (index + 1).toString();
  const cuisineTypes = ["Italian", "Mexican", "Chinese", "Indian", "Japanese", "Peruvian"];
  const names = ["Sabor", "Delizia", "La Mesa", "Rincón", "Fusión", "Sazón", "Gusto", "Terraza"];
  const descriptions = [
    "A place where flavor meets tradition.",
    "Delicious meals with a cozy vibe.",
    "Authentic dishes made with love.",
    "Where your taste buds travel the world.",
    "Modern cooking, traditional roots.",
  ];

  return {
    id,
    index,
    name: `${names[index % names.length]}`,
    imageUrl: `/cdn/restaurants/${(index % 13) + 1}.png`,
    description: descriptions[index % descriptions.length],
    cuisineType: cuisineTypes[index % cuisineTypes.length],
    isOpen: index % 3 !== 0,
  };
});
