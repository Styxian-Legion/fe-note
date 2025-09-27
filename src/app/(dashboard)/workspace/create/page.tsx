"use client"
import { useState } from "react"
import Form from "@/ui/Form"
import Label from "@/ui/Label"
import TextField from "@/ui/TextField"
import TextArea from "@/ui/TextArea"
import Button from "@/ui/Button"

export default function Page() {
    const [formData, setFormData] = useState<{
        name: string,
        description?: string
    }>({
        name: "",
        description: ""
    })

    return (
        <form>
            <Form>
                <Form.Item direction="column">
                    <Label htmlFor="name">
                        name
                    </Label>
                    <TextField
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </Form.Item>
                <Form.Item direction="column">
                    <Label htmlFor="description">
                        description (optional)
                    </Label>
                    <TextArea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </Form.Item>
                <Button type="submit" className="bg-black text-white" fullWidth>
                    Submit
                </Button>
            </Form>
        </form>
    )
}