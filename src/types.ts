export enum EnumSidebarWrapperContent {
  Api,
  MenuSub,
  Menu,
}

// Sidebar
export interface SidebarMenu {
  url: string,
  label: string,
  status_code: number,
}

export interface SidebarContent {
  type: EnumSidebarWrapperContent,
  label: string,
  menus: SidebarMenu[]
}

export interface Sidebar {
  logo: string,
  contents: SidebarContent[]
}
// Topbar
export interface TopbarContent {
  label: string,
  url: string,
}

export interface Topbar {
  search: boolean,
  logo?: string,
  contents: TopbarContent[]
}

// Pages
export enum EnumPageComponent {
  Header,
  HeaderMedium,
  HeaderSmall,
  Image,
  Paragraf
}

export interface Page {
  type: EnumPageComponent,
  value: string,
}

export interface Pages {
  [url: string]: Page[]
}

// Main
export interface Docyo {
  sidebar: Sidebar,
  topbar: Topbar,
  pages: Pages,
}

