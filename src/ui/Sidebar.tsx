"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Sidebar({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <aside className={`fixed top-0 left-0 w-full max-w-xs h-full min-h-screen pt-24 px-4 flex flex-col gap-4 border-r border-slate-200 bg-white duration-200 ${className}`}>
            {children}
        </aside>
    )
}

const Group = ({ id, children }: { id: string, children: React.ReactNode }) => {
    return (
        <div id={id} className="flex flex-col gap-2">
            {children}
        </div>
    )
}

const Menu = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`w-full h-12 px-1.5 flex items-center gap-3 hover:bg-slate-100 hover:cursor-pointer rounded-sm ${pathname === href ? "bg-slate-100" : ""}`}>
            {children}
        </Link>
    )
}

const MenuIcon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-8 h-8 border text-slate-500 rounded-sm flex items-center justify-center">
            {children}
        </div>
    )
}

const MenuLabel = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-sm font-semibold">{children}</h1>
    )
}

const Heading = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-sm font-semibold">{children}</h1>
    )
}

const Spacer = () => (
    <div className="h-14">
    </div>
)

Sidebar.Group = Group
Sidebar.Menu = Menu
Sidebar.MenuIcon = MenuIcon
Sidebar.MenuLabel = MenuLabel

Sidebar.Heading = Heading
Sidebar.Spacer = Spacer