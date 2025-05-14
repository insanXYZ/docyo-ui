import { GetComponentContent } from "@/utils/content"

export enum TypeContent {
  Image,
  Paragraf,
  Header,
  HeaderSmall,
  HeaderMedium,
}

interface Content {
  type: TypeContent,
  val: string,
}

interface Contents {
  contents: Content[]
}

export type { Contents }

export default function Content({ contents }: Contents) {
  return (
    <>
      {contents.map((v) => {
        try {
          let f = GetComponentContent(v.type)
          f(v.val)
        } catch (error) {
          null
        }
      })}

    </>
  )
}
