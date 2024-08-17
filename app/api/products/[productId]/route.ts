import db from "@/lib/db";
import getSession from "@/lib/get-session";

import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
        category: true,
        color: true,
        size: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; productId: string } }
) {
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

    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const quantityAsNumber = parseInt(quantity, 10);

    await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name: name,
        price: price,
        categoryId: categoryId,
        colorId: colorId,
        sizeId: sizeId,
        quantity: quantityAsNumber,
        description: description,
        images: {
          deleteMany: {},
        },
        isFeatured: isFeatured,
        isArchived: isArchived,
        outOfStock: outOfStock,
      },
    });

    const product = await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; productId: string } }
) {
  try {
    const session = await getSession();

    if (!!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const product = await db.product.deleteMany({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
