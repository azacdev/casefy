import { NextResponse } from "next/server";

import db from "@/lib/db";
import getSession from "@/lib/get-session";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    if (!params.categoryId) {
      return new NextResponse("CatergoryId id is required", { status: 400 });
    }

    const catergory = await db.catergory.findUnique({
      where: {
        id: params.categoryId,
      },
      include: {
        billboard: true,
      },
    });

    return NextResponse.json(catergory);
  } catch (error) {
    console.log("[CAATEGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; catergoryId: string } }
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
      return new NextResponse("BillboardId is required", { status: 400 });
    }

    if (!params.catergoryId) {
      return new NextResponse("Catergory id is required", { status: 400 });
    }

    const category = await db.catergory.updateMany({
      where: {
        id: params.catergoryId,
      },
      data: {
        name: name,
        billboardId: billboardId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const session = await getSession();

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    const catergory = await db.catergory.deleteMany({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(catergory);
  } catch (error) {
    console.log("[CATEGORY_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
