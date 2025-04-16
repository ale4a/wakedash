"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRestaurantDishes } from "@/hooks/useRestaurantDishes";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/Restaurant/Header";
import DishGrid from "@/components/Restaurant/DishGrid";
import Cart from "@/components/Restaurant/Cart";
import InfiniteScroll from "@/components/common/InfiniteScroll";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import NavbarComponent from "@/components/common/Navbar";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems, addToCart, updateQuantity, sendOrder } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useRestaurantDishes({
    restaurantId: restaurantId as string,
    searchTerm: searchQuery,
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading dishes. Please try again.</p>
      </div>
    );
  }

  const dishes = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="min-h-screen bg-background flex">
      {/* <NavbarComponent /> */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
      />

      <main className="flex gap-4 mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24">
        <div className="flex flex-col w-full lg:w-2/3">
          <DishGrid
            dishes={dishes}
            onAddToCart={addToCart}
            isLoading={isLoading}
          />
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
                      Loading more dishes...
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-400">
                    No more dishes available
                  </span>
                )}
              </div>
            )}
          </InfiniteScroll>
        </div>

        <aside className="hidden lg:block w-1/3 h-[calc(100vh-12rem)] sticky top-48 overflow-y-auto">
          <Cart
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onSendOrder={sendOrder}
          />
        </aside>
      </main>
      <Modal
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        className="bg-background"
      >
        <ModalContent>
          <ModalHeader>Your Order</ModalHeader>
          <ModalBody>
            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onSendOrder={sendOrder}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RestaurantPage;
