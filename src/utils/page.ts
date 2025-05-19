import type { JSX } from "react";
import { Header, HeaderMedium, HeaderSmall } from "@/components/moleculs/header";
import Image from "@/components/moleculs/image";
import Paragraf from "@/components/moleculs/paragraf";
import { EnumPageComponent } from "@/types";
import CodeMockup from "@/components/moleculs/code-mockup";


let ContentPage = new Map<EnumPageComponent, (v: string) => JSX.Element>()
ContentPage.set(EnumPageComponent.Header, Header)
ContentPage.set(EnumPageComponent.HeaderSmall, HeaderSmall)
ContentPage.set(EnumPageComponent.HeaderMedium, HeaderMedium)
ContentPage.set(EnumPageComponent.Image, Image)
ContentPage.set(EnumPageComponent.Paragraf, Paragraf)
ContentPage.set(EnumPageComponent.CodeMockup, CodeMockup)


function isValidTypeContent(value: number): boolean {
  return Object.values(EnumPageComponent).includes(value)
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
