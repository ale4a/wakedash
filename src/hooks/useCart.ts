import { useState } from 'react';
import { CartItem, Dish } from '@/types/dish';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (dish: Dish) => {
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

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prev) =>
      quantity === 0
        ? prev.filter((item) => item.id !== itemId)
        : prev.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          )
    );
  };

  const sendOrder = () => {
    console.log("Sending order:", cartItems);
    // Implementar lógica de envío
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    sendOrder
  };
}; 