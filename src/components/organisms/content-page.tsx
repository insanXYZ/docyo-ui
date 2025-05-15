import { GetComponentContent } from "@/utils/content"

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
