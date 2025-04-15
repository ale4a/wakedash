"use client";
import React from "react";
import { useInfiniteRestaurants } from "@/hooks/useInfiniteRestaurants";
import InfiniteScroll from "@/components/common/InfiniteScroll";
import NavbarComponent from "@/components/common/Navbar";
import RestaurantGrid from "@/components/Restaurant/RestaurantGrid";

const RestaurantsPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteRestaurants();

  const restaurants = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-8">
        <RestaurantGrid restaurants={restaurants} />

        <InfiniteScroll
          onLoadMore={fetchNextPage}
          isLoading={isFetchingNextPage}
          hasMore={!!hasNextPage}
        >
          {({ isLoading }) => (
            <div className="mt-8 text-center">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary" />
                  <span className="text-gray-400">
                    Loading more restaurants...
                  </span>
                </div>
              ) : (
                <span className="text-gray-400">
                  No more restaurants available
                </span>
              )}
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default RestaurantsPage;
