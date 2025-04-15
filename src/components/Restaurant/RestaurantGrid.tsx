import React from "react";
import Link from "next/link";
import RestaurantCard from "@/components/RestaurantCard";
import { RestaurantCardProps } from "@/types/restaurant";

interface RestaurantGridProps {
  restaurants: RestaurantCardProps[];
}

const RestaurantGrid = ({ restaurants }: RestaurantGridProps) => {
  return (
    <div className="grid grid-cols-1 w-full max-w-5xl gap-10">
      {restaurants.map((restaurant, index) => (
        <Link
          key={restaurant.id}
          href={`/restaurants/${restaurant.id}`}
          className="block w-full p-2"
        >
          <RestaurantCard {...restaurant} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantGrid;
