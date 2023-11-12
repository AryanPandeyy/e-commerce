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
import { Checkbox } from "@/components/ui/checkbox";
import { useParams } from "next/navigation";

type data = Array<{ name: string; id: string }>;
type colorData = Array<{ value: string; id: string }>;
const AddItemCategory = () => {
  const [categories, setCategories] = useState<data>();
  const [sizes, setSizes] = useState<data>();
  const [colors, setColors] = useState<colorData>();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>();
  const [categoryId, setCategoryId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [colorId, setColorId] = useState("");
  const [featured, setFeatured] = useState(false);
  const [archived, setArchived] = useState(false);
  const { storeId }: { storeId: string } = useParams();

  const init = async () => {
    const getCategory = await fetch("http://localhost:3000/api/categories");
    const categoryResult = await getCategory.json();
    console.log("Category ", categoryResult.data);
    setCategories(categoryResult.data);
    const getSizes = await fetch("http://localhost:3000/api/sizes");
    const sizesResult = await getSizes.json();
    console.log("Sizes ", sizesResult.data);
    setSizes(sizesResult.data);
    const getColors = await fetch("http://localhost:3000/api/colors");
    const colorsResult = await getColors.json();
    console.log("Colors ", colorsResult.data);
    setColors(colorsResult.data);
  };

  const handleCreateCategory = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          productName: productName,
          categoryId: categoryId,
          productPrice: productPrice,
          sizeId: sizeId,
          imageUrl: "demo",
          colorId: colorId,
          featured: featured,
          archived: archived,
          storeId: storeId,
        }),
      });
      console.log(data);
      // https://github.com/vercel/next.js/issues/49298#issuecomment-1542055642 // https://medium.com/@deadlyunicorn/how-to-solve-worarkound-next-navigation-redirect-error-inside-try-catch-nextjs13-500a5b5db89d} catch (e) {console.log("TRY CATCH ERROR", e);
    } catch (e) {
      console.log(e);
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Label htmlFor="email">Price</Label>
          <Input
            type="number"
            className="w-[180px]"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.valueAsNumber)}
          />
        </div>
        <div className="ml-2">
          <Label htmlFor="Category">Category</Label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((e, key) => (
                <SelectItem key={key} value={e.id}>
                  {e.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="ml-2">
          <Label htmlFor="Size">Size</Label>
          <Select value={sizeId} onValueChange={setSizeId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              {sizes?.map((e, key) => (
                <SelectItem key={key} value={e.id}>
                  {e.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="ml-2">
          <Label htmlFor="Color">Color</Label>
          <Select value={colorId} onValueChange={setColorId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent>
              {colors?.map((e, key) => (
                <SelectItem key={key} value={e.id}>
                  {e.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox
          checked={featured}
          onCheckedChange={() => setFeatured(!featured)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Featured
          </label>
          <p className="text-sm text-muted-foreground">
            This product will appear on the home page
          </p>
        </div>
      </div>
      <div className="items-top flex space-x-2 border border-gray-700 p-2">
        <Checkbox
          checked={archived}
          onCheckedChange={() => setArchived(!archived)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Archived
          </label>
          <p className="text-sm text-muted-foreground">
            This product will not appear anywhere in the store
          </p>
        </div>
      </div>
      <Button onClick={handleCreateCategory} className="mt-2">
        Create
      </Button>
    </div>
  );
};

export default AddItemCategory;
