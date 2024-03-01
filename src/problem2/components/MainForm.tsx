"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CoinInput from "./CoinInput";
import { useEffect, useState } from "react";
import { currencySwap } from "@/lib/currencyswap/currencySwap";
import { ExchangeDialog } from "./ExchangeDialog";
import { ConnectWallet } from "./ConnectWallet";

export default function MainForm() {
    // Values
    const [ payCurrencyValue, setPayCurrencyValue ] = useState<number>(0);
    const [ receiveCurrencyValue, setReceiveCurrencyValue ] = useState<number>(0);
    
    // Currencies
    const [ payCurrency, setPayCurrency ] = useState<string>("");
    const [ receiveCurrency, setReceiveCurrency ] = useState<string>("");

    const handleExchange = () => {
        window.location.reload();
    }

    useEffect(() => {
        var receive: number = currencySwap(payCurrencyValue, payCurrency, receiveCurrency);
        setReceiveCurrencyValue(receive);
    }, [payCurrencyValue]);

    return  (
        <div className="w-1/2 mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Swap</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <CoinInput 
                                type={"pay"}
                                onPayCurrencyValueChange={(value) => setPayCurrencyValue(value)} 
                                disabledValue={0}
                                onSelectedCurrencyChange={(value) => setPayCurrency(value)}
                            />
                            <CoinInput 
                                type={"receive"} 
                                onPayCurrencyValueChange={function (newValue: number): void {
                                    throw new Error("Function not implemented.");
                                }}
                                disabledValue={receiveCurrencyValue}
                                onSelectedCurrencyChange={(value) => setReceiveCurrency(value)}
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <ConnectWallet />
                    <ExchangeDialog onHandleExchange={handleExchange}/>
                </CardFooter>
            </Card>
        </div>
    )
}