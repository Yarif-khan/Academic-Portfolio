import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, FileText, BookOpen, User, Mail } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold">STEM Portfolio</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/research">
                <FileText className="mr-2 h-4 w-4" />
                <span>Research & Insights</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/blog">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Blog</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/about">
                <User className="mr-2 h-4 w-4" />
                <span>About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <ModeToggle />
      </SidebarFooter>
    </SidebarComponent>
  )
}

