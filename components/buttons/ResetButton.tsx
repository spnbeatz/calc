"use client"

import { KeyboardButton } from "./KeyboardButton";
import { useCalculator } from "@/providers/CalculatorProvider";

export const ResetButton = () => {
    const { reset } = useCalculator();

    return (
        <KeyboardButton onClick={reset} className="w-[212px] col-span-3">
            C
        </KeyboardButton>
    )
}