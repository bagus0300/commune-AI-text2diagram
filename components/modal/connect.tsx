import React, { useState } from "react"
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { AiFillCheckCircle } from "react-icons/ai"
import { BiCheckCircle } from "react-icons/bi"
import Modal from "react-responsive-modal"

import Button from "../button"
import { infoToast } from "../toast"

const WalletModal = ({
  open,
  setOpen,
  wallets,
  handleWalletSelections,
}: {
  open: boolean
  setOpen: (args: boolean) => void
  wallets: InjectedAccountWithMeta[]
  handleWalletSelections: (arg: InjectedAccountWithMeta) => void
}) => {
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta>()
  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      Choose your polkadot wallet to connect
      <hr className="my-3" />
      <div className="mt-5">
        <div className="flex flex-col gap-y-4 h-[300px] overflow-y-scroll no-scrollbar">
          {wallets.map((item) => (
            <button
              key={item.address}
              className={`border-[1px] text-sm rounded-xl ${
                selectedAccount === item ? "bg-green-50" : "bg-blue-50"
              } p-4 px-3 cursor-pointer shadow-md flex items-center gap-x-3`}
              onClick={() => setSelectedAccount(item)}
            >
              {
                <BiCheckCircle
                  size={30}
                  className={`${
                    selectedAccount === item
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                />
              }{" "}
              {item.address}
            </button>
          ))}
          {!wallets.length && (
            <div className="text-center text-sm text-gray-500 flex flex-col justify-center items-center h-full gap-4">
              <div>No wallet found.</div>
              <div>
                Please install polkadot extension or check permission settings.
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
        </div>
      </div>
      <div className="mt-5">
        <Button
          variant="primary"
          size="large"
          className="w-full justify-center"
          onClick={() => {
            if (!selectedAccount) {
              infoToast("Select at least one wallet!")
              return
            }
            handleWalletSelections(selectedAccount as InjectedAccountWithMeta)
          }}
        >
          Select Wallet
        </Button>
      </div>
    </Modal>
  )
}

export default WalletModal
