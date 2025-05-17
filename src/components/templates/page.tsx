import type { ContentPage as ArrContentPage } from "@/types";
import ContentPage from "../organisms/content-page";

export default function Page(props: ArrContentPage[]) {
  return (
    <div className="w-full flex items-center">
      <div className="w-[65%] flex flex-col gap-2">
        <ContentPage contents={props} />
      </div>
    </div >
  )
}
