"use client"
import { useState } from "react"

import { FaCheck, FaTrash, FaUserShield } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

import Select from "@/ui/Select"

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-2">
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
            <Item id="1" fullName="Lorem" role="administrator" />
        </div>
    )
}

const Item = ({ id, fullName, role }: { id: string, fullName: string, role: string }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [formData, setFormData] = useState<{ id: string, role: string }>({ id: "", role: "" })
    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleUpdateRole = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {editMode == false && (
                <div className="w-full h-14 px-2 flex justify-between items-center border border-slate-200">
                    <div className="flex items-center gap-4">
                        <h1 className="font-semibold">{fullName}</h1>
                        <span>|</span>
                        <h2 className="text-md py-0.5 px-1 bg-black text-white rounded-sm">{role}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={handleEditMode} className="w-8 h-8 border border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FaUserShield className="w-5 h-5" />
                        </button>
                        <button onClick={handleDelete} className="w-8 h-8 border border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FaTrash className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            {editMode == true && (
                <form onSubmit={handleUpdateRole} className="w-full h-14 px-2 flex justify-between items-center gap-2 border border-slate-200">
                    <Select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} >
                        <Select.Option value="administrator">Administrator</Select.Option>
                        <Select.Option value="contributor">Contributor</Select.Option>
                        <Select.Option value="user">User</Select.Option>
                    </Select>
                    <div className="flex items-center gap-2">
                        <button onClick={handleEditMode} className="w-10 h-10 border border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <IoMdClose className="w-5 h-5" />
                        </button>
                        <button onClick={handleDelete} className="w-10 h-10 border border-slate-400 flex items-center justify-center hover:cursor-pointer">
                            <FaCheck className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}