"use server";

import { signOut } from "@/auth";

export async function logout() {
  // some server stuff
  await signOut();
}
