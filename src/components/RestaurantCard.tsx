"use client";

import { Badge } from "@heroui/badge";
import { Card, CardHeader, CardFooter, CardBody } from "@heroui/card";
import { RestaurantCardProps } from "@/types/restaurant";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";

const RestaurantCard = ({
  id,
  name,
  imageUrl,
  description,
  cuisineType,
  deliveryTime,
  distance,
  isOpen = false,
  index,
}: RestaurantCardProps) => {
  const hoverBorders = [
    "hover:border-interactive-1",
    "hover:border-interactive-2",
    "hover:border-interactive-3",
    "hover:border-interactive-4",
  ];
  const footerHoverBorders = [
    "group-hover:border-interactive-1",
    "group-hover:border-interactive-2",
    "group-hover:border-interactive-3",
    "group-hover:border-interactive-4",
  ];
  const footerHoverClass = footerHoverBorders[index % 4];
  const hoverClass = hoverBorders[index % 4];

  return (
    <Card
      isPressable
      radius="none"
      className={`w-full group hover:shadow-lg bg-background text-white border-gray-text border-solid border-4 transition-colors duration-300 ${hoverClass}`}
    >
      <div
        className={`relative h-48 w-full border-b-4 border-gray-text ${footerHoverClass}`}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <h3 className="text-3xl font-bold ">{name}</h3>
          {/* {cuisineType && (
            <div
              className={`text-sm text-white items-center justify-center flex h-full z-20 bg-primary rounded-full px-4 py-1`}
            >
              {cuisineType}
            </div>
          )} */}
        </div>
      </CardHeader>
      <CardBody className="pt-0 pb-4 px-4">
        {description && (
          <p className="text-sm text-muted-foreground text-text-secondary">
            {description}
          </p>
        )}
        <div className="flex items-center gap-4 my-2 ">
          <div className="flex items-center gap-1">
            <LuMapPin className="h-4 w-4" />
            <span>{distance} miles</span>
          </div>
          <div className="flex items-center gap-1">
            <CiClock2 className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default RestaurantCard;
