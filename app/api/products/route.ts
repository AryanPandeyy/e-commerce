import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface data {
  productName: string;
  productPrice: number;
  categoryId: string;
  sizeId: string;
  colorId: string;
  featured: boolean;
  archived: boolean;
  storeId: string;
}

export async function POST(req: NextRequest) {
  const data: data = await req.json();
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
      storeId: data.storeId,
    },
  });
  return NextResponse.json({ message: "ok" });
}
