import { BackspaceButton } from "../buttons/BackspaceButton";
import { NumberButton } from "../buttons/NumberButton";
import { ResetButton } from "../buttons/ResetButton";


const numbers: any[] = [1,2,3,4,5,6,7,8,9, ".",0]

export const NumbersKeyboard = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <ResetButton />
            {numbers.map((number) => {
                return <NumberButton value={number} />
            })}
            <BackspaceButton />
        </div>
    )
}