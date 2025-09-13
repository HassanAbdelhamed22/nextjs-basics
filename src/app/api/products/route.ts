import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return NextResponse.json(data);
}
