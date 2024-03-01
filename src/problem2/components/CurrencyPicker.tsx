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
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { currencies } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { CurrencyPickerProps } from "@/lib/types";
import Image from "next/image";

export default function CurrencyPicker( { initialValue, onInitialValueChange }: CurrencyPickerProps ) {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(initialValue || "");

    const currencyNames = currencies.map(currency => currency.currency);

    useEffect(() => {
        if (initialValue !== undefined && onInitialValueChange) {
            onInitialValueChange(value);
        }
    }, [value])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className=" p-5"
                >
                    <Image src={`${value}.svg`} alt={value} width={30} height={30}/>
                    <h2 className="pl-3">{value}</h2>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a currency or search..." />
                <CommandList>
                    <CommandGroup>
                    {currencyNames.map(currency => (
                        <CommandItem
                            key={currency}
                            value={currency}
                            onSelect={() => {
                                setValue(currency);
                                setOpen(false);
                            }}
                        >
                            <Image src={`${currency}.svg`} alt={currency} width={30} height={30}/>
                            <h2 className="pl-3">{currency}</h2>
                        </CommandItem>
                    ))}
                    {currencies.length === 0 && <CommandEmpty>No currencies found.</CommandEmpty>}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </Popover>
    );
}