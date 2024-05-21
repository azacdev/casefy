"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import db from "@/lib/db";
import getSession from "@/lib/get-session";
import { Order } from "@prisma/client";

const CreateCheckoutSession = async ({ configId }: { configId: string }) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) {
    throw new Error("No such configuration found");
  }

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    throw new Error("You need to be logged in");
  }

  const { finish, material } = configuration;

  let price = BASE_PRICE;
  if (finish === "textured") price += PRODUCT_PRICES.finish.textured;
  if (material === "polycarbonate")
    price += PRODUCT_PRICES.material.polycarbonate;

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuration.id,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        amount: price / 100,
        userId: user.id!,
        configurationId: configuration.id,
      },
    });
  }

  
};

export default CreateCheckoutSession;
