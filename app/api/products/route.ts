import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("JSON FROM SERVER ", data);
  await prisma.products.create({
    data: {
      name: data.productName,
      price: data.productPrice,
      categoryId: data.categoryId,
      sizeId: data.sizeId,
      colorId: data.colorId,
      featured: data.featured,
      archived: data.archived,
    },
  });
  return NextResponse.json({ message: "ok" });
}
