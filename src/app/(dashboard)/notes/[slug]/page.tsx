"use client"
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import MarkdownRender from "@/ui/MarkdownRender";

export default function Page() {
    const params = useParams()
    const slug = params.slug

    const [data, setData] = useState<{
        title: string
        slug: string
        category: string
        content: string
        updatedAt: string
    }>({
        title: "Lorem ipsum dolor sit amet consectetur.",
        slug: "lorem-ipsum-dolor-sit-amet-consectetur",
        category: "lorem",
        content: "lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        updatedAt: "2026-01-01T00:00:00.000Z"
    })

    return (
        <>
            <div className="w-full h-10 border-b flex items-center">
                <h1>{data.title}</h1>
            </div>
            <div className="w-full h-9 border-b flex justify-between items-center text-sm font-medium text-blue-500">
                <div className="flex items-center gap-1.5">
                    <span className="mr-2">Category :</span>
                    <Link href={`/notes/category/${data.category}`}>{data.category}</Link>
                </div>
                <div className="flex items-center gap-2.5">
                    <Link href={`/notes/${slug}`} className="underline underline-offset-4 text-black">Read</Link>
                    <Link href={`/notes/${slug}/edit`} className="hover:underline hover:underline-offset-4">Edit</Link>
                    <Link href={`/notes/${slug}/delete`} className="hover:underline hover:underline-offset-4">Delete</Link>
                </div>
            </div>
            <div className="w-full py-4">
                <MarkdownRender markdown={data.content}/>
            </div>
            <div className="w-full h-8 border-t flex items-center text-sm">
                This page was last edited on {data.updatedAt}
            </div>
        </>
    )
}