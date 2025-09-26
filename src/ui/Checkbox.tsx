interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement>{

}

export default function Checkbox({ ...props }: Checkbox) {
    return (
        <input type="checkbox" className="w-4 h-4" {...props} />
    )
}