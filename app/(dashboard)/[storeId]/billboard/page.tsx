import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/billboard-columns";

// https://github.com/vercel/next.js/discussions/54355
export default async function BillBoard({
  params,
}: {
  params: { storeId: string };
}) {
  const getBillBoards = await prisma.billBoards.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const data = getBillBoards.map((value) => {
    return {
      label: value.label,
      imageUrl: value.imageUrl,
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
          <h1 className="font-bold">Billboards ({getBillBoards.length})</h1>
          <p className="text-xs text-gray-700">
            Manage billboards for your store
          </p>
        </div>
        <a href="billboard/addbillboard">
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
