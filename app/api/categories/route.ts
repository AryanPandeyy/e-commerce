import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface data {
  categoryName: string;
  billBoardId: string;
  storeId: string;
}

export async function GET() {
  const data = await prisma.category.findMany();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const data: data = await req.json();
  console.log("JSON FROM SERVER ", data);
  await prisma.category.create({
    data: {
      name: data.categoryName,
      billBoardId: data.billBoardId,
      storeId: data.storeId,
    },
  });
  return NextResponse.json({ message: "ok" });
}
