"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import ThemeProvider, { ThemeContext } from "@/context/toggle-theme-provider"
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { type InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { toast } from "react-toastify"

export function WalletModal({
  open,
  wallets,
  setOpen,
  handleWalletSelections,
}: {
  open: boolean
  setOpen: (args: boolean) => void
  wallets: InjectedAccountWithMeta[]
  handleWalletSelections: (arg: InjectedAccountWithMeta) => void
}) {
  const theme = useContext(ThemeContext)

  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta>()

  return (
    <ThemeProvider>
      <div
        role="dialog"
        className={`fixed inset-0 z-[100] ${
          open ? "block" : "hidden"
        } animate-fade-in-down h-full`}
      >
        <div className="absolute inset-0 bg-gray opacity-80" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative w-[100%] max-w-3xl transform overflow-hidden rounded-3xl border-2 border-zinc-800 bg-white text-left shadow-custom dark:border-white-500 dark:bg-gray-700">
              <div className="flex flex-col items-center justify-between gap-3 border-b-2 border-zinc-800 bg-cover bg-center bg-no-repeat p-6 md:flex-row dark:border-white">
                <div className="flex flex-col items-center md:flex-row">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                  <span
                    className="pl-2 text-xl font-bold leading-6 dark:text-red-900"
                    id="modal-title"
                  >
                    Please Choose wallet address
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border-4 border-black p-1 transition duration-200 dark:border-white-800 dark:bg-light-dark hover:dark:bg-dark"
                >
                  <XMarkIcon className="h-6 w-6 dark:fill-white-blue" />
                </button>
              </div>
              <div className="flex flex-col gap-y-4 overflow-y-auto p-6">
                {wallets.map((item) => (
                  <button
                    key={item.address}
                    onClick={() => setSelectedAccount(item)}
                    className={`text-md flex cursor-pointer items-center gap-x-3 overflow-auto rounded-xl border-2 p-5 shadow-white dark:text-white ${
                      selectedAccount === item
                        ? "border-green-500"
                        : "border-black dark:border-white-600 "
                    }`}
                  >
                    <CheckCircleIcon
                      className={`h-6 w-6 ${
                        selectedAccount === item
                          ? "fill-green-500"
                          : "fill-black dark:fill-white"
                      }`}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-semibold">{item.meta.name}</span>
                      <span>{item.address}</span>
                    </div>
                  </button>
                ))}
                {!wallets.length && (
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-sm text-gray-500">
                    <div>No wallet found.</div>
                    <div>
                      Please install Polkadot extension or check permission
                      settings.
                    </div>
                    <a
                      href="https://polkadot.js.org/extension/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Install Extension
                    </a>
                  </div>
                )}

                <button
                  className="w-44 rounded-xl border-2 border-blue-500 mx-64 text-xl font-semibold text-blue-500 "
                  onClick={() => {
                    if (!selectedAccount) {
                      toast.error("No address selected", {
                        theme: theme === "dark" ? "dark" : "light",
                      })
                      return
                    }
                    handleWalletSelections(selectedAccount)
                  }}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
