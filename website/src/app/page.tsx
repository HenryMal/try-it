"use client";

import Image from "next/image";
import { useState } from "react";
import lvCoatImage from "./images/lv_coat.webp";
import hoYeonImage from "./images/ho_yeon.jpeg";

export default function Home() {
  const [exploreText, setExploreText] = useState<string>("");

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#e6b175] p-6 font-mono">
      <div className="text-6xl font-semibold pb-3">
        FIND YOUR IDEAL STYLE AND TRY IT!
      </div>
      <div className="text-xl px-36 pb-6">
        Search for clothing and brands, add then to your closet, and use our
        AI-powered technology to envision yourself wearing it without actually
        having to wear it! It's quick and free!
      </div>

      {/* Search bar to explore new clothing and accessories */}
      <div className="flex w-full max-w-3xl bg-white rounded-full shadow-lg overflow-hidden">
        <input
          type="text"
          placeholder="Explore new styles!"
          value={exploreText}
          onChange={(e) => setExploreText(e.target.value)}
          className="flex-1 p-6 text-xl text-gray-700 outline-none border-none"
        ></input>
        <button
          type="button"
          onClick={() => alert("User searched for " + exploreText)}
          className="px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-lg font-semibold rounded-full hover:opacity-80 transition"
        >
          Explore now!
        </button>
      </div>

      <div className="flex flex-start justify-center w-3/12 pt-10">
        <Image src={lvCoatImage} alt="Louis Vuitton coat" />
        <div className="text-9xl">{">"}</div>
        <Image
          src={hoYeonImage}
          alt="Ho Yeon Model"
          className="rounded-full pl-3"
        />
      </div>
    </div>
  );
}
