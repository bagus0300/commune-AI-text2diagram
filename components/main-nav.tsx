import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex md:mr-[200px]  sm:mr-auto gap-6 md:gap-10">
      <Link href="/" className="flex flex-row items-center ">
        <Image
          alt="diagram"
          src="/images/logo.png"
          width={80}
          height={80}
        ></Image>
        <span className="md:text-xl sm:text-sm font-bold ">
          {siteConfig.name}
        </span>
        <span className="mt-1">{siteConfig.subName}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
