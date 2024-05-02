"use client"

import { ReactNode } from "react"
import { PolkadotProvider } from "@/context"
import { store } from "@/store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <PolkadotProvider wsEndpoint={String(process.env.NEXT_PUBLIC_COMMUNE_API)}>
      <Provider store={store}>
        {children} <ToastContainer />
      </Provider>
    </PolkadotProvider>
  )
}

export default Providers
