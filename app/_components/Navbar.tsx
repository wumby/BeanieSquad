import { Button } from '@/components/ui/button'
import { DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Toggle } from '@radix-ui/react-toggle'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background-light dark:bg-background-dark">
    <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        {/* <MountainIcon className="h-6 w-6" /> */}
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Lineups
        </Link>
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Roster
        </Link>
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          {/* <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
          <span className="text-gray-500 dark:text-gray-400">123-456-7890</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              {/* <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
              <span className="sr-only">Search</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] p-4">
            <div className="relative">
              {/* <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" /> */}
              <Input type="search" placeholder="Search..." className="pl-8 w-full" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Toggle aria-label="Toggle dark mode" className="rounded-full">
          {/* <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}moon
        </Toggle>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
              {/* <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
  )
}

export default Navbar