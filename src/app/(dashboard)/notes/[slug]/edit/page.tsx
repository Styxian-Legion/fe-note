"use client"

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import Form from "@/ui/Form";
import Label from "@/ui/Label";
import TextField from "@/ui/TextField";
import MardownEditor from "@/ui/MarkdownEditor";
import Button from "@/ui/Button";
import Select from "@/ui/Select";

export default function Page() {
    const params = useParams()
    const id = params.id

    const [data, setData] = useState<{
        title: string
        slug: string
        category: string
        content: string
        updatedAt: string
    }>({
        title: "",
        slug: "",
        category: "",
        content: "",
        updatedAt: ""
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
                    <span className="mr-2">Category :</span>
                    <Link href={`/wiki/category/${data.category}`}>{data.category}</Link>
                </div>
                <div className="flex items-center gap-2.5">
                    <Link href={`/wiki/${id}`} className="hover:underline hover:underline-offset-4">Read</Link>
                    <Link href={`/wiki/${id}/edit`} className="underline underline-offset-4 text-black">Edit</Link>
                    <Link href={`/wiki/${id}/delete`} className="hover:underline hover:underline-offset-4">Delete</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full py-4">
                <Form>
                    <Form.Item direction="column">
                        <Label htmlFor="title">Title</Label>
                        <TextField id="title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </Form.Item>
                    <Form.Item direction="column">
                        <Label htmlFor="category">Category</Label>
                        <Select value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })}>
                            <Select.Option value="1">Lorem</Select.Option>
                            <Select.Option value="2">Ipsum</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item direction="column">
                        <Label htmlFor="content">Content</Label>
                        <MardownEditor markdown={data.content} onChange={(e) => setData({ ...data, content: e })} />
                    </Form.Item>
                    <Button className="bg-black text-white">Save</Button>
                </Form>
            </form>
        </>
    )
}