import { NextResponse } from "next/server";

import getSession from "@/lib/get-session";
import db from "@/lib/db";

export async function DELETE(req: Request) {
  try {
    const session = await getSession();

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    // Fix Later

    // const order = await db.orderItem.deleteMany({
    //   where: {
    //     id: params.storeId,
    //   },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[ORDERS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
