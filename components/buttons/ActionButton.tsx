"use client"
import { KeyboardButton } from "./KeyboardButton"
import { useCalculator } from "@/providers/CalculatorProvider"

export const ActionButton = ({action} : {action:string}) => {
    const { handleAction } = useCalculator();
    return (
        <KeyboardButton onClick={() => handleAction(action)}>
            {action}
        </KeyboardButton>
    )
}