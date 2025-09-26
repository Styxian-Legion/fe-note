interface TextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export default function TextArea({...props}: TextArea) {
    return (
        <textarea className="w-full h-20 px-2 py-0.5 border border-slate-300 outline-none focus:border-slate-400 duration-200" {...props}>

        </textarea>
    )
}