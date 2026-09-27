import { Keyboard } from "./keyboard/Keyboard"
import { Screen } from "./Screen"

export const Calculator = () => {
    return (
        <div className="w-[335px] h-auto rounded-2xl bg-black p-6">
            <Screen />
            <Keyboard/>
        </div>
    )
}