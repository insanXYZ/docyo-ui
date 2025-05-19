import type { SidebarContent, SidebarMenu as SidebarMenuProps } from "@/types"
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import { Link } from "react-router"

export default function GroupApiMenu({ content }: { content: SidebarContent }) {
  function rowComp(d: SidebarMenuProps) {
    var color: string
    var statusCode: number = d.status_code ?? 200

    if (statusCode > 400) {
      color = "bg-red-500"
    } else {
      color = "bg-green-500"
    }

    return (
      <Link to={d.url}>
        <div className={`py-1 px-3 rounded-md text-white ${color}`}>{statusCode}</div>
        <div>{d.label}</div>
      </Link>
    )
  }

  return (
    <Group label={content.label} key={Math.random()} >
      <SidebarGroupContent>
        <SidebarMenu>
          {
            content.menus?.map(v => (
              <SidebarMenuItem key={v.label} >
                <SidebarMenuButton asChild isActive={window.location.pathname == v.url}>
                  {rowComp(v)}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          }
        </SidebarMenu>
      </SidebarGroupContent>
    </Group >
  )
}
