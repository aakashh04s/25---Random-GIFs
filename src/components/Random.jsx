import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { FaLaughBeam } from 'react-icons/fa';
import { FaRandom } from 'react-icons/fa';

const Random = () => {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col justify-between items-center bg-glass w-full md:w-96 md:h-[500px] h-auto rounded-2xl border border-white/30 shadow-lg backdrop-blur-md gap-y-6 py-7 px-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-within:scale-105 cursor-pointer">
      <h2 className="flex items-center gap-2 uppercase font-extrabold text-2xl text-primary mb-2"><FaLaughBeam className="text-accent text-3xl" /> Random GIF</h2>
      {loading ? <Spinner /> : <div className="flex-1 flex items-center justify-center w-full"><img src={gif} alt="Random GIF" className="rounded-xl shadow-md max-w-full max-h-60 border border-secondary/30 mx-auto" /></div>}
      <button
        onClick={() => fetchData()}
        className="flex items-center justify-center gap-2 uppercase bg-accent text-white w-10/12 rounded-xl font-semibold py-2 text-lg shadow-md hover:bg-primary hover:text-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50">
        <FaRandom className="text-lg" /> Generate
      </button>
    </div>
  );
};

export default Random;
