import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "hi" });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("JSON FROM SERVER ", data);
  await prisma.category.create({
    data: {
      name: data.categoryName,
      billBoardId: data.billboardLabel,
    },
  });
  return NextResponse.json({ message: "ok" });
}
