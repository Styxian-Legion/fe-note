interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    children: React.ReactNode
    className?: string
}

export default function Button({ children, fullWidth, className, ...props }: Button) {
    return (
        <button className={`${fullWidth ? "w-full" : "w-fit px-4"} h-10 rounded-md duration-200 hover:cursor-pointer ${className}`}>
            {children}
        </button>
    )
}