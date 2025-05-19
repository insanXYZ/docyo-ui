import { type Sidebar as SidebarProps } from "@/types";
import {
  Sidebar,
  SidebarContent,
} from "../ui/sidebar";
import LeftbarHeader from "../moleculs/leftbar-header";
import { GetFuncContentSidebar } from "@/utils/sidebar";

export default function Leftbar({ leftbar }: { leftbar: SidebarProps }) {
  return (
    <Sidebar>
      {leftbar.logo && (
        <LeftbarHeader>
          <img src={"docyo.jpg"} className="h-14 object-contain" />
        </LeftbarHeader>
      )}
      <SidebarContent>
        <>
          {leftbar.contents?.map(v => {
            try {
              let f = GetFuncContentSidebar(v.type)
              return f({
                content: v
              })
            } catch (e) {
              null
            }
          })}
        </>
      </SidebarContent>
    </Sidebar>
  );
}


