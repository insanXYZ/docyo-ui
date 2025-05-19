import type { ContentPage as ArrContentPage } from "@/types";
import ContentPage from "../organisms/content-page";

export default function Page({ contents }: { contents: ArrContentPage[] }) {
  return (
    <div className="w-full flex py-3 justify-center">
      <div className="w-[90%] md:w-[65%]  flex flex-col gap-2">
        <ContentPage contents={contents} />
      </div>
    </div >
  )
}
