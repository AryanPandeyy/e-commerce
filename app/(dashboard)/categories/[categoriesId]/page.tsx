"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type data = { data: Array<{ createdAt: Date; label: string; id: string }> };
const AddItemCategory = () => {
  const [data, setData] = useState<data>();
  const [categoryName, setCategoryName] = useState<string>("");
  const [billboardLabel, setBillboardLabel] = useState("");

  const init = async () => {
    const data = await fetch("http://localhost:3000/api/billboard");
    const result = await data.json();
    console.log(result.data);
    setData(result);
  };

  const handleCreateCategory = async () => {
    try {
      await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          categoryName: categoryName,
          billboardLabel: billboardLabel,
        }),
      }).then((data) => console.log("FETCH DATA", data));
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="BillBoard">BillBoard</Label>
          <select
            value={billboardLabel}
            onChange={(e) => setBillboardLabel(e.target.value)}
          >
            {data?.data.map((e, key) => (
              <option key={key} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {billboardLabel}
      <Button onClick={handleCreateCategory}>Create</Button>
    </div>
  );
};

export default AddItemCategory;
