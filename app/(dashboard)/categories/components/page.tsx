"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type data = {
  data: Array<{ name: string; createdAt: string; billBoard: string }>;
};

const addItemCategory = ({ data }: data) => {
  const [categoryName, setCategoryName] = useState<string>("");

  return (
    <>
      <div>
        <h1>Category</h1>
        <p>Add a new category</p>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="BillBoard">Email</Label>
        <select>{data?.map((e) => <option>{e.billBoard}</option>)}</select>
      </div>
    </>
  );
};

export default addItemCategory;
