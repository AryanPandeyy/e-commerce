"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FC } from "react";
import Link from "next/link";
interface StoreSwitcherProps {
  className: string
}

interface resultType {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const StoreSwitcher: FC<StoreSwitcherProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [store, setStore] = React.useState<resultType[]>([]);

  React.useEffect(() => {
    const fetchstores = async () => {
      const storesData = await fetch("http://localhost:3000/api/stores");
      const result: resultType[] = await storesData.json();
      console.log(result);
      setStore(result);
    };

    fetchstores();

    console.log(store);
  }, []);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", className)}
        >
          {value
            ? store.find((store) => store.name === value)?.name
            : "Select Store..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search store..." />
          <CommandEmpty>No store found.</CommandEmpty>
          <CommandGroup>
            {store.map((store) => (
              <CommandItem
                key={store.name}
                value={store.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === store.name ? "opacity-100" : "opacity-0",
                  )}
                />
                <Link href={`/${store.id}`}>
                  {store.name}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSwitcher;
