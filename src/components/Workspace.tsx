import { FaWpforms, FaList, FaTrash } from "react-icons/fa";
import { SiPostman, SiGoogledocs } from "react-icons/si";

type TabItem = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
    active: string
}

export default function Workspace({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="w-full flex flex-col gap-4">
            {children}
        </div>
    )
}

const Message = ({ isError, children }: Readonly<{ isError: boolean, children: React.ReactNode }>) => {
    return (
        <div className={`w-full h-12 px-3 flex items-center ${isError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
            {children}
        </div>
    )
}

const Header = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full flex items-center justify-between">
            {children}
        </div>
    )
}

const Heading = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">
                {children}
            </h1>
        </div>
    )
}

const ActionButton = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex items-center gap-2">
            {children}
        </div>
    )
}

const TabContainer = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full h-10 grid grid-cols-2 gap-4">
            {children}
        </div>
    )
}

const TabItem = ({ name, active, ...props }: TabItem) => {
    return (
        <>
            <button className={`w-full capitalize rounded-sm hover:cursor-pointer ${name === active ? "bg-black text-white" : "bg-slate-100 text-black"}`} {...props}>
                {name}
            </button>
        </>
    )
}

const List = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {children}
        </div>
    )
}

const ListItem = ({ type, name, group, lastUpdate }: { type: string, name: string, group: string, lastUpdate: string }) => {
    return (
        <div className="w-full h-14 px-1.5 flex justify-between items-center gap-4 border rounded-sm border-slate-200">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex justify-center items-center border rounded-sm border-slate-200 bg-black text-white">
                    {type === "api-docs" && <SiPostman className="w-4 h-4" />}
                    {type === "form" && <FaWpforms className="w-4 h-4" />}
                    {type === "docs" && <SiGoogledocs className="w-4 h-4" />}
                    {type === "list" && <FaList className="w-4 h-4" />}
                </div>
                <div>
                    <h1 className="flex items-center gap-2 font-semibold">
                        {name}
                        <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded-sm">{group || "none"}</span>
                    </h1>
                    <p className="text-xs text-slate-400">{lastUpdate}</p>
                </div>
            </div>
            <div className="h-10 w-10 flex justify-center items-center border rounded-sm border-slate-200 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white duration-200">
                <FaTrash className="w-4 h-4" />
            </div>
        </div>
    )
}

const GroupItem = ({name, children}: Readonly<{name: string, children: React.ReactNode}>) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div>
                <h1 className="font-semibold">{name}</h1>
            </div>
            {children}
        </div>
    )
}

Workspace.Message = Message
Workspace.Header = Header
Workspace.Heading = Heading
Workspace.ActionButton = ActionButton

Workspace.TabContainer = TabContainer
Workspace.TabItem = TabItem

Workspace.List = List
Workspace.ListItem = ListItem

Workspace.GroupItem = GroupItem