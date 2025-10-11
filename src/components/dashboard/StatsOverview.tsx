import Link from "next/link";

export default function StatsOverview({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {children}
        </div>
    )
}

const Item = ({ icon, name, value, href }: Readonly<{ icon: React.ReactNode, name: string, value: string, href: string }>) => {
    const formattedValue =
        typeof value === "number"
            ? new Intl.NumberFormat("id-ID").format(value)
            : new Intl.NumberFormat("id-ID").format(Number(value));

    return (
        <div className="w-full h-28 p-4 flex flex-col justify-center gap-1 border rounded-md border-slate-200">
            <div className="w-full flex items-center gap-2.5 text-slate-500">
                {icon}
                <h2 className="text-sm font-medium">{name}</h2>
            </div>
            <h1 className="text-lg font-semibold">{formattedValue}</h1>
            <Link href={href} className="w-full text-sm flex justify-between items-center border-t border-slate-200 py-2">
                <span>View all</span>
                <span>{">"}</span>
            </Link>
        </div>
    )
}

StatsOverview.Item = Item