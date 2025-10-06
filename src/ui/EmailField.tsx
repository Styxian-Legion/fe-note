interface EmailField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function EmailField({...props}: EmailField) {
    return (
        <input type="email" className="w-full h-10 px-2 rounded-md border border-slate-300 outline-none focus:border-slate-400 duration-200" {...props} />
    )
}