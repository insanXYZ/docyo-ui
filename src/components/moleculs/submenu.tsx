import type { SidebarContent } from "@/types"
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import { Link } from "react-router"

export default function GroupSubMenu({ content }: { content: SidebarContent }) {
  return (
    <Group label={content.label} >
      {
        content.menus?.map(v => (
          <SidebarMenuItem key={v.label} >
            <SidebarMenuButton asChild isActive={window.location.pathname == v.url}>
              <Link to={v.url}>{v.label}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))
      }
    </Group >
  )
}
