import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teamspace | Create",
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    )
}