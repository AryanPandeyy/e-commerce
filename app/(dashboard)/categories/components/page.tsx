"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type data = { data: Array<{ createdAt: Date; label: string }> };
const addItemCategory = () => {
  const [data, setData] = useState<data>();

  const init = async () => {
    const data = await fetch("/api/billboard");
    const result = await data.json();
    console.log(result.data);
    setData(result);
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
          <Label htmlFor="email">Email</Label>
          <Input type="text" />
        </div>
        <div>
          <Label htmlFor="BillBoard">BillBoard</Label>
          <select>
            {data?.data.map((e) => (
              <option key={1} value={e.label}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Create</Button>
    </div>
  );
};

export default addItemCategory;
