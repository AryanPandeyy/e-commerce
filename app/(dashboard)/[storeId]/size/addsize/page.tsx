"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useParams } from "next/navigation";

const AddItemCategory = () => {
  const [sizeName, setSizeName] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const { storeId }: { storeId: string } = useParams();

  const handleCreateCategory = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/sizes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: sizeName,
          value: sizeValue,
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

  return (
    <div className="m-4">
      <div className="border-b-2 mb-4 pb-2">
        <h1 className="font-bold">Create Size</h1>
        <p className="text-xs text-gray-700">Add a new size</p>
      </div>
      <div className="flex flex-row">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            className="w-[180px]"
            value={sizeName}
            onChange={(e) => setSizeName(e.target.value)}
          />
          <Label htmlFor="value">Value</Label>
          <Input
            type="text"
            className="w-[180px]"
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleCreateCategory} className="mt-2">
        Create
      </Button>
    </div>
  );
};

export default AddItemCategory;
