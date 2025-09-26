"use client"
import { useState } from "react"

interface PasswordField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function PasswordFiled({ ...props }: PasswordField) {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-full relative">
            <input type="password" className="w-full h-10 px-2 border border-slate-300 outline-none focus:border-slate-400 duration-200" {...props} />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sm hover:cursor-pointer" onClick={toggleShowPassword} type="button">
                {showPassword ? "Hide" : "Show"}
            </button>
        </div>
    )
}