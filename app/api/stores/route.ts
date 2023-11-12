import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const getStores = await prisma.store.findMany();
  return NextResponse.json(getStores);
}
