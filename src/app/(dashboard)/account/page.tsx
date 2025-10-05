"use client"
import { useState } from "react"
import Form from "@/ui/Form"
import Label from "@/ui/Label"
import EmailField from "@/ui/EmailField"
import PasswordFiled from "@/ui/PasswordFiled"
import Button from "@/ui/Button"

export default function Page(){
    const [formData, setFormData] = useState<{
        email: string,
        oldPassword: string,
        newPassword: string,
        confirmPassword?: string,
    }>({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log(formData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Form>
                <Form.Item direction="column">
                    <Label htmlFor="email">Email</Label>
                    <EmailField id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} disabled />
                </Form.Item>
                <Form.Item direction="column">
                    <Label htmlFor="old-password">Old Password</Label>
                    <PasswordFiled id="old-password" value={formData.oldPassword} onChange={(e) => setFormData({...formData, oldPassword: e.target.value})} />
                </Form.Item>
                <Form.Item direction="column">
                    <Label htmlFor="new-password">New Password</Label>
                    <PasswordFiled id="new-password" value={formData.newPassword} onChange={(e) => setFormData({...formData, newPassword: e.target.value})} />
                </Form.Item>
                <Form.Item direction="column">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <PasswordFiled id="confirm-password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                </Form.Item>
                <Button fullWidth className="bg-black text-white">Change Password</Button>
            </Form>
        </form>
    )
}