"use client"
import dynamic from 'next/dynamic'
import {
    AdmonitionDirectiveDescriptor, BlockTypeSelect,
    BoldItalicUnderlineToggles, ChangeCodeMirrorLanguage, codeBlockPlugin, codeMirrorPlugin,
    CodeToggle, ConditionalContents, CreateLink, directivesPlugin, headingsPlugin, imagePlugin,
    InsertCodeBlock, InsertImage, InsertTable, linkPlugin, listsPlugin, ListsToggle,
    quotePlugin, sandpackPlugin, Separator, tablePlugin, toolbarPlugin, UndoRedo, HighlightToggle,
    StrikeThroughSupSubToggles,
    markdownShortcutPlugin,
    linkDialogPlugin,
} from '@mdxeditor/editor'

const MDXEditor = dynamic(
    () => import('@mdxeditor/editor').then(mod => mod.MDXEditor),
    { ssr: false }
)

interface MardownEditor extends React.ComponentProps<typeof MDXEditor> { 
}

export default function MardownEditor({readOnly, ...props}: MardownEditor) {
    return (
        <div className="mdx-editor-wrapper border border-slate-200">
            <MDXEditor
                plugins={[
                    markdownShortcutPlugin(),
                    directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
                    headingsPlugin(),
                    listsPlugin(),
                    quotePlugin(),
                    codeBlockPlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    tablePlugin(),
                    imagePlugin({
                        imageUploadHandler: async (file) => {
                            const url = URL.createObjectURL(file)
                            return url
                        }
                    }),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                    sandpackPlugin(),
                    codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', html: 'HTML', ts: 'TypeScript', go: 'Go', java: 'Java', text: 'Text' } }),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <Separator />
                                <BlockTypeSelect />
                                <Separator />
                                <BoldItalicUnderlineToggles />
                                <CodeToggle />
                                <HighlightToggle />
                                <Separator />
                                <StrikeThroughSupSubToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <CreateLink />
                                <InsertImage />
                                <InsertTable />
                                <Separator />
                                <ConditionalContents
                                    options={[
                                        { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                                        {
                                            fallback: () => (
                                                <>
                                                    <InsertCodeBlock />
                                                </>
                                            )
                                        }
                                    ]}
                                />
                            </>
                        )
                    })
                ]}
                {...props}
            />
        </div>
    )
}