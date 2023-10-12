import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.billBoards.findMany();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({ message: "ok" });
}
