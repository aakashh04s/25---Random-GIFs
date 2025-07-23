import React from 'react'
import Random from "./components/Random";
import Tag from "./components/Tag";
import { FaRandom } from 'react-icons/fa';

const App = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen background items-center overflow-x-hidden py-8 px-2">
      <div className="w-full md:w-4/5 lg:w-2/3 bg-glass shadow-xl rounded-3xl backdrop-blur-md border border-white/30 p-6 flex flex-col items-center">
        <h1 className="flex items-center justify-center gap-3 w-full text-primary bg-glass rounded-2xl text-center py-4 px-10 text-4xl font-extrabold uppercase shadow-md mb-2">
          <FaRandom className="text-accent text-5xl drop-shadow" />
          Random GIFs
        </h1>
        <div className="flex flex-col md:flex-row w-full items-center justify-center mt-8 gap-8">
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  )
}

export default App