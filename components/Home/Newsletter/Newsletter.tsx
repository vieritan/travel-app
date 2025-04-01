import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className="bg-black pt-12 pb-15 flex items-center justify-center w-full flex-col">
        <BsEnvelopePaper className="w-16 h-16 mt-10 text-white" />
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
            Your Travel Journey
        </h1>
        <p className="mt-3 text-white text-xs sm:text-sm">
            Sign up and we'll send the best deals to you
        </p>

        {/* Subscription input and buttons */}
        <div className="w-full">
            <input 
                type="text" className="px-6 py-3.5 bg-white mt-8 w-[95%} sm:w-[80%] md:w-[60%] lg:w-[40%] 
                block mx-auto rounded-lg outline-none text-center" 
                placeholder="Email"
            />
            <button className="px-6 py-3.5 text-white bg-blue-800 hover:bg-blue-950 transition-all duration-200 
            mt-3 w-[95%} sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none text-center">
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Newsletter