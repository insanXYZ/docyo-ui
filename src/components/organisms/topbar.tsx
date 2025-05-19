import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "../ui/sidebar";
import type { Topbar as TopbarProps } from "@/types";
import Search from "../moleculs/search";

export default function Topbar(props: TopbarProps) {
  return (
    <header className="flex sticky top-0 bg-white h-16 shrink-0 items-center gap-2 border-b">
      <div className="w-full flex justify-between items-center gap-2 px-3">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div>
          {props.search?.enable && (
            <Search contentSearch={props.search.contents} />
          )}
        </div>
      </div>
    </header>
  );
}
