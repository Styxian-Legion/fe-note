"use client"
import { useState } from "react";
import Link from "next/link";

import Form from "@/ui/Form";
import Label from "@/ui/Label";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { FiEdit } from "react-icons/fi";
import { FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

export default function Page() {

    const [label, setLabel] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log(label)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full py-4">
                <Form>
                    <Form.Item direction="column">
                        <Label htmlFor="label">Label</Label>
                        <TextField id="label" value={label} onChange={(e) => setLabel(e.target.value)} />
                    </Form.Item>
                    <Button fullWidth className="bg-black text-white">Add</Button>
                </Form>
            </form>
            <div className="w-full py-4 flex flex-col gap-4">
                <LabelItem id="1" label="Lorem" />
            </div>
        </>
    )
}

const LabelItem = ({ id, label }: { id: string, label: string }) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [data, setData] = useState<{
        id: string
        label: string
    }>({
        id: id,
        label: label
    })

    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const onUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.error(error)
        }
    }

    const onDelete = (e: React.MouseEvent) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {editMode == true && (
                <form onSubmit={onUpdate} className="w-full h-12 px-2 flex justify-between gap-2 items-center border rounded-md border-slate-200">
                    <div className="w-full flex items-center gap-2">
                        <div className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center">
                            1
                        </div>
                        <input type="text" className="w-full h-8 px-2 outline-none border rounded-md border-slate-400" />
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="submit" className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <IoCheckmark className="w-5 h-5" />
                        </button>
                        <button onClick={handleEditMode} className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <IoMdClose className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            )}

            {editMode == false && (
                <div className="w-full h-12 px-2 flex justify-between items-center border border-slate-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center">
                            1
                        </div>
                        <h1 className="font-medium">Lorem, ipsum dolor.</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/category/${data.id}`} className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FaExternalLinkAlt className="w-5 h-5" />
                        </Link>
                        <button onClick={handleEditMode} className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FiEdit className="w-5 h-5" />
                        </button>
                        <button onClick={onDelete} className="w-8 h-8 border rounded-md border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FaTrash className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}