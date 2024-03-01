"use client";

import { 
    CommandDialog,
    CommandInput,
    CommandList,
    CommandItem,
    CommandSeparator,
    CommandEmpty,
    Command,
    CommandGroup
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { currencies } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function CurrencyPicker() {
const [open, setOpen] = useState<boolean>(false);
const [value, setValue] = useState<string>("");
 
  const selectedCurrency = currencies.find(currency => currency.currency === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? currencies.find((currency) => currency.currency === value)?.currency
            : "Select framework..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a currency or search..." />
          <CommandList>
            <CommandGroup>
              {currencies.map(currency => (
                <CommandItem
                  key={currency.currency}
                  value={currency.currency}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {currency.currency}
                </CommandItem>
              ))}
              {currencies.length === 0 && <CommandEmpty>No currencies found.</CommandEmpty>}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </PopoverContent>
    </Popover>
  );
}