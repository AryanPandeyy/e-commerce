"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddBillBoard = () => {
  const [billBoardLabel, setBillBoardLabel] = useState("");

  const handleCreateBillBoard = async () => {
    try {
      await fetch("http://localhost:3000/api/billboard", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          billBoardLabel: billBoardLabel,
          // TODO imageUrl
          imageUrl: "test",
        }),
      }).then((data) => console.log("FETCH DATA", data));
    } catch (e) {
      console.log("TRY CATCH ERROR", e);
    }
  };

  return (
    <div className="m-4">
      <div className="border-b-2 mb-4 pb-2">
        <h1 className="font-bold">Create BillBoard</h1>
        <p className="text-xs text-gray-700">Add a new billboard</p>
      </div>
      <div className="flex flex-row">
        <Label htmlFor="Label">Label</Label>
        <Input
          value={billBoardLabel}
          className="w-[180px] ml-2"
          onChange={(e) => setBillBoardLabel(e.target.value)}
        />
      </div>
      <Button onClick={handleCreateBillBoard} className="mt-2">
        Create
      </Button>
    </div>
  );
};

export default AddBillBoard;
