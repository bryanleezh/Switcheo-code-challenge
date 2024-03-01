"use client";

import { currencies } from "@/lib/data";
import CurrencyPicker from "./CurrencyPicker";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CoinInputProps } from "@/lib/types";
import { useState } from "react";

export default function CoinInput({ type, onPayCurrencyValueChange, disabledValue, onSelectedCurrencyChange } : CoinInputProps) {
    const [ initialCurrency, setInitialCurrency ] = useState<string>(type === "pay" ? currencies[0].currency : currencies[1].currency);

    const currencyChange = (newCurrency : string) => {
        setInitialCurrency(newCurrency);
        onSelectedCurrencyChange(newCurrency);
    }

    const onPayValueChange = (newValue: number) => {
        onPayCurrencyValueChange(newValue);
    }

    return (
        <div className="flex flex-col space-y-1.5 border rounded-md p-4 bg-muted">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <Label htmlFor="name" className="">{type === "pay" ? "You pay" : "You receive"}</Label>
                    {type === "pay" ? (
                        <Input 
                            type="number" 
                            placeholder="0"
                            className="border-none bg-muted"
                            onChange={(event) => onPayValueChange(Number(event.target.value))}
                        />
                        ) : (
                        <Input 
                            type="number"
                            disabled
                            className="border-none bg-muted"
                            placeholder="0"
                            value={disabledValue}
                        />
                    )}
                </div>
                <div>
                    <CurrencyPicker initialValue={initialCurrency} onInitialValueChange={currencyChange}/>
                </div>
            </div>
        </div>
    )
}