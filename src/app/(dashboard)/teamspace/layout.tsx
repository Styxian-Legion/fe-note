import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teamspace | All",
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    )
}