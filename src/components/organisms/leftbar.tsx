import { EnumSidebarWrapperContent, type Sidebar as SidebarProps } from "@/types";
import {
  Sidebar,
  SidebarContent,
} from "../ui/sidebar";
import LeftbarHeader from "../moleculs/leftbar-header";
import GroupApiMenu from "../moleculs/api-menu";

export default function Leftbar({ leftbar }: { leftbar: SidebarProps }) {
  return (
    <Sidebar>
      <SidebarContent>
        {leftbar.logo ?? (
          <LeftbarHeader>
            <img src={leftbar.logo} className="h-14 object-contain" />
          </LeftbarHeader>
        )}

        {leftbar.contents?.map(v => {

        })}

      </SidebarContent>
    </Sidebar>
  );
}


