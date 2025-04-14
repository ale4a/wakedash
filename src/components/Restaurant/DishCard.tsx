import React from "react";
import Image from "next/image";
import { Dish } from "@/types/dish";

interface DishCardProps extends Dish {
  onAddToCart: () => void;
}

const DishCard = ({
  name,
  description,
  price,
  imageUrl,
  onAddToCart,
}: DishCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-white">${price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
