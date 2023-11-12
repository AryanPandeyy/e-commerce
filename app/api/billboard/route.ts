import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface data {
  billBoardLabel: string;
  imageUrl: string;
  storeId: string;
}

export async function GET() {
  const data = await prisma.billBoards.findMany();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const data: data = await req.json();
  console.log(data);
  await prisma.billBoards.create({
    data: {
      label: data.billBoardLabel,
      imageUrl: data.imageUrl,
      storeId: data.storeId,
    },
  });
  return NextResponse.json({ message: "ok" });
}
