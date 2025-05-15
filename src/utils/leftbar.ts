import GroupApiMenu from "@/components/moleculs/api-menu"
import { EnumSidebarWrapperContent, type SidebarContent } from "@/types"
import type { JSX } from "react"

let GetFuncContentSidebar = new Map<EnumSidebarWrapperContent, (content: SidebarContent) => JSX.Element>()
GetFuncContentSidebar.set(EnumSidebarWrapperContent.Api, GroupApiMenu)

function isValidTypeContent(value: number): boolean {
  return Object.values(TypeContent).includes(value)
}

function GetComponentContent(t: number): (v: string) => JSX.Element {
  if (!isValidTypeContent(t)) {
    throw new Error(`Invalid TypeContent value: ${t}`)
  }

  const component = ComponentContent.get(t)
  if (!component) {
    throw new Error(`Component not found for type: ${t}`)
  }

  return component
}

export { GetComponentContent }
