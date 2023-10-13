import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.colors.findMany();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("JSON FROM SERVER ", data);
  await prisma.colors.create({
    data: {
      name: data.name,
      value: data.value,
    },
  });
  return NextResponse.json({ message: "ok" });
}
