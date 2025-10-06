"use client"
import { useState } from "react"

import Form from "@/ui/Form"
import Label from "@/ui/Label"
import EmailField from "@/ui/EmailField"
import PasswordFiled from "@/ui/PasswordFiled"
import Checkbox from "@/ui/Checkbox"
import Button from "@/ui/Button"

export default function Page() {
    const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in")
    const [formData, setFormData] = useState<{
        email: string,
        password: string,
        confirmPassword?: string,
        rememberMe?: boolean
    }>({
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false
    })

    const handleChangeTab = (tab: "sign-in" | "sign-up") => {
        setTab(tab)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log(formData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center gap-4 bg-slate-50">
                <div className="w-full max-w-md grid grid-cols-2 gap-2">
                    <button
                        onClick={() => handleChangeTab("sign-in")}
                        className={`
                        w-full h-10 px-3 rounded-md flex justify-center items-center hover:cursor-pointer 
                        ${tab === "sign-in"
                                ? " bg-black hover:bg-slate-800 text-white"
                                : "border border-slate-200"
                            } duration-200`
                        }>
                        Sign In
                    </button>
                    <button
                        onClick={() => handleChangeTab("sign-up")}
                        className={`
                        w-full h-10 px-3 rounded-md flex justify-center items-center hover:cursor-pointer 
                        ${tab === "sign-up"
                                ? " bg-black hover:bg-slate-800 text-white"
                                : "border border-slate-200"
                            } duration-200`
                        }>
                        Sign Up
                    </button>
                </div>
                <div className="w-full max-w-md p-4 rounded-md shadow-md drop-shadow-md bg-white ">
                    <form onSubmit={onSubmit}>
                        <Form>
                            <Form.Message isError>
                                <p>Success</p>
                            </Form.Message>
                            <Form.Item direction="column">
                                <Label htmlFor="email">
                                    e-mail
                                </Label>
                                <EmailField
                                    name="email"
                                    id="email"
                                    autoFocus
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </Form.Item>
                            <Form.Item direction="column">
                                <Label htmlFor="email">
                                    password
                                </Label>
                                <PasswordFiled
                                    name="password"
                                    id="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </Form.Item>
                            {tab === "sign-up" && (
                                <Form.Item direction="column">
                                    <Label htmlFor="email">
                                        confirm password
                                    </Label>
                                    <PasswordFiled
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    />
                                </Form.Item>
                            )}
                            {tab == "sign-in" && (
                                <Form.Item direction="row">
                                    <Checkbox
                                        name="remember-me"
                                        id="remember-me"
                                    />
                                    <Label htmlFor="remember-me">
                                        Remember me
                                    </Label>
                                </Form.Item>
                            )}
                            <Button type="submit" fullWidth className="bg-black hover:bg-slate-800 text-white duration-200">
                                {tab === "sign-in" ? "Sign In" : "Sign Up"}
                            </Button>
                        </Form>
                    </form>
                </div>
            </div>
        </>
    )
}