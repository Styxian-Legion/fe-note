interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export default function IconButton({children, className, ...props}: IconButton) {
    return (
        <button className={`w-10 h-10 flex justify-center items-center hover:shadow-sm bg-white border border-slate-200 hover:cursor-pointer rounded-sm ${className}`} {...props}>
            {children}
        </button>
    )
}