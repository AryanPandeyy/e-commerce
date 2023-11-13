"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import StoreSwitcher from "../StoreSwitcher";
import { useParams } from "next/navigation";

export default function NavBar() {
  const { storeId }: { storeId: string } = useParams();
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6")}>
      <StoreSwitcher />
      <Link
        href={`/${storeId}/`}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href={`/${storeId}/billboard`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        BillBoard
      </Link>
      <Link
        href={`/${storeId}/categories`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Categories
      </Link>
      <Link
        href={`/${storeId}/size`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sizes
      </Link>
      <Link
        href={`/${storeId}/colors`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Colors
      </Link>
      <Link
        href={`/${storeId}/products`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Product
      </Link>
      <Link
        href={`/${storeId}/orders`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Orders
      </Link>
      <Link
        href={`/${storeId}/products`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
      <ModeToggle />
    </nav>
  );
}
