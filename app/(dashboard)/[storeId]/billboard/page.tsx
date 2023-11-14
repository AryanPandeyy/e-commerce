import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./_components/billboard-columns";

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
      id: value.id,
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
    <div className="flex flex-col justify-center mb-2 p-2 mt-4">
      <div className="flex flex-row justify-between p-4 border border-b-red-900">
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
      <div className="w-full flex items-center justify-center mt-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
