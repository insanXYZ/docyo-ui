import type { Contents } from "../organisms/content-page";
import Content from "../organisms/content-page";

export default function Page({ contents }: Contents) {
  return (
    <div className="w-full flex items-center">
      <div className="w-[65%] flex flex-col gap-2">
        <Content contents={contents} />
      </div>
    </div >
  )
}
