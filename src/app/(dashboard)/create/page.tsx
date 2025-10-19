"use client"
import { useState } from "react";

import Form from "@/ui/Form";
import Label from "@/ui/Label";
import TextField from "@/ui/TextField";
import Select from "@/ui/Select";
import MardownEditor from "@/ui/MarkdownEditor";
import Button from "@/ui/Button";

export default function Page() {

    const [data, setData] = useState<{
        title: string
        slug: string
        label: string
        content: string
        updatedAt: string
    }>({
        title: "",
        slug: "",
        label: "",
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
            <form onSubmit={handleSubmit} className="w-full py-4">
                <Form>
                    <Form.Item direction="column">
                        <Label htmlFor="title">Title</Label>
                        <TextField id="title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </Form.Item>
                    <Form.Item direction="column">
                        <Label htmlFor="label">Label</Label>
                        <Select value={data.label} onChange={(e) => setData({ ...data, label: e.target.value })}>
                            <Select.Option value="1">Lorem</Select.Option>
                            <Select.Option value="2">Ipsum</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item direction="column">
                        <Label htmlFor="content">Content</Label>
                        <MardownEditor markdown={data.content} onChange={(e) => setData({ ...data, content: e })}  />
                    </Form.Item>
                    <Button type="submit" className="bg-black text-white">Save</Button>
                </Form>
            </form>
        </>
    )
}