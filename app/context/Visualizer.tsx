'use client'
import { SortingAlgorithmType } from "@/app/lib/type";
import { min_animation_speed } from "@/app/lib/utils";
import { createContext, useContext, useState } from "react";

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
    const [ arrayToSort,setArratToSort] = useState<number []>([])
    const [selectedAlgorithm,setSelectedAlgorithm] = useState<SortingAlgorithmType>("Bubble Sort")
    const [isSorting,setIsSorting] = useState<boolean>(false)
    const [animationSpeed,setAnimationSpeed] = useState<number>(min_animation_speed)
    const [isAnimationComplete,setAnimationComplete] =useState<boolean>(false) 

    const resetArrayAndAnimation = ()=>{

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