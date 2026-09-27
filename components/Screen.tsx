"use client"

import { ScreenNumber } from "./ScreenNumber";
import { useCalculator } from "@/providers/CalculatorProvider";

export const Screen = () => {
    const { currentValue } = useCalculator();

    return (
        <div className="w-full bg-green-500 border-green-600 border-2 h-[50px] p-2 rounded-md flex flex-row justify-end items-center">
            {currentValue.length < 1 && <ScreenNumber char="0"/>}
            {currentValue.split("").map((value) => <ScreenNumber char={value}/> )}
        </div>
    )
}