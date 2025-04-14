import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-lg border-b-4 border-gray-text py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-auto h-8"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/restaurants"
              className="px-3 py-2 rounded-md text-md font-medium hover:text-gray-700 text-text-primary"
            >
              Restaurants
            </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700 text-text-primary"
          >
            Home
          </a>
          <a
            href="/restaurants"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700 text-text-primary"
          >
            Restaurants
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
