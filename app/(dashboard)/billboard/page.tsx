import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";

// https://github.com/vercel/next.js/discussions/54355
export default async function BillBoard() {
  const getBillBoards = await prisma.billBoards.findMany();
  return (
    <>
      {/* <Button>
        <Plus className="mr-1" />
        Add New
      </Button> */}
      <DataTable columns={columns} data={getBillBoards} />
    </>
  );
}
