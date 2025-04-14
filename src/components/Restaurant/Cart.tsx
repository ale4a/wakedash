import React from "react";
import { CartItem } from "@/types/dish";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onSendOrder: () => void;
}

const Cart = ({ items, onUpdateQuantity, onSendOrder }: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Your order</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white">{item.name}</h3>
              <p className="text-gray-400">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full bg-gray-700 text-white"
              >
                -
              </button>
              <span className="text-white w-8 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full bg-gray-700 text-white"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex justify-between text-white mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={onSendOrder}
          className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
          Send Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
