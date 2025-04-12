import RestaurantCard from "@/components/RestaurantCard";
import { RestaurantCardProps } from "@/types/restaurant";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const restaurants: RestaurantCardProps[] = [
  {
    id: "1",
    name: "Red Dragon",
    imageUrl: "/restaurants/1.png",
    description: "Authentic Asian cuisine and fresh sushi rolls.",
    cuisineType: "Asian",
    isOpen: true,
  },
  {
    id: "2",
    name: "La Piccola Italia",
    imageUrl: "/restaurants/2.png",
    description: "Classic Italian pasta and pizzas.",
    cuisineType: "Italian",
    isOpen: false,
  },
  {
    id: "3",
    name: "Red Dragon",
    imageUrl: "/restaurants/3.png",
    description: "Authentic Asian cuisine and fresh sushi rolls.",
    cuisineType: "Asian",
    isOpen: true,
  },
  {
    id: "4",
    name: "Red Dragon",
    imageUrl: "/restaurants/4.png",
    description: "Authentic Asian cuisine and fresh sushi rolls.",
    cuisineType: "Asian",
    isOpen: true,
  },
  {
    id: "5",
    name: "Red Dragon",
    imageUrl: "/restaurants/1.png",
    description: "Authentic Asian cuisine and fresh sushi rolls.",
    cuisineType: "Asian",
    isOpen: true,
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>

      <Link href="/menu">
        <Button color="primary">menu</Button>
      </Link>
    </div>
  );
};

export default page;
