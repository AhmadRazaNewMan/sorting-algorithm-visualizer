'use client'

import { useEffect } from "react";
import { useSortingAlgorithmContext } from "./context/Visualizer";

export default function Home() {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
  }, []); // Add dependencies

  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
     <div className="h-full flex justify-content">
      <div id="content-container" className="flex border border-red-200 max-w-[1020px] w-full flex-col lg:px-0 px-4">
      <div className="h-[66px] border border-red-200 relative flex items-center justify-between w-full">
        <h1 className="text-gray-300 text-2xl font-light hidden md:flex ">
          Sorting Visualizer
        </h1>
        <div>controls</div>
      </div>
      </div>
     </div>
    </main>
  );
}
