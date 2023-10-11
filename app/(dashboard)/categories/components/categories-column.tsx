"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Categories = {
  name: string;
  billBoard: string;
  createdAt: string;
};

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billBoard",
    header: "BillBoard",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];
