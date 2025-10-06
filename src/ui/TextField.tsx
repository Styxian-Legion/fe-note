interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function TextField({...props}: TextField) {
    return (
        <input type="text" className="w-full h-10 px-2 border rounded-md border-slate-300 outline-none focus:border-slate-400 duration-200" {...props} />
    )
}