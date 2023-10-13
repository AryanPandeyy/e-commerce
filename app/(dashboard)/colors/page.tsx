import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/colors-column";

export default async function Categories() {
  const getColors = await prisma.colors.findMany();
  // formating data
  const data = getColors.map((value) => {
    return {
      name: value.name,
      value: value.value,
      createdAt: value.createdAt.toLocaleDateString("en-US", {
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
          <h1 className="font-bold">Colors ({getColors.length})</h1>
          <p className="text-xs text-gray-700">
            Manage colors for your products
          </p>
        </div>
        <a href="/colors/addcolors">
          <Button>
            <Plus className="mr-1" />
            Add New
          </Button>
        </a>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
