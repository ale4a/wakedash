"use client";
import React, { useEffect } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useInfiniteRestaurants } from "@/hooks/useInfiniteRestaurants";

const Page = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteRestaurants();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  const restaurants = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-8">
      <div className="grid grid-cols-1 w-full max-w-5xl gap-10">
        {restaurants.map((restaurant, index) => (
          <Link
            key={restaurant.id}
            href={`/restaurants/${restaurant.id}`}
            className="block w-full  p-2"
          >
            <RestaurantCard {...restaurant} index={index} />
          </Link>
        ))}
      </div>

      <div ref={ref} className="mt-8">
        {isFetchingNextPage ? (
          <p className="text-sm text-gray-500">Loading more restaurants...</p>
        ) : hasNextPage ? (
          <Button onPress={() => fetchNextPage()} color="primary">
            Load More
          </Button>
        ) : (
          <p className="text-sm text-gray-400">No more restaurants to load.</p>
        )}
      </div>

      <Link href="/menu" className="mt-4">
        <Button color="primary">Menu</Button>
      </Link>
    </div>
  );
};

export default Page;
