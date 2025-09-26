export default function Main({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <main className={`w-full px-4 pt-24 ${className}`}>
            {children}
        </main>
    )
}