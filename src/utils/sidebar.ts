import GroupApiMenu from "@/components/moleculs/api-menu"
import GroupMenu from "@/components/moleculs/menu"
import GroupSubMenu from "@/components/moleculs/submenu"
import { EnumSidebarWrapperContent, type SidebarContent } from "@/types"
import type { JSX } from "react"

let ContentSidebar = new Map<EnumSidebarWrapperContent, ({ content }: { content: SidebarContent }) => JSX.Element>()
ContentSidebar.set(EnumSidebarWrapperContent.Api, GroupApiMenu)
ContentSidebar.set(EnumSidebarWrapperContent.Menu, GroupMenu)
ContentSidebar.set(EnumSidebarWrapperContent.MenuSub, GroupSubMenu)

function isValidTypeContent(value: number): boolean {
  return Object.values(EnumSidebarWrapperContent).includes(value)
}

function GetFuncContentSidebar(t: number): ({ content }: { content: SidebarContent }) => JSX.Element {
  if (!isValidTypeContent(t)) {
    throw new Error(`Invalid TypeContent value: ${t}`)
  }

  const func = ContentSidebar.get(t)
  if (!func) {
    throw new Error(`Component not found for type: ${t}`)
  }

  return func
}

export { GetFuncContentSidebar }
