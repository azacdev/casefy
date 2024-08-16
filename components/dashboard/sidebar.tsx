"use client";

import Link from "next/link";
import {
  Settings,
  Image,
  ListChecks,
  Ruler,
  PaintBucket,
  ShoppingCart,
  LayoutDashboard,
  Package,
  Package2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const params = useParams();
  const pathname = usePathname();

  const routes = [
    {
      href: `/dashboard`,
      label: "Overview",
      active: pathname === `/dashboard`,
      icon: LayoutDashboard,
    },
    {
      href: `/dashboard/billboards`,
      label: "Billboards",
      active: pathname === `/dashboard/billboards`,
      icon: Image,
    },
    {
      href: `/dashboard/categories`,
      label: "Categories",
      active: pathname === `/dashboard/categories`,
      icon: ListChecks,
    },
    {
      href: `/dashboard/sizes`,
      label: "Sizes",
      active: pathname === `/dashboard/sizes`,
      icon: Ruler,
    },
    {
      href: `/dashboard/colors`,
      label: "Colors",
      active: pathname === `/dashboard/colors`,
      icon: PaintBucket,
    },
    {
      href: `/dashboard/products`,
      label: "Products",
      active: pathname === `/dashboard/products`,
      icon: Package,
    },
    {
      href: `/dashboard/settings`,
      label: "Settings",
      active: pathname === `/dashboard/settings`,
      icon: Settings,
    },
    {
      href: `/dashboard/orders`,
      label: "Orders",
      active: pathname === `/dashboard/orders`,
      icon: ShoppingCart,
    },
  ];

  return (
    <aside className="sticky top-0 flex-col border-r px-3 hidden sm:flex min-h-screen">
      <button className="mt-3 rounded-lg lg:flex transition-colors justify-center bg-primary text-lg font-semibold text-primary-foreground p-2">
        <Package2 className="h-7 w-7 transition-all group-hover:scale-110" />
      </button>
      <div className="flex flex-col transition-colors mt-3 justify-center items-center">
        {routes.map((route, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary flex items-center py-2 my-1",
                    route.active
                      ? "text-blackdark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  <route.icon className="mr-2" />
                  <span className="sr-only">{route.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{route.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="flex mt-8 justify-start">
        <ModeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
