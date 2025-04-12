import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/logo.svg" alt="logo" width={400} height={400} />
      <Link href="/restaurants">
        <Button color="primary">Get Started</Button>
      </Link>
    </div>
  );
};

export default Home;
