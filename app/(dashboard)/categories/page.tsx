import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// fetching of categories will be done in a server side rendering
// whereas, mutation will be on client side rendering
async function getCategoryData() {
  // https://github.com/vercel/next.js/discussions/54355
}
export default async function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <Button>
        <Plus className="mr-1" />
        Add New
      </Button>
    </>
  );
}
