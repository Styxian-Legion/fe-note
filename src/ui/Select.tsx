import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
}

export default function Select({ children, ...props }: SelectProps) {
    return (
        <select
            className="w-full h-10 px-2 border border-slate-300 outline-none focus:border-slate-400 duration-200"
            {...props}
        >
            {children}
        </select>
    );
}


const Option = ({ value, children, ...props }: { value: string, children: React.ReactNode }) => {
    return (
        <option value={value} {...props}>
            {children}
        </option>
    )
}

Select.Option = Option