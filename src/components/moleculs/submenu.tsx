import type { SidebarContent } from "@/types"
import { SidebarMenu, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import { Link } from "react-router"

export default function GroupSubMenu({ content }: { content: SidebarContent }) {
  return (
    <Group label={content.label} key={Math.random()} >
      {content.menus && (
        <SidebarMenu>
          <SidebarMenuItem >
            <SidebarMenuSub>
              {
                content.menus?.map(v => (
                  <SidebarMenuSubItem key={v.label + v.url} >
                    <SidebarMenuSubButton asChild isActive={window.location.pathname == v.url}>
                      <Link to={v.url}>{v.label}</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))
              }
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu>
      )}

    </Group >
  )
}
