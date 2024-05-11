import Link from "next/link";
import MaxWidthWrapper from "@/components//max-width-wrapper";
import getSession from "@/lib/get-session";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        {" "}
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold text-green-600">
            Casiefy{" "}
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href={"/"}
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign out
                </Link>
                {user.role === "ADMIN" && (
                  <Link
                    href={"/"}
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    Dashboard
                  </Link>
                )}
              </>
            ) : (
              <Link
                href="/configure/upload"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Create case
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
