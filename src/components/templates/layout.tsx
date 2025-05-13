import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Leftbar from "@/components/organisms/leftbar";
import Topbar from "@/components/organisms/topbar";


export default function Layout() {
  return (
    <SidebarProvider>
      <Leftbar />
      <SidebarInset>
        <Topbar />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>

  )
}
