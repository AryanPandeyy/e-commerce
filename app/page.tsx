import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col mt-36">
        <div className="m-auto mb-4 flex border p-4 bg-blue-100 text-blue-800 rounded-full uppercase">
          <Store className="mr-2 h-6 w-6" />
          Hey Admin!
        </div>
        <div className="md:text-3xl text-2xl text-center mb-4 text-neutral-800">
          SignIn to your CMS
        </div>
        <div className="text-sm md:text-xl max-w-xs text-center md:max-w-2xl text-neutral-400">
          Create, manage stores, and reach new productivity peaks. From high
          rises to the home office, the way your team works is unique -
          accomplish it all with this app.
        </div>
      </div>
      <Button className="mt-4" asChild>
        <Link href="/sign-in">
          Sign In
        </Link>
      </Button>
    </div>
  );
}
