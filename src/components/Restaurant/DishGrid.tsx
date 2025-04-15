import React from "react";
import { Dish } from "@/types/dish";
import DishCard from "./DishCard";

interface DishGridProps {
  dishes: Dish[];
  onAddToCart: (dish: Dish) => void;
  isLoading: boolean;
}

const DishGrid = ({ dishes, onAddToCart, isLoading }: DishGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800 h-72 rounded-lg"></div>
        ))}
      </div>
    );
  }

  if (dishes.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No dishes found. Try changing your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          {...dish}
          onAddToCart={() => onAddToCart(dish)}
        />
      ))}
    </div>
  );
};

export default DishGrid;
