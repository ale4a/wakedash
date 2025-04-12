import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Link href="/success">
        <Button color="primary">success</Button>
      </Link>
    </div>
  );
};

export default page;
