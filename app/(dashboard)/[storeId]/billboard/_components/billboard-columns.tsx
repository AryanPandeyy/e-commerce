"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// copy id
// update
// delete

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Categories = {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: Date;
};

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const billboard = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(billboard.id)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`${billboard.id}/`}>
                Update
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                try {
                  await fetch("/api/billboard", {
                    method: "DELETE",
                    body: JSON.stringify({
                      billBoardId: billboard.id,
                    }),
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
