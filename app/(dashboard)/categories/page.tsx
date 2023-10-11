import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { columns } from "./components/categories-column";
import { DataTable } from "@/components/ui/data-table";

// https://github.com/vercel/next.js/discussions/54355
export default async function Categories() {
  const getCategories = await prisma.category.findMany({
    include: {
      billboard: true,
    },
  });
  // formating data
  const data = getCategories.map((category) => {
    return {
      name: category.name,
      billBoard: category.billboard.label,
      createdAt: category.createdAt.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  });
  return (
    <div className="m-4">
      <div className="flex flex-row justify-between mb-2 border-b-2 p-2">
        <div>
          <h1 className="font-bold">Categories ({getCategories.length})</h1>
          <p className="text-xs text-gray-700">
            Manage categories for your store
          </p>
        </div>
        <Button>
          <Plus className="mr-1" />
          Add New
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
