import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.category.findMany();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("JSON FROM SERVER ", data);
  await prisma.category.create({
    data: {
      name: data.categoryName,
      billBoardId: data.billBoardId,
    },
  });
  return NextResponse.json({ message: "ok" });
}
