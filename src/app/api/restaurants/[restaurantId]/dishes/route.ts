import { NextRequest, NextResponse } from "next/server";
import { getDishesForRestaurant } from "@/lib/services/dishService";

export async function GET(
  req: NextRequest,
  { params }: { params: { restaurantId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Obtener parámetros de la query
    const cursor = searchParams.get("cursor");
    const limit = parseInt(searchParams.get("limit") || "9");
    const searchTerm = searchParams.get("search") || undefined;

    // Validar el restaurantId
    if (!params.restaurantId) {
      return NextResponse.json(
        { error: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    // Obtener los platos con los filtros aplicados
    const { data, nextCursor } = getDishesForRestaurant(params.restaurantId, {
      searchTerm,
      cursor,
      limit,
    });

    // Retornar respuesta paginada
    return NextResponse.json({
      data,
      nextCursor,
      metadata: {
        total: data.length,
        restaurantId: params.restaurantId,
      },
    });
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 