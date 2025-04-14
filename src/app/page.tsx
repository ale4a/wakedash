"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/restaurants");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={400}
          height={400}
          className="animate-pulse"
        />
        <div className="mt-4 text-center text-gray-600 flex justify-center">
          <div className="inline-block animate-spin mr-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Home;
