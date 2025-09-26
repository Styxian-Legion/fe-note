export default function Navbar({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <nav className="w-full fixed top-0 z-20 shadow-sm drop-shadow-sm bg-white">
            <div className="md:mx-auto w-full max-w-screen-lg h-14 px-4 md:px-3 flex items-center justify-between">
                {children}
            </div>
        </nav>
    )
}

const Group = ({ id, children }: { id: string, children: React.ReactNode }) => {
    return (
        <div id={id} className="flex items-center gap-2.5">
            {children}
        </div>
    )
}

Navbar.Group = Group