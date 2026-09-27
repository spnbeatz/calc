"use client"

import { useCalculator } from "@/providers/CalculatorProvider"
import { KeyboardButton } from "./KeyboardButton";

export const NumberButton = ({ value } : { value: number }) => {

    const { currentValue, setCurrentValue } = useCalculator();

    const handleAddNumber = () => {
        const newValue = currentValue + value;
        setCurrentValue(newValue);
    }
    return (
        <KeyboardButton onClick={() => handleAddNumber()}>
            {value}
        </KeyboardButton>
    )
}