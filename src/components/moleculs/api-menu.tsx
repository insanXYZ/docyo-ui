import type { SidebarContent, SidebarMenu } from "@/types"
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Group from "./leftbar-group"
import { Link } from "react-router"

export default function GroupApiMenu({ content }: { content: SidebarContent }) {
  function rowComp(d: SidebarMenu) {
    var color: string

    if (d.status_code > 400) {
      color = "bg-red-500"
    } else {
      color = "bg-green-500"
    }

    return (
      <Link to={d.url}>
        <div className={`px-1 py-2 rounded-xl text-white ${color}`}></div>
        <div>{d.label}</div>
      </Link>
    )
  }

  return (
    <Group label={content.label}>
      {content.menus?.map(v => (
        <SidebarMenuItem key={v.label} >
          <SidebarMenuButton asChild>
            {rowComp(v)}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </Group >
  )
}
