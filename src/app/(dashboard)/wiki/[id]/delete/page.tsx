"use client"

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import Form from "@/ui/Form";
import Label from "@/ui/Label";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";

export default function Page() {
    const params = useParams()
    const id = params.id

    const [data, setData] = useState<{
        title: string
        slug: string
        label: string
        content: string
        updatedAt: string
        confirmDelete: string
    }>({
        title: "",
        slug: "",
        label: "",
        content: "",
        updatedAt: "",
        confirmDelete: ""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="w-full h-10 border-b flex items-center">
                <h1>{data.title}</h1>
            </div>
            <div className="w-full h-9 border-b flex justify-between items-center text-sm font-medium text-blue-500">
                <div className="flex items-center gap-1.5">
                    <span className="mr-2">Label :</span>
                    <Link href={`/wiki/labely/${data.label}`}>{data.label}</Link>
                </div>
                <div className="flex items-center gap-2.5">
                    <Link href={`/wiki/${id}`} className="hover:underline hover:underline-offset-4">Read</Link>
                    <Link href={`/wiki/${id}/edit`} className="hover:underline hover:underline-offset-4">Edit</Link>
                    <Link href={`/wiki/${id}/delete`} className="underline underline-offset-4 text-black">Delete</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full py-4">
                <Form>
                    <Form.Item direction="column">
                        <Label htmlFor="title">Confirm Delete</Label>
                        <TextField id="title" placeholder="Please type &quot;DELETE&quot;" value={data.confirmDelete} onChange={(e) => setData({ ...data, confirmDelete: e.target.value })} />
                    </Form.Item>
                    <Button className="bg-black text-white">Delete</Button>
                </Form>
            </form>
        </>
    )
}