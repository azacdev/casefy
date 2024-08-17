import { NextResponse } from "next/server";

import db from "@/lib/db";
import getSession from "@/lib/get-session";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const body = await req.json();
    const {
      name,
      price,
      categoryId,
      colorId,
      sizeId,
      images,
      isFeatured,
      isArchived,
      quantity,
      description,
      outOfStock,
    } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (
      !name ||
      !price ||
      !categoryId ||
      !colorId ||
      !quantity ||
      !description ||
      !sizeId ||
      !images ||
      !images.length
    ) {
      return new NextResponse("Incomplete product information", {
        status: 400,
      });
    }

    const quantityAsNumber = parseInt(quantity, 10);

    const product = await db.product.create({
      data: {
        name: name,
        price: price,
        categoryId: categoryId,
        colorId: colorId,
        sizeId: sizeId,
        quantity: quantityAsNumber,
        description: description,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        isArchived: isArchived,
        isFeatured: isFeatured,
        outOfStock: outOfStock,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId") || undefined;
  const colorId = searchParams.get("colorId") || undefined;
  const sizeId = searchParams.get("sizeId") || undefined;
  const isFeatured = searchParams.get("isFeatured");

  try {
    const products = await db.product.findMany({
      where: {
        categoryId: categoryId,
        colorId: colorId,
        sizeId: sizeId,
        isFeatured: isFeatured ? true : undefined,
        isArchived: false,
        outOfStock: false,
      },
      include: {
        images: true,
        category: true,
        color: true,
        size: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
