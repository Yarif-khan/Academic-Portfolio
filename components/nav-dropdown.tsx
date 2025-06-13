"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const researchItems = [
  {
    title: "Genetic Engineering",
    href: "/research#genetic-engineering",
    description: "Explore our work in CRISPR and gene editing technologies.",
  },
  {
    title: "Computational Biology",
    href: "/research#computational-biology",
    description: "Discover our research in bioinformatics and systems biology.",
  },
  {
    title: "Cell Biology",
    href: "/research#cell-biology",
    description: "Learn about our cellular and molecular biology studies.",
  },
]

export function NavDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="/research"
            className="group inline-flex items-center bg-transparent hover:bg-muted px-3 py-2 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-medium"
          >
            Research
            <NavigationMenuTrigger className="ml-1 h-4 w-4">
              <ChevronDown className="h-4 w-4" />
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="w-[280px] p-3 md:w-[340px] lg:w-[400px] lg:p-4">
              {researchItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs lg:text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
