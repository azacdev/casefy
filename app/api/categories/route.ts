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
    const { name, billboardId } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse("Billboard id is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("StoreId is required", { status: 400 });
    }

    const category = await db.catergory.create({
      data: {
        name,
        billboardId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const categories = await db.catergory.findMany({});

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
