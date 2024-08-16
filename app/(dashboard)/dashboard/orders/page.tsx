import { format } from "date-fns";
import db from "@/lib/db";
import { formatPrice } from "@/lib/utils";

import OrderClient from "./components/client";
import { OrderColumn } from "./components/columns";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  // const orders = await db.order.findMany({
  //   where: {
  //     storeId: params.storeId,
  //   },
  //   include: {
  //     orderItems: {
  //       include: {
  //         product: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  const orders: any = [];

  const formattedOrders: OrderColumn[] = orders.map((item: any) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    // products: item.orderItems
    //   .map((orderItem) => orderItem.product.name)
    //   .join(", "),
    products: item.productList,
    totalPrice: `NGN ${item.totalPrice}`,
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-4 lg:p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
