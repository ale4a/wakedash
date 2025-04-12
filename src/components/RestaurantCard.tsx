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
  isOpen = false,
}: RestaurantCardProps) => {
  return (
    <Card
      isPressable
      className="overflow-hidden transition-all duration-200 hover:shadow-lg bg-[#1F1D2B]"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* {cuisineType && (
          <Badge className="absolute right-2 top-2 bg-white/80 text-black backdrop-blur-sm">
            {cuisineType}
          </Badge>
        )} */}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          <Badge
            variant={isOpen ? "solid" : "flat"}
            className={
              isOpen ? "bg-green-500 hover:bg-green-600" : "text-red-500"
            }
          >
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardBody>
      <CardFooter className="flex items-center gap-4 border-t pt-4 text-sm text-muted-foreground">
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
