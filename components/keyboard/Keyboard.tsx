import { ActionsKeyboard } from "./ActionsKeyboard"
import { NumbersKeyboard } from "./NumbersKeyboard"

export const Keyboard = () => {
    return (
        <div className="w-full flex flex-row items-between justify-start mt-4 gap-4">
            <NumbersKeyboard />
            <ActionsKeyboard />
        </div>
    )
}