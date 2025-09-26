import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Private | Create",
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    )
}