"use client";
import { useState } from "react";

import Form from "@/ui/Form";
import Label from "@/ui/Label";
import TextField from "@/ui/TextField";
import Select from "@/ui/Select";
import Button from "@/ui/Button";

export default function Page() {
    const [formData, setFormData] = useState<{
        type: string;
        name: string;
    }>({
        type: "",
        name: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Form>
                <Form.Message isError={false}>
                    <p>Success</p>
                </Form.Message>
                <Form.Item direction="column">
                    <Label htmlFor="type">Type</Label>
                    <Select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                        }
                    >
                        <Select.Option value="">-- Select --</Select.Option>
                        <Select.Option value="api-docs">API Documentation</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item direction="column">
                    <Label htmlFor="name">Name</Label>
                    <TextField
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                </Form.Item>

                <Form.Item direction="column">
                    <Button
                        type="submit"
                        className="bg-black text-white hover:bg-slate-800"
                    >
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </form>
    );
}
