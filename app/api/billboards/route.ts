import { NextResponse } from "next/server";

import db from "@/lib/db";
import getSession from "@/lib/get-session";

export async function POST(req: Request) {
  try {
    const session = await getSession();

    const body = await req.json();
    const { label, imageUrl } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    const billboard = await db.billboard.create({
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARDS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const billboards = await db.billboard.findMany({});

    return NextResponse.json(billboards);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
