import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Navbar.module.css";
import SearchCommand from "@/components/SearchBar";

const Navbar = () => {
  return (
    <header className="sticky top-5 z-50 w-full bg-background-dark bg-opacity-0">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={"/logo.png"} alt={""} width={75} height={75}></Image>
          <span className="text-lg md:text-3xl text-black dark:text-white">
            Beanie Squad
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className={`${styles["links"]} dark:text-white dark:hover:text-gray-400`}
          >
            Home
          </Link>
          <Link
            href="/lineups"
            className={`${styles["links"]} dark:text-white dark:hover:text-gray-400`}
          >
            Lineups
          </Link>
          <Link
            href="/roster"
            className={`${styles["links"]} dark:text-white dark:hover:text-gray-400`}
          >
            Roster
          </Link>
          <Link
            href="#"
            className={`${styles["links"]} dark:text-white dark:hover:text-gray-400`}
          >
            Apparel
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <SearchCommand />
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                {/* <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className={`${styles["links-small"]} dark:text-gray-400 dark:hover:text-gray-50`}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className={`${styles["links-small"]} dark:text-gray-400 dark:hover:text-gray-50`}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className={`${styles["links-small"]} dark:text-gray-400 dark:hover:text-gray-50`}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className={`${styles["links-small"]} dark:text-gray-400 dark:hover:text-gray-50`}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
