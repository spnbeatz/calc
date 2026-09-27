"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type CalculatorContextType = {
    currentValue: string;
    setCurrentValue: (value: string) => void;
    backspace: () => void,
    reset: () => void,
    handleAction: (action: string) => void,
    handleEqual: () => void
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);

type CalculatorProviderProps = {
    children: ReactNode;
};

export function CalculatorProvider({
    children,
}: CalculatorProviderProps) {
    const [action, setAction] = useState<string | null>(null);
    const [memory, setMemory] = useState<string | null>(null);
    const [currentValue, setCurrentValue] = useState("");

    const backspace = () => {
        const newValue = currentValue.slice(0, currentValue.length - 1)
        setCurrentValue(newValue);
    }

    const reset = () => {
        setCurrentValue("");
        setAction(null);
        setMemory(null)
    }

    const handleAction = (action: string) => {
        setAction(action);
        setMemory(currentValue);
        setCurrentValue("");
    }

    const calculate = (
        action: string | null,
        memory: string | null,
        val: string
    ) => {
        if (action === null || memory === null) return val;

        const memoryNumber = Number(memory);
        const valueNumber = Number(val);

        switch (action) {
            case "+":
                return memoryNumber + valueNumber;

            case "-":
                return memoryNumber - valueNumber;

            case "*":
                return memoryNumber * valueNumber;

            case "/":
                return memoryNumber / valueNumber;

            default:
                return valueNumber;
        }
    };

    const handleEqual = () => {
        const result = calculate(action, memory, currentValue);

        setCurrentValue(String(result));
        setAction(null);
        setMemory(null);
    };

    return (
        <CalculatorContext.Provider
            value={{
                currentValue,
                setCurrentValue,
                backspace, reset,
                handleAction,
                handleEqual
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
}

export function useCalculator() {
    const context = useContext(CalculatorContext);

    if (!context) {
        throw new Error(
            "useCalculator must be used inside CalculatorProvider"
        );
    }

    return context;
}