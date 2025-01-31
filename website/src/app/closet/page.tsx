"use client";

import { useState } from "react";

export default function Closet() {
  const [isClosetEmpty, setIsClosetEmpty] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-start pl-12 min-h-screen bg-[#fae37f] p-6 font-mono">
      <div className="text-6xl font-semibold">My Closet</div>
      <div className="text-lg text-semibold">
        This is your closet, where you can store anything from shoes, clothes to
        gloves!
      </div>
      {/* If the close is empty */}
      {isClosetEmpty && (
        <div className="border-8 border-spacing-2 border-red-950 absolute inset-0 m-auto w-3/5 h-3/5 bg-[#8B4513] rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          <div>
            Your Closet Box is empty! Add some clothing to your closet first!
          </div>
        </div>
      )}
      {/* If the close is not empty */}
      {!isClosetEmpty && (
        <div className="border-8 border-spacing-2 border-red-950 absolute inset-0 m-auto w-3/5 h-3/5 bg-[#8B4513] rounded-lg shadow-lg flex pt-3 justify-center text-white text-2xl font-bold">
          <div>Here is your closet!</div>
        </div>
      )}
    </div>
  );
}
