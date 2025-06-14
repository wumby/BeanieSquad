"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";
import styles from "./Navbar.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sheet when a link is clicked
  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaAlignJustify />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="md:hidden bg-background-light dark:bg-background-dark z-[300]"
      >
        <div className="grid gap-4 p-4">
          <Link
            href="/"
            className={`${styles["links-small"]} dark:text-white dark:hover:text-gray-400`}
            onClick={closeSheet}
          >
            Home
          </Link>
          <Link
            href="/lineups"
            className={`${styles["links-small"]} dark:text-white dark:hover:text-gray-400`}
            onClick={closeSheet}
          >
            Lineups
          </Link>
          <Link
            href="/roster"
            className={`${styles["links-small"]} dark:text-white dark:hover:text-gray-400`}
            onClick={closeSheet}
          >
            Roster
          </Link>
          <Link
            href="/apparel"
            className={`${styles["links-small"]} dark:text-white dark:hover:text-gray-400`}
            onClick={closeSheet}
          >
            Apparel
          </Link>
          <Link
            href="/media"
            className={`${styles["links-small"]} dark:text-white dark:hover:text-gray-400`}
            onClick={closeSheet}
          >
            Media
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
