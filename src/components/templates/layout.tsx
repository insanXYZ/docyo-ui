import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Leftbar from "@/components/organisms/leftbar";
import Topbar from "@/components/organisms/topbar";
import type { Sidebar, Topbar as TopbarType } from "@/types";

export default function Layout({ leftbar, topbar }: { leftbar: Sidebar, topbar: TopbarType }) {
  return (
    <SidebarProvider>
      <Leftbar leftbar={leftbar} />
      <SidebarInset>
        <Topbar {...topbar} />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>

  )
}
