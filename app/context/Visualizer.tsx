'use client'
import { SortingAlgorithmType } from "@/app/lib/type";
import { generateRandomNumberFromInterval, min_animation_speed } from "@/app/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface SortingAlgorithmContextType{
    arrayToSort: number[];
    setArratToSort: React.Dispatch<React.SetStateAction<number[]>>;
    selectedAlgorithm: SortingAlgorithmType;
    setSelectedAlgorithm: React.Dispatch<React.SetStateAction<SortingAlgorithmType>>;
    isSorting: boolean;
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
    animationSpeed: number;
    setAnimationSpeed: React.Dispatch<React.SetStateAction<number>>;
    isAnimationComplete: boolean;
    setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
    runAnimation: () => void;
    resetArrayAndAnimation: () => void;

    
}

const sortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>(undefined)


export const SortingAlgorithmProvider = ({children}:{children: React.ReactNode})=>{
    const [ arrayToSort,setArratToSort] = useState<number []>([100,200,75,60,150])
    const [selectedAlgorithm,setSelectedAlgorithm] = useState<SortingAlgorithmType>("Bubble Sort")
    const [isSorting,setIsSorting] = useState<boolean>(false)
    const [animationSpeed,setAnimationSpeed] = useState<number>(min_animation_speed)
    const [isAnimationComplete,setAnimationComplete] =useState<boolean>(false) 

    useEffect(()=>{
        resetArrayAndAnimation()
        window.addEventListener("resize",resetArrayAndAnimation)
        return ()=>{
            window.removeEventListener("resize",resetArrayAndAnimation) 
        }
    },[])

    const resetArrayAndAnimation = ()=>{
        const contentContainer = document.getElementById("content-container")
        if(!contentContainer) return
        const contentContainerWidth = contentContainer.clientWidth
        const tempArray:number[] = []
        const numbLines = contentContainerWidth / 8;
        const containerHeight = window.innerHeight
        const maxLineHeight = Math.max(containerHeight - 420,100)

        for(let i  = 0 ; i<numbLines;i++){
            tempArray.push(
                generateRandomNumberFromInterval(35,maxLineHeight)

            )
        }
        setArratToSort(tempArray)
        setAnimationComplete(false)
        setIsSorting(false)



    }
    const runAnimation = ()=>{}




    const value = {
        arrayToSort,
        setArratToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setAnimationComplete,
        runAnimation,
        resetArrayAndAnimation
    }

    return <sortingAlgorithmContext.Provider value={value}>{children}</sortingAlgorithmContext.Provider>

}

export const useSortingAlgorithmContext = ()=>{
   const context = useContext(sortingAlgorithmContext)
   if(!context){
    throw new Error("useSortingAlgorithm must be used within a sortingAlgorithmProvider")
   }
   return context
    
}