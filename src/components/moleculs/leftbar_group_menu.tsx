import type { LucideIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "../ui/sidebar"

interface MenuGroup {
  title: string,
  url: string,
  icon: LucideIcon,
}

interface LeftbarGroupProps {
  label?: string,
  menu: MenuGroup[]
}

export type { LeftbarGroupProps }

export default function GroupMenu({ label, menu }: LeftbarGroupProps) {

  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel>
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {menu.map(i => (
            <SidebarMenuItem key={i.title}>
              <SidebarMenuButton asChild>
                <a href={i.url}>
                  <i.icon />
                  <span>{i.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>


    </SidebarGroup>
  )
}
