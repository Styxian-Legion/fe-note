export default function Form({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="w-full flex flex-col gap-4">
            {children}
        </div>
    )
}

const Item = ({direction, children}: Readonly<{direction: "row" | "column", children: React.ReactNode}>) => {
    return (
        <div className={`w-full flex ${direction === "row" ? "flex-row items-center" : "flex-col"} gap-1.5`}>
            {children}
        </div>
    )
}

const Message = ({isError, children}: Readonly<{isError: boolean, children: React.ReactNode}>) => {
    return (
        <div className={`w-full h-12 px-3 rounded-md flex items-center ${isError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
            {children}
        </div>
    )
}

Form.Item = Item
Form.Message = Message