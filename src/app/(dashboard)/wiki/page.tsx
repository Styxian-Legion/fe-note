import Link from "next/link"
import { FaStickyNote } from "react-icons/fa";

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-4">
            <Item
                id="1"
                title="Lorem ipsum dolor sit amet consectetur."
                updatedAt="2026-01-01T00:00:00.000Z"
                content="lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
            />
            <Item
                id="1"
                title="Lorem ipsum dolor sit amet consectetur."
                updatedAt="2026-01-01T00:00:00.000Z"
                content="lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
            />
            <Item
                id="1"
                title="Lorem ipsum dolor sit amet consectetur."
                updatedAt="2026-01-01T00:00:00.000Z"
                content="lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
            />
        </div>
    )
}

const Item = ({ id, title, updatedAt, content }: Readonly<{ id: string, title: string, updatedAt: string, content: string }>) => {
    return (
        <div className="w-full py-2 border-b border-slate-200 flex flex-col gap-2">
            <Link href={`/wiki/${id}`} className="flex items-center gap-2">
                <FaStickyNote className="w-6 h-6 text-slate-500" />
                <div>
                    <h1 className="text-md font-medium text-blue-500 hover:underline hover:underline-offset-4">{title}</h1>
                    <h2 className="text-sm text-slate-800">
                        https://www.loremipsum.com/${id}
                    </h2>
                </div>
            </Link>
            <p className="text-sm text-slate-400">
                <span className="font-semibold text-slate-800">{updatedAt}</span> -
                {content}
            </p>
        </div>
    )
}