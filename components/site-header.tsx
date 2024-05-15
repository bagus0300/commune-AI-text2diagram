"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePolkadot } from "@/context"
import { truncateWalletAddress } from "@/utils"
import { Menu } from "@headlessui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useTheme } from "next-themes"
import { AiFillWallet } from "react-icons/ai"
import { FaSpinner } from "react-icons/fa6"
import { GrDashboard } from "react-icons/gr"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Button from "@/components/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { isInitialized, handleConnect, selectedAccount } = usePolkadot()
  const { theme } = useTheme()
  return (
    <header className="bg-background sticky mx-[30px] my-2 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-end sm:space-x-0">
        <div className="flex flex-row">
          {/* <Image alt="diagram" src="/images/logo.png" width={80} height={80} /> */}
          <MainNav items={siteConfig.mainNav} />
        </div>

        <Menu as="div" className="flex">
          <Menu.Button
            style={{ marginLeft: "0.35rem" }}
            className="text-black hover:border-[3px] dark:text-white dark:hover:text-blue-100 border-[2px] p-0 shadow-md  rounded-lg px-4 py-2 mr-4"
          >
            Choose wallet
          </Menu.Button>
          <Menu.Items className=" bg-blue-200 text-black dark:bg-dark bg-white-700  absolute z-10 mt-12 w-[12.5rem] origin-top-right py-1 px-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col rounded-3xl">
            <Menu.Item>
              {isInitialized && selectedAccount ? (
                <div className="flex items-center">
                  <div className="relative flex items-center  rounded-full shadow px-4 py-2">
                    <button className="flex items-center cursor-pointer">
                      <AiFillWallet
                        size={24}
                        className="text-bleck dark:text-black"
                      />
                      <span className="ml-2 font-mono dark:text-black">
                        {truncateWalletAddress(selectedAccount.address)}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-2 w-full">
                  {!isInitialized && <FaSpinner className="spinner" />}
                  <Button
                    size="large"
                    variant="primary"
                    className="flex items-center text-black justify-center"
                    onClick={handleConnect}
                    isDisabled={!isInitialized}
                  >
                    Connect with Polkadot
                  </Button>
                </div>
              )}
            </Menu.Item>

            <Menu.Item>
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading"
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated")
                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <Button
                              size="large"
                              variant="primary"
                              className="flex items-center justify-center mt-2 w-full"
                              onClick={openConnectModal}
                            >
                              Connect with Metamask
                            </Button>
                          )
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              type="button"
                              style={{
                                boxShadow: "rgb(0 0 0 / 98%) 3px 3px 3px 3px",
                              }}
                            >
                              Wrong network
                            </button>
                          )
                        }

                        return (
                          <div
                            style={{ display: "flex", gap: 12 }}
                            className="flex items-center flex-col justify-center"
                          >
                            <button
                              onClick={openChainModal}
                              style={{ display: "flex", alignItems: "center" }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: "hidden",
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <Image
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                      width={12}
                                      height={12}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>
                            <button type="button" style={{ color: "darkcyan" }}>
                              Connected
                            </button>
                            <button onClick={openAccountModal} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ""}
                            </button>
                          </div>
                        )
                      })()}
                    </div>
                  )
                }}
              </ConnectButton.Custom>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <ThemeToggle />
      </div>
    </header>
  )
}
