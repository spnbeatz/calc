export const KeyboardButton = ({
    children,
    onClick,
    className
}: {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string
}) => {
    return (
        <button
            className={`w-[60px] h-[60px] shrink-0 rounded-lg 
            inset-shadow-xs shadow-md text-lg font-bold bg-white
            flex justify-center items-center
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}