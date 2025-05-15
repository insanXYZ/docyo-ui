import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import type { SidebarContent } from "@/types"
import { Link } from "react-router"

export default function GroupMenu({ content }: { content: SidebarContent }) {
  return (
    <Group label={content.label} >
      {
        content.menus?.map(v => (
          <SidebarMenuItem key={v.label} >
            <SidebarMenuButton asChild>
              <Link to={v.url}>{v.label}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))
      }
    </Group >
  )
}
