"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import { Badge, Button } from "@heroui/react";
import { CiShoppingCart } from "react-icons/ci";
import { CartItem } from "@/types/dish";
import { IoChevronBackOutline } from "react-icons/io5";

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
  const router = useRouter();
  const cartItemCount = cartItems
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);

  return (
    <header className="sticky top-0 bg-background z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="py-4 flex w-full items-center flex-col lg:flex-row ">
          <div className="flex flex-row items-start justify-start w-full lg:w-1/3 ">
            <div className="flex items-center justify-center">
              <Button
                isIconOnly
                variant="light"
                color="primary"
                className="w-16 h-16"
                onPress={() => router.back()}
              >
                <IoChevronBackOutline className="text-white w-10 h-10" />
              </Button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Red Dragon</h1>
              <p className="text-gray-400">Chinatown District, Block 5</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 h-full">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
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
