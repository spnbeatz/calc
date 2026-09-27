"use client"
import { KeyboardButton } from "./KeyboardButton";
import { useCalculator } from "@/providers/CalculatorProvider";

export const EqualButton = () => {
    const { handleEqual } = useCalculator();
    return (
        <KeyboardButton onClick={handleEqual}>
            =
        </KeyboardButton>
    )
}