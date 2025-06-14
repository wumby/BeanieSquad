import Link from "next/link";
import Image from "next/image";
import SearchCommand from "@/components/SearchBar";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="sticky top-5 w-full bg-background-light dark:bg-background-dark !bg-opacity-0 z-[100]">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer focus-visible:outline-none">
              <span
                className={`${styles["links"]} dark:text-white dark:hover:text-gray-400`}
              >
                Fan-Zone
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 p-2 z-[200]">
              <DropdownMenuItem>
                <Link href="/media" className="w-full">
                  Media
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/apparel" className="w-full">
                  {" "}
                  Apparel
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-4">
          <SearchCommand />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
