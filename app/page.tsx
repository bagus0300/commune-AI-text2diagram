"use client"

import Image from "next/image"
import Link from "next/link"
import { discount } from "@/public/assets"
import { useTheme } from "next-themes"

import NoSsr from "@/components/no-ssr"

import "@/styles/theme.css"

const Home = () => {
  const { theme } = useTheme()
  return (
    <NoSsr>
      <div className={`size-full py-6 ${theme === "dark" ? "" : "gradient"}`}>
        <div className="flex flex-row ml-auto items-center sm:ml-60">
          <Image src={discount} alt="discount" className="size-[32px]" />
          <p className="ml-2">
            <span>Helpful for learning and understanding</span>
          </p>
        </div>

        <div className="mt-10 w-full">
          <div className="w-full text-center text-7xl">
            AI Generated Knowledge Diagram
          </div>
          <div className="mt-10 w-full text-center text-2xl">
            Explore the power of connecting words and ideas effortlessly
          </div>
          <div className="mt-10 text-center text-4xl">
            <Link href="/diagram">
              <button
                className={`rounded-xl px-5 py-2 border-[1px] ${
                  theme === "dark" ? "dark-button" : "light-button"
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:mx-60 lg:mx-20 md:mx-10 mt-32 shadow-xl py-4 px-6 rounded-xl text-2xl text-overflow">
          <h2>
            TextDiagram Pro transforms written paragraphs into visually
            appealing graph structures, enabling users to explore ideas
            presented in the text more intuitively. By leveraging advanced
            natural language processing techniques, this web application
            delivers interactive diagrams generated from user inputs, enhancing
            comprehension while adding an engaging visual element to traditional
            linear reading experiences.
          </h2>
          <h2 className="mt-10">
            Whether studying complex topics, brainstorming creative ideas,
            organizing research findings, or simply seeking a fresh approach
            towards understanding lengthier texts, TextDiagram Pro offers an
            innovative solution tailored to modern learning styles. Explore the
            power of connecting words and ideas effortlessly with this dynamic
            tool designed to elevate the reader experience beyond conventional
            boundaries.
          </h2>
        </div>
      </div>
    </NoSsr>
  )
}

export default Home
