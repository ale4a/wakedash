import React from "react";
import { Dish } from "@/types/dish";
import DishCard from "./DishCard";
import { Skeleton } from "@heroui/react";

interface DishGridProps {
  dishes: Dish[];
  onAddToCart: (dish: Dish) => void;
  isLoading: boolean;
}

const DishGrid = ({ dishes, onAddToCart, isLoading }: DishGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg overflow-hidden w-full"
          >
            <Skeleton className="h-48 w-96 rounded-none" />
            <div className="p-4 w-full">
              <Skeleton className="w-full h-6 rounded-lg" />
              <Skeleton className="w-full h-4 rounded-lg mt-2" />
              <div className="flex items-center justify-between mt-4 w-full">
                <Skeleton className="w-32 h-4 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (dishes.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-gray-400 ">
        <div></div>
        <div className="flex items-center justify-center h-40">
          No dishes found. Try changing your filters.
        </div>
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
