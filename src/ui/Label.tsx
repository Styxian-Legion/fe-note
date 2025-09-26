interface Label extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

export default function Label({children, ...props}: Label) {
    return (
        <label className="text-sm font-medium capitalize" {...props}>
            {children}
        </label>
    )
}