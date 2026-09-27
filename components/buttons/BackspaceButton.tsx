"use client"

import { HiOutlineBackspace } from "react-icons/hi";
import { KeyboardButton } from "./KeyboardButton";
import { useCalculator } from "@/providers/CalculatorProvider";

export const BackspaceButton = () => {
    const { backspace } = useCalculator();

    return (
        <KeyboardButton onClick={backspace}>
            <HiOutlineBackspace />
        </KeyboardButton>
    )
}