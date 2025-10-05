"use client"
import dynamic from 'next/dynamic'

const MDXEditor = dynamic(
    () => import('@mdxeditor/editor').then(mod => mod.MDXEditor),
    { ssr: false }
)

interface MarkdownRender extends React.ComponentProps<typeof MDXEditor> { 
}

export default function MarkdownRender({readOnly, ...props}: MarkdownRender) {
    return (
        <div className="mdx-editor-wrapper">
            <MDXEditor
                {...props}
                readOnly={true}
            />
        </div>
    )
}