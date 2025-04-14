"use client";
import React, { useEffect } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useInfiniteRestaurants } from "@/hooks/useInfiniteRestaurants";
import InfiniteScroll from "@/components/common/InfiniteScroll";
import NavbarComponent from "@/components/common/Navbar";

const RestaurantsPage = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteRestaurants();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);
  //
  const restaurants = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-8">
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

        <InfiniteScroll
          onLoadMore={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          hasMore={!!hasNextPage}
          loadingText="Loading more restaurants..."
          noMoreText="No more restaurants available"
        />
      </div>
    </>
  );
};

export default RestaurantsPage;
