"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { CartItem } from "@/types/dish";
import { useRestaurantDishes } from "@/hooks/useRestaurantDishes";
import SearchBar from "@/components/Restaurant/SearchBar";
import DishCard from "@/components/Restaurant/DishCard";
import Cart from "@/components/Restaurant/Cart";
import InfiniteScroll from "@/components/common/InfiniteScroll";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Intersection Observer para scroll infinito
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  // Query de platos con filtros
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

  // Cargar más platos cuando se llega al final
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Manejar errores
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading dishes. Please try again.</p>
      </div>
    );
  }

  const dishes = data?.pages.flatMap((page) => page.data) ?? [];

  const handleAddToCart = (dish: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">Red Dragon</h1>
              <p className="text-gray-400">Chinatown District, Block 5</p>
            </div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </header>

      {/* Contenido principal con padding para el header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-800 h-72 rounded-lg"></div>
            ))}
          </div>
        ) : dishes.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No dishes found. Try changing your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                {...dish}
                onAddToCart={() => handleAddToCart(dish)}
              />
            ))}
          </div>
        )}

        <InfiniteScroll
          onLoadMore={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          hasMore={!!hasNextPage}
          loadingText="Loading more dishes..."
          noMoreText="No more dishes available"
        />
      </main>

      {/* Carrito flotante */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 transform transition-transform duration-300 ease-in-out translate-x-0 bg-gray-800 shadow-xl overflow-y-auto">
        <Cart
          items={cartItems}
          onUpdateQuantity={(itemId, quantity) => {
            setCartItems((prev) =>
              quantity === 0
                ? prev.filter((item) => item.id !== itemId)
                : prev.map((item) =>
                    item.id === itemId ? { ...item, quantity } : item
                  )
            );
          }}
          onSendOrder={() => {
            // Implementar lógica de envío de orden
            console.log("Sending order:", cartItems);
          }}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
