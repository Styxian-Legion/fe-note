"use client"
import { usePathname } from "next/navigation";
import SearchField from "@/ui/SearchField";

export default function SearchBar() {
    const pathname = usePathname()
    
    return (
        <div className="w-full px-2">
            {pathname.startsWith("/notes") && (
                <form action="">
                    <SearchField placeholder="Search note" />
                </form>
            )}
            {pathname.startsWith("/users") && (
                <form action="">
                    <SearchField placeholder="Search user" />
                </form>
            )}
        </div>
    )
}