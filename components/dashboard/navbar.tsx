import db from "@/lib/db";
// import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import StoreSwitcher from "@/components/dashboard/store-switcher";
import MobileNav from "@/components/dashboard/mobile-nav";

const Navbar = async () => {
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  // const stores = await db.store.findMany({
  //   where: {
  //     userId: userId,
  //   },
  // });

  const stores: any = [];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MobileNav />
        {/* <StoreSwitcher items={stores} /> */}
        {/* <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div> */}
        Logout
      </div>
    </div>
  );
};

export default Navbar;
