import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";

// https://github.com/vercel/next.js/discussions/54355
export default async function Orders({
  params,
}: {
  params: { storeId: string };
}) {
  const getOrders = await prisma.orders.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  // formating data
  return (
    <div className="m-4">
      <div className="flex flex-row justify-between mb-2 border-b-2 p-2">
        <div>
          <h1 className="font-bold">Orders ({getOrders.length})</h1>
          <p className="text-xs text-gray-700">Manage orders for your store</p>
        </div>
        <a href="products/addproducts">
          <Button>
            <Plus className="mr-1" />
            Add New
          </Button>
        </a>
      </div>
    </div>
  );
}
