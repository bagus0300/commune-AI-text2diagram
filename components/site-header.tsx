import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky my-2 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <button className="font-bold hover:bg-gray-200 rounded-xl px-2">
              Connect Wallet
            </button>
            {/* <button className="bg-blue-100 rounded-xl py-1 px-2 hover:bg-blue-200">
              Connect Wallet
            </button> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
