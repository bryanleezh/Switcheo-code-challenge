"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CurrencyPicker from "./CurrencyPicker";

export default function MainForm() {
    return  (
        <div className="w-1/2 mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Swap</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div id="hi" className="flex flex-col space-y-1.5 border rounded-md p-4">
                                <Label htmlFor="name">You pay</Label>
                                <div className="flex w-full max-w items-center space-x-2">
                                    <Input id="paycurrency" type="number" placeholder="0" className="border-none"/>
                                    <CurrencyPicker />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5 border rounded-md p-4">
                                <Label htmlFor="name">You receive</Label>
                                <div className="flex w-full max-w items-center space-x-2">
                                    <Input id="paycurrency" type="number" placeholder="0" className="border-none"/>
                                    <CurrencyPicker />
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Swap!</Button>
                </CardFooter>
            </Card>
        </div>
    )
}