import { EnumSidebarWrapperContent, type Docyo } from "./types";

let generate: Docyo = {
  sidebar: {
    logo: "",
    contents: [
      {
        type: EnumSidebarWrapperContent.Menu,
        label: "anu",
        menus: [
          {
            label: "label 1",
            url: "#"
          },
          {
            label: "label 2",
            url: "#"
          }
        ]
      },
      {
        type: EnumSidebarWrapperContent.Menu,
        label: "anu",
        menus: [
          {
            label: "label 1",
            url: "#"
          }
        ]
      },
      {
        type: EnumSidebarWrapperContent.MenuSub,
        label: "anu",
        menus: [
          {
            label: "label 1",
            url: "#"
          }
        ]
      },
      {
        type: EnumSidebarWrapperContent.MenuSub,
        label: "anu",
        menus: [
          {
            label: "label 1",
            url: "#"
          }
        ]
      },
      {
        type: EnumSidebarWrapperContent.Api,
        label: "user",
        menus: [
          {
            label: "/user/login",
            url: "#",
            status_code: 200
          }
        ]
      }
    ]
  },
  topbar: {
    search: true
  }
}


export default generate
