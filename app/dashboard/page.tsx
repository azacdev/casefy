import { Metadata } from "next";
import { auth } from "@/auth";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (user?.role !== "ADMIN") {
    return (
      <main className="mx-auto my10 text-white">
        <p className="text-center">You are not authorised to view this page</p>
      </main>
    );
  }
  return (
    <div className="text-white flex justify-center items-start h-screen">
      Dashboard
    </div>
  );
};

export default DashboardPage;
