import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { FaTag, FaRandom } from 'react-icons/fa';


const Tag = () => {
  const [tag, setTag] = useState("Pussy Cat");
  const {loading,gif,fetchData} = useGif(tag);
  
  return (
    <div className="flex flex-col justify-between items-center bg-glass w-full md:w-96 md:h-[500px] h-auto rounded-2xl border border-white/30 shadow-lg backdrop-blur-md gap-y-6 py-7 px-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-within:scale-105 cursor-pointer">
      <h2 className="flex items-center gap-2 uppercase font-extrabold text-2xl text-primary mb-2">
        <FaTag className="text-accent text-3xl" />
        Create Custom GIFs
      </h2>
      {loading ? <Spinner /> : <div className="flex-1 flex items-center justify-center w-full"><img src={gif} alt={tag + ' gif'} className="rounded-xl shadow-md max-w-full max-h-60 border border-secondary/30 mx-auto" /></div>}
      <div className="flex flex-col items-center gap-y-3 w-full">
        <div className="relative w-9/12">
          <input
            type="text"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="uppercase bg-white/80 w-full rounded-xl font-normal py-2 px-10 text-base text-primary text-center shadow-inner border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTag(event.target.value);
                fetchData(tag);
              }
            }}
          />
          <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-lg pointer-events-none" />
        </div>
        <button
          onClick={() => fetchData(tag)}
          className="flex items-center justify-center gap-2 uppercase bg-accent text-white w-10/12 rounded-xl font-semibold py-2 text-lg shadow-md hover:bg-primary hover:text-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <FaRandom className="text-lg" /> Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
