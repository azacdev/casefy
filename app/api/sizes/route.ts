import { NextResponse } from "next/server";

import db from "@/lib/db";
import getSession from "@/lib/get-session";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const session = await getSession();
    const body = await req.json();
    const { name, value } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!value) {
      return new NextResponse("Value is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("StoreId is required", { status: 400 });
    }

    const size = await db.size.create({
      data: {
        name: name,
        value: value,
      },
    });

    return NextResponse.json(size);
  } catch (error) {
    console.log("[SIZES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("StoreId is required", { status: 400 });
    }

    const sizes = await db.size.findMany({});

    return NextResponse.json(sizes);
  } catch (error) {
    console.log("[SIZES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
