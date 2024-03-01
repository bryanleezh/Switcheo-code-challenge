import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings2 } from "lucide-react"

export function Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings2 />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Oops!</DropdownMenuLabel>
        <DropdownMenuItem>This feature is currently still pending</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
