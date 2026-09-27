import { ActionButton } from "../buttons/ActionButton";
import { EqualButton } from "../buttons/EqualButton";

const actions: string[] = ["+", "-", "*", "/"];

export const ActionsKeyboard = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {actions.map((action) => <ActionButton action={action} />)}
            <EqualButton />
        </div>
    )
}