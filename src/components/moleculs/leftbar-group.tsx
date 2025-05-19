import type React from "react";
import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar";

export default function Group({ label, children }: { label?: string, children: React.ReactNode }) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel>
          <div className="font-light text-base">{label}</div>
        </SidebarGroupLabel>
      )}
      {children}
    </SidebarGroup>
  )
}
