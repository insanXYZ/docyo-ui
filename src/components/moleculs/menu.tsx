import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import type { SidebarContent } from "@/types"
import { Link } from "react-router"

export default function GroupMenu({ content }: { content: SidebarContent }) {
  return (
    <Group label={content.label} key={Math.random()} >
      <SidebarGroupContent>
        <SidebarMenu>
          {
            content.menus?.map(v => (
              <SidebarMenuItem key={v.label} >
                <SidebarMenuButton asChild isActive={window.location.pathname == v.url}>
                  <Link to={v.url}>{v.label}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          }
        </SidebarMenu>
      </SidebarGroupContent>

    </Group >
  )
}
