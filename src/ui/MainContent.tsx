export default function MainContent({children}: Readonly<{children?: React.ReactNode}>) {
    return (
        <div className="mx-auto w-full max-w-screen-lg md:px-4">
            {children}
        </div>
    )
}