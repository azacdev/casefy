import db from "@/lib/db";

export const getTotalRevenue = async (storeId: string) => {
  // const paidOrders = await db.order.findMany({
  //   where: {
  //     storeId,
  //     isPaid: true,
  //   },
  //   include: {
  //     orderItems: {
  //       include: {
  //         product: true,
  //       },
  //     },
  //   },
  // });

  const paidOrders: any = [];

  const totalRevenue = paidOrders.reduce((total: any, order: any) => {
    const orderTotal = order.orderItems.reduce((orderSum: any, item: any) => {
      return orderSum + item.product.price.toNumber();
    }, 0);

    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
