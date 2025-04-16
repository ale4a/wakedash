import React from "react";
import { CartItem } from "@/types/dish";
import Image from "next/image";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onSendOrder: () => void;
}

const Cart = ({ items, onUpdateQuantity, onSendOrder }: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-full border-1 border-gray-700 rounded-lg">
      <div className="flex-none p-4 border-b border-gray-700 bg-gray-800 rounded-t-lg">
        <h2 className="text-xl font-semibold text-white">Your Order</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 min-h-0">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/empty.svg"
              alt="Empty cart"
              width={200}
              height={200}
              className="opacity-50"
            />
            <p className="text-gray-400 mt-4">Your cart is empty</p>
          </div>
        ) : (
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
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white"
                  >
                    -
                  </button>
                  <span className="text-white w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-none p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
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
