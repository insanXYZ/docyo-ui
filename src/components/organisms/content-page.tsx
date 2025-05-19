import type { ContentPage as ListContentPage } from "@/types"
import { GetFuncContentPage } from "@/utils/page"

export default function ContentPage({ contents }: { contents: ListContentPage[] }) {
  return (
    <>
      {contents.map((v) => {
        try {
          let f = GetFuncContentPage(v.type)
          return f(v.value)
        } catch (error) {
          null
        }
      })}
    </>
  )
}


