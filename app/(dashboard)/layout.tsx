import { notFound } from "next/navigation";

import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
// import { auth } from "@/auth";
import getSession from "@/lib/get-session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  if (!user || !user.email || user?.role !== "ADMIN") {
    return notFound();
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
