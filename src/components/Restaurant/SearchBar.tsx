import React from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative ">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for food, drink, etc.."
        startContent={<CiSearch className="text-gray-400" />}
        variant="bordered"
        color="primary"
        size="lg"
        classNames={{
          base: "w-full ",
          input: "text-white",
          inputWrapper: "bg-gray-700 border-transparent",
        }}
      />
    </div>
  );
};

export default SearchBar;
