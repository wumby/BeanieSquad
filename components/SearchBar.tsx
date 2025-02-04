"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  return (
    <>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => setOpen(true)}
      >
        <Search size={16} />
        <span>CTRL + K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandItem
            onSelect={() => {
              setOpen(false);
            }}
          >
            Lineups
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>Roster</CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>Apparel</CommandItem>
        </CommandList>
      </CommandDialog>
    </>
  );
}
