import type { ReactNode } from "react"
import { SidebarHeader } from "../ui/sidebar"

export default function LeftbarHeader({ children }: { children: ReactNode }) {
  return (
    <SidebarHeader>
      {children}
    </SidebarHeader>
  )
}
