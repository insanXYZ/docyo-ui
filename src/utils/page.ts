import type { JSX } from "react";
import { TypeContent } from "@/components/organisms/content-page";
import { Header, HeaderMedium, HeaderSmall } from "@/components/moleculs/header";
import Image from "@/components/moleculs/image";
import Paragraf from "@/components/moleculs/paragraf";


let ContentPage = new Map<TypeContent, (v: string) => JSX.Element>()
ContentPage.set(TypeContent.Header, Header)
ContentPage.set(TypeContent.HeaderSmall, HeaderSmall)
ContentPage.set(TypeContent.HeaderMedium, HeaderMedium)
ContentPage.set(TypeContent.Image, Image)
ContentPage.set(TypeContent.Paragraf, Paragraf)


function isValidTypeContent(value: number): boolean {
  return Object.values(TypeContent).includes(value)
}

function GetFuncContentPage(t: number): (v: string) => JSX.Element {
  if (!isValidTypeContent(t)) {
    throw new Error(`Invalid TypeContent value: ${t}`)
  }

  const component = ContentPage.get(t)
  if (!component) {
    throw new Error(`Component not found for type: ${t}`)
  }

  return component
}

export { GetFuncContentPage }
