import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/products-columns";

// https://github.com/vercel/next.js/discussions/54355
export default async function Categories({
  params,
}: {
  params: { storeId: string };
}) {
  const getStoreId = await fetch("http://localhost:3000/api/stores");
  const result = getStoreId.json();
  console.log("STOREID ", result);
  const getProducts = await prisma.products.findMany({
    include: {
      category: true,
      size: true,
      color: true,
    },
    where: {
      storeId: params.storeId,
    },
  });
  // formating data
  const data = getProducts.map((value) => {
    return {
      name: value.name,
      archived: value.archived,
      featured: value.featured,
      price: value.price,
      category: value.category.name,
      size: value.size.name,
      color: value.color.value,
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
          <h1 className="font-bold">Products ({getProducts.length})</h1>
          <p className="text-xs text-gray-700">
            Manage products for your store
          </p>
        </div>
        <a href="products/addproducts">
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
