import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar"

interface SubMenu {
  title: string,
  url: string,
}

interface MenuSubMenu {
  label: string,
  submenu: SubMenu[]
}

interface LeftbarSubMenu {
  menu: MenuSubMenu[]
}

export type { LeftbarSubMenu }

export default function GroupSubMenu({ menu }: LeftbarSubMenu) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {menu.map(i => (
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div>{i.label}</div>
            </SidebarMenuButton>
            <SidebarMenuSub>
              {i.submenu.map(s => (
                <SidebarMenuSubItem key={s.title}>
                  <SidebarMenuSubButton asChild isActive={window.location.pathname == s.url}>
                    <a href={s.url}>{s.title}</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
