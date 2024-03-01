"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ExchangeDialogProps } from "@/lib/types";

export function ExchangeDialog( { onHandleExchange } : ExchangeDialogProps) {

    const resetCurrency = () => {
        onHandleExchange();
    }

    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className="bg-border" variant='outline'>Exchange</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>You have successfully  exchanged your tokens!</AlertDialogTitle>
                <AlertDialogDescription>
                    Great job, getting rich on cryptocurrency is not easy...all the best!
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction className="bg-border" onClick={resetCurrency}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
  )
}
