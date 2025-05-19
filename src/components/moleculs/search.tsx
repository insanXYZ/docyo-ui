import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import type { MapContentSearch } from "@/types";
import { Navigate, useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function Search({ contentSearch }: { contentSearch: MapContentSearch }) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function NavigateOnSearch(url: string) {
    navigate(url)
  }

  return (
    <>

      <Button variant={"secondary"} className="gap-16" onClick={() => setOpen(true)}>
        <div>Search...</div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(contentSearch).map(([heading, contents]) => (
            <CommandGroup key={Math.random()} heading={heading}>
              {contents.map(v => (
                <CommandItem key={v.label + v.url} onClick={() => NavigateOnSearch(v.url)}>
                  {v.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

// return <CommandGroup heading={heading}>
//   {contents.map(v => {
//     return <span>{v.label}</span>
//   })}
// </CommandGroup>
