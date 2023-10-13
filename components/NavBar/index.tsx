import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export default async function NavBar() {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6")}>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/billboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        BillBoard
      </Link>
      <Link
        href="/categories"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Categories
      </Link>
      <Link
        href="/size"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sizes
      </Link>
      <Link
        href="/colors"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Colors
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Product
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Orders
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
      <ModeToggle />
    </nav>
  );
}
