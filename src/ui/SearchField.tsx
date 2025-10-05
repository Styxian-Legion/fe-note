interface SearchField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function SearchField({...props}: SearchField) {
    return (
        <input type="search" placeholder="Search..." className="w-full h-10 px-2 border border-slate-300 outline-none focus:border-slate-400 duration-200" {...props} />
    )
}