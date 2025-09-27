"use client"
import { useParams } from "next/navigation"
import { useState } from "react";

import Workspace from "@/components/Workspace";
import IconButton from "@/ui/IconButton"
import Form from "@/ui/Form";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";

import { FaRegStar, FaStar, FaShare, FaLock, FaLockOpen, FaWpforms, FaList, FaTrash } from "react-icons/fa";
import { IoIosLink, IoMdClose, IoMdAdd } from "react-icons/io";
import { SiGoogledocs, SiPostman } from "react-icons/si";

export default function Page() {
    const params = useParams()
    const { id } = params

    const [shareModalActive, setShareModalActive] = useState<boolean>(false)
    const [addDataModalActive, setAddDataModalActive] = useState<boolean>(false)
    const [tabActive, setTabActive] = useState<"all" | "group">("all")

    const [formData, setFormData] = useState<{
        id: string
        type: "api-docs" | "form" | "list" | "docs"
        group: string
        name: string
        favorite: boolean
        private: boolean
    }>({
        id: "",
        type: "list",
        group: "",
        name: "",
        favorite: false,
        private: true
    })

    return (
        <Workspace>
            <Workspace.Message isError={false}>
                Create a new workspace
            </Workspace.Message>
            <Workspace.Header>
                <Workspace.Heading>Workspace</Workspace.Heading>
                <Workspace.ActionButton>
                    <IconButton>
                        {formData.favorite ? <FaStar className="w-4 h-4" /> : <FaRegStar className="w-4 h-4" />}
                    </IconButton>
                    <IconButton onClick={() => setShareModalActive(!shareModalActive)}>
                        <FaShare className="w-4 h-4" />
                    </IconButton>
                    <IconButton onClick={() => setAddDataModalActive(!addDataModalActive)}>
                        <IoMdAdd className="w-4 h-4" />
                    </IconButton>
                </Workspace.ActionButton>
            </Workspace.Header>

            {/* modal for share ink */}
            <div className={`fixed top-1/2 left-1/2 w-full max-w-md p-4 flex flex-col gap-4 border border-slate-200 rounded-sm bg-white transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${shareModalActive ? "opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"}`}>
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Share</h1>
                    <IconButton onClick={() => setShareModalActive(!shareModalActive)}>
                        <IoMdClose className="w-4 h-4" />
                    </IconButton>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-fit flex items-center gap-2">
                        <IoIosLink className="w-6 h-6" />
                        <span className="font-semibold capitalize">private link</span>
                    </div>
                    <button className="w-fit py-1.5 px-3 bg-black hover:bg-slate-800 text-white rounded-sm duration-200 hover:cursor-pointer">
                        <span className="text-sm font-medium capitalize">copy link</span>
                    </button>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-fit flex items-center gap-2">
                        <IoIosLink className="w-6 h-6" />
                        <span className="font-semibold capitalize">Persmission</span>
                    </div>
                    <select name="permission" id="permission" className="w-fit py-1.5 px-3 border border-slate-200 rounded-sm outline-none">
                        <option value="full-edit">Edit</option>
                        <option value="comment">Comment</option>
                        <option value="view-only">View Only</option>
                    </select>
                </div>
                <button className="w-full h-10  flex items-center justify-center gap-4 bg-black text-white rounded-sm duration-200 hover:cursor-pointer capitalize">
                    {formData.private ? <FaLockOpen className="w-4 h-4" /> : <FaLock className="w-4 h-4" />}
                    {formData.private ? "make public" : "make private"}
                </button>
            </div>

            {/* modal for add data */}
            <div className={`fixed top-1/2 left-1/2 w-full max-w-md p-4 flex flex-col gap-4 border border-slate-200 rounded-sm bg-white transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${addDataModalActive ? "opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"}`}>
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Select Category</h1>
                    <IconButton onClick={() => setAddDataModalActive(!addDataModalActive)}>
                        <IoMdClose className="w-4 h-4" />
                    </IconButton>
                </div>

                <div className="w-full grid grid-cols-4 gap-4">
                    <button className="w-full h-20 flex flex-col justify-center items-center gap-2 border rounded-sm border-slate-500 hover:bg-black hover:text-white hover:cursor-pointer duration-200">
                        <SiPostman className="w-8 h-8" />
                        <span className="text-sm font-semibold">API Docs</span>
                    </button>
                    <button className="w-full h-20 flex flex-col justify-center items-center gap-2 border rounded-sm border-slate-500 hover:bg-black hover:text-white hover:cursor-pointer duration-200">
                        <FaWpforms className="w-8 h-8" />
                        <span className="text-sm font-semibold">Form</span>
                    </button>
                    <button className="w-full h-20 flex flex-col justify-center items-center gap-2 border rounded-sm border-slate-500 hover:bg-black hover:text-white hover:cursor-pointer duration-200">
                        <FaList className="w-8 h-8" />
                        <span className="text-sm font-semibold">List</span>
                    </button>
                    <button className="w-full h-20 flex flex-col justify-center items-center gap-2 border rounded-sm border-slate-500 hover:bg-black hover:text-white hover:cursor-pointer duration-200">
                        <SiGoogledocs className="w-8 h-8" />
                        <span className="text-sm font-semibold">Docs</span>
                    </button>
                </div>
            </div>

            <Workspace.TabContainer>
                <Workspace.TabItem onClick={() => setTabActive("all")} name="all" active={tabActive} />
                <Workspace.TabItem onClick={() => setTabActive("group")} name="group" active={tabActive} />
            </Workspace.TabContainer>

            {tabActive === "all" && (
                <Workspace.List>
                    <Workspace.ListItem type="list" name="List 1" group="Group 1" lastUpdate="2 days ago" />
                    <Workspace.ListItem type="docs" name="API Docs E-Commerce" group="Group 1" lastUpdate="1 days ago" />
                </Workspace.List>
            )}

            {tabActive === "group" && (
                <>
                    <form>
                        <Form>
                            <Form.Item direction="row">
                                <TextField placeholder="Group name" />
                                <Button className="bg-black text-white">Add</Button>
                            </Form.Item>
                        </Form>
                    </form>
                    <Workspace.GroupItem name="Group 1">
                        <Workspace.List>
                            <Workspace.ListItem type="list" name="List 1" group="Group 1" lastUpdate="2 days ago" />
                            <Workspace.ListItem type="docs" name="API Docs E-Commerce" group="Group 1" lastUpdate="1 days ago" />
                        </Workspace.List>
                    </Workspace.GroupItem>
                    <Workspace.GroupItem name="Group 2">
                        <Workspace.List>
                            <Workspace.ListItem type="list" name="List 1" group="Group 1" lastUpdate="2 days ago" />
                            <Workspace.ListItem type="docs" name="API Docs E-Commerce" group="Group 1" lastUpdate="1 days ago" />
                        </Workspace.List>
                    </Workspace.GroupItem>
                </>
            )}

        </Workspace>
    )
}