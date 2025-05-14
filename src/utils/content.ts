import type { JSX } from "react";
import { TypeContent } from "@/components/organisms/content-page";
import { Header, HeaderMedium, HeaderSmall } from "@/components/moleculs/header";
import Image from "@/components/moleculs/image";
import Paragraf from "@/components/moleculs/paragraf";


let ComponentContent = new Map<TypeContent, (v: string) => JSX.Element>()
ComponentContent.set(TypeContent.Header, Header)
ComponentContent.set(TypeContent.HeaderSmall, HeaderSmall)
ComponentContent.set(TypeContent.HeaderMedium, HeaderMedium)
ComponentContent.set(TypeContent.Image, Image)
ComponentContent.set(TypeContent.Paragraf, Paragraf)


function isValidTypeContent(value: number): boolean {
  return Object.values(TypeContent).includes(value)
}

function GetComponentContent(t: number): (v: string) => JSX.Element {
  if (!isValidTypeContent(t)) {
    throw new Error(`Invalid TypeContent value: ${t}`)
  }

  const component = ComponentContent.get(t)
  if (!component) {
    throw new Error(`Component not found for type: ${t}`)
  }

  return component
}

export { GetComponentContent }
