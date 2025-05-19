export enum EnumSidebarWrapperContent {
  Api,
  MenuSub,
  Menu,
}

// Sidebar
export interface SidebarMenu {
  url: string,
  label: string,
  status_code?: number,
}

export interface SidebarContent {
  type: EnumSidebarWrapperContent,
  label?: string,
  menus?: SidebarMenu[]
}

export interface Sidebar {
  logo?: string,
  contents: SidebarContent[]
}
// Topbar
export interface TopbarContent {
  label: string,
  url: string,
}

export interface ContentSearch {
  url: string,
  label: string,
}

export interface MapContentSearch {
  [heading: string]: ContentSearch[]
}

export interface Search {
  enable: boolean,
  contents: MapContentSearch
}

export interface Topbar {
  search?: Search,
  logo?: string,
  contents?: TopbarContent[]
}

// Pages
export enum EnumPageComponent {
  Header,
  HeaderMedium,
  HeaderSmall,
  Image,
  Paragraf,
  CodeMockup
}

export enum EnumApiContent {
  DescriptionString,
  Code
}

export interface ApiContent {
  type: EnumApiContent,
  value: string
}

export interface ApiParseString {
  [key: string]: ApiContent[]
}

export interface ContentPage {
  type: EnumPageComponent,
  value: string,
}

export interface Pages {
  [url: string]: ContentPage[]
}

// Main
export interface Docyo {
  sidebar: Sidebar,
  topbar: Topbar,
  pages: Pages,
}

