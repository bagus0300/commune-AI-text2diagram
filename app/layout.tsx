"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import { store } from "@/store/index"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { Analytics } from "@vercel/analytics/react"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

import "@rainbow-me/rainbowkit/styles.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Providers from "@/app/provider"

import "react-toastify/dist/ReactToastify.css"
import "reactflow/dist/style.css"

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})

const queryClient = new QueryClient()

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script async src="https://tally.so/widgets/embed.js"></script>
        </head>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <Providers>
                  <Provider store={store}>
                    <ThemeProvider attribute="class" defaultTheme="light">
                      <div className="relative flex w-full h-screen flex-col">
                        <SiteHeader />
                        <div className="flex-1">{children}</div>
                      </div>
                      <TailwindIndicator />
                    </ThemeProvider>
                    <Analytics />
                  </Provider>
                </Providers>
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </body>
      </html>
    </>
  )
}
