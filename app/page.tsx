import Image from "next/image"
import Link from "next/link"
import { discount } from "@/public/assets"

const Home = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="flex flex-row items-center ml-auto  sm:ml-60 mt-10">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className="ml-2">
          <span>Helpful for learning and understanding</span>
        </p>
      </div>

      <div className="w-full mt-10">
        <div className="w-full text-7xl text-center">
          AI Generated Knowledge Diagram
        </div>
        <div className="w-full text-center text-2xl mt-10">
          Explore the power of connecting words and ideas effortlessly
        </div>
        <div className="text-4xl text-center mt-10">
          <Link href="/diagram">
            <button className="bg-blue-900 rounded-xl py-2 px-5 hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-10 mx-40">
        <h2 className="text-3xl">
          TextDiagram Pro transforms written paragraphs into visually appealing
          graph structures, enabling users to explore ideas presented in the
          text more intuitively. By leveraging advanced natural language
          processing techniques, this web application delivers interactive
          diagrams generated from user inputs, enhancing comprehension while
          adding an engaging visual element to traditional linear reading
          experiences.
        </h2>
        <h2 className="text-3xl mt-10">
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
  )
}

export default Home
