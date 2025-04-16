import React from "react";
import SearchBar from "./SearchBar";
import { Badge, Button } from "@heroui/react";
import { CiShoppingCart } from "react-icons/ci";
import { CartItem } from "@/types/dish";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  setIsCartOpen: (value: boolean) => void;
  cartItems: CartItem[];
}

const Header = ({
  searchQuery,
  onSearchChange,
  setIsCartOpen,
  cartItems,
}: HeaderProps) => {
  const cartItemCount = cartItems
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);
  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Red Dragon</h1>
            <p className="text-gray-400">Chinatown District, Block 5</p>
          </div>
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
      </div>
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Badge
          color="danger"
          content={cartItemCount}
          placement="top-right"
          className="m-2 border-none"
          isInvisible={cartItemCount === 0}
        >
          <Button
            isIconOnly
            radius="full"
            variant="solid"
            color="primary"
            onPress={() => setIsCartOpen(true)}
            className="w-20 h-20 p-2"
          >
            <CiShoppingCart className="w-20 h-20 p-2" />
          </Button>
        </Badge>
      </div>
    </header>
  );
};

export default Header;
