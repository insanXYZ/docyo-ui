import type React from "react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "../ui/sidebar";

export default function Group({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel>
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {children}
        </SidebarMenu>
      </SidebarGroupContent>


    </SidebarGroup>
  )
}
