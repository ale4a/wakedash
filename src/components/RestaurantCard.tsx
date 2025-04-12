"use client";

import { Badge } from "@heroui/badge";
import { Card, CardHeader, CardFooter, CardBody } from "@heroui/card";
import { RestaurantCardProps } from "@/types/restaurant";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { Chip } from "@heroui/react";

const RestaurantCard = ({
  id,
  name,
  imageUrl,
  description,
  cuisineType,
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
      className={`group hover:shadow-lg bg-background text-white border-gray-text border-solid border-4 transition-colors duration-300 ${hoverClass}`}
    >
      <div className="relative h-48 w-full bg-red-500">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2 ">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold ">{name}</h3>

          {/* {isOpen ? (
            <Chip color="success">Open</Chip>
          ) : (
            <Chip color="danger">Close</Chip>
          )} */}
          {cuisineType && (
            <div
              className={`text-sm items-center justify-center flex h-full z-20 bg-interactive-4 rounded-full text-black px-2 py-1`}
            >
              {cuisineType}
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody>
        {description && (
          <p className="text-sm text-muted-foreground text-text-secondary">
            {description}
          </p>
        )}
      </CardBody>
      <CardFooter
        className={`flex items-center gap-4 pt-4 text-sm text-muted-foreground border-t-4 border-gray-text  ${footerHoverClass}`}
      >
        <div className="flex items-center gap-1">
          <LuMapPin className="h-4 w-4" />
          <span>1.2 miles</span>
        </div>
        <div className="flex items-center gap-1">
          <CiClock2 className="h-4 w-4" />
          <span>20-30 min</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
