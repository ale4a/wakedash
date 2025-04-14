import { NextRequest, NextResponse } from "next/server";
import { getRestaurantsByCursor } from "@/lib/services/restaurantService";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get("cursor");
  const limit = parseInt(searchParams.get("limit") || "10");

  const { data, nextCursor } = getRestaurantsByCursor(cursor, limit);

  return NextResponse.json({ data, nextCursor });
}
