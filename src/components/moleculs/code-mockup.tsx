import { Check, Copy } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";

export default function CodeMockup(v: string) {
  const [doCopy, setDoCopy] = useState(false)

  function copy() {
    navigator.clipboard.writeText(v);
    setDoCopy(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setDoCopy(false)
    }, 1500)
  }, [doCopy])

  return (
    <Card className="bg-neutral-800 relative">
      <div className="absolute text-white top-3 right-4 ">
        {doCopy ? (
          <Check className="w-4 cursor-pointer" />
        ) : (
          <Copy onClick={() => copy()} className="w-4 cursor-pointer" />
        )}
      </div>
      <CardContent className="text-white">
        <pre>{v}</pre>
      </CardContent>
    </Card>
  )
}
