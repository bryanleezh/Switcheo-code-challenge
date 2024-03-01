import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function ConnectWallet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Connect Wallet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Connect a wallet</SheetTitle>
          <SheetDescription>
            Connect a wallet  to access your assets! 
          </SheetDescription>
          <SheetDescription>
            However, this feature is not accessible at the moment. Stay tuned for more updates!
          </SheetDescription>
        </SheetHeader>
        <div className="py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
