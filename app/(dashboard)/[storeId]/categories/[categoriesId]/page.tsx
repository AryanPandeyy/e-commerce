"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
type data = { data: Array<{ createdAt: Date; label: string; id: string }> };
const AddItemCategory = () => {
  const [data, setData] = useState<data>();
  const [categoryName, setCategoryName] = useState<string>("");
  const [billBoardId, setBillBoardId] = useState("");
  const { storeId }: { storeId: string } = useParams();

  const init = async () => {
    const data = await fetch("http://localhost:3000/api/billboard");
    const result = await data.json();
    console.log(result.data);
    setData(result);
  };

  const handleCreateCategory = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          categoryName: categoryName,
          billBoardId: billBoardId,
          storeId: storeId,
        }),
      });
      console.log(data);
      // https://github.com/vercel/next.js/issues/49298#issuecomment-1542055642
      // https://medium.com/@deadlyunicorn/how-to-solve-worarkound-next-navigation-redirect-error-inside-try-catch-nextjs13-500a5b5db89d
    } catch (e) {
      console.log("TRY CATCH ERROR", e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="m-4">
      <div className="border-b-2 mb-4 pb-2">
        <h1 className="font-bold">Create Category</h1>
        <p className="text-xs text-gray-700">
          Manage categories for your store
        </p>
      </div>
      <div className="flex flex-row">
        <div>
          <Label htmlFor="email">Name</Label>
          <Input
            type="text"
            className="w-[180px]"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="ml-2">
          <Label htmlFor="BillBoard">BillBoard</Label>
          <Select value={billBoardId} onValueChange={setBillBoardId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Billboard" />
            </SelectTrigger>
            <SelectContent>
              {data?.data.map((e, key) => (
                <SelectItem key={key} value={e.id}>
                  {e.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={handleCreateCategory} className="mt-2">
        Create
      </Button>
    </div>
  );
};

export default AddItemCategory;
