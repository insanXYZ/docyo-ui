import type { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex items-center">
      <div className="w-[65%] flex flex-col gap-2">
        {children}
      </div>
    </div>
  )
}
