"use client";

import React from 'react';
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Avatar>
                        <AvatarImage src={`/UNI.svg`} />
                        <AvatarFallback>UniSwap</AvatarFallback>
                    </Avatar>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Swap
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tokens
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              NFTs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pools
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <DropdownMenu>
                    <DropdownMenuTrigger><ChevronDown/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>App</DropdownMenuLabel>
                        <DropdownMenuItem>Vote</DropdownMenuItem>
                        <DropdownMenuItem>Analytics</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Company</DropdownMenuLabel>
                        <DropdownMenuItem>Careers</DropdownMenuItem>
                        <DropdownMenuItem>Blog</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Protocol</DropdownMenuLabel>
                        <DropdownMenuItem>Governance</DropdownMenuItem>
                        <DropdownMenuItem>Developers</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Need help?</DropdownMenuLabel>
                        <DropdownMenuItem>Contact us</DropdownMenuItem>
                        <DropdownMenuItem>Help Center</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
