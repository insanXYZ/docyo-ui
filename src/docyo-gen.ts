import type { LucideIcon } from "lucide-react";

// Sidebar Structure
interface SubContent {
  statusCode?: number;
  label: string,
  url: string,
  icon: LucideIcon,
}

interface SidebarContent {
  type: string,
  label?: string,
  contents: SubContent[]
}

interface Sidebar {
  logo?: string, // path to assets
  content: SidebarContent[]
}

// Topbar Structure
interface Topbar {

}


interface Generated {
  sidebar: Sidebar
  topbar: Topbar
}
