"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo,
  Heading1,
  Heading2,
  Link as LinkIcon,
  Image as ImageIcon
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Placeholder.configure({
        placeholder: "Write your masterpiece here...",
      }),
    ],
    immediatelyRender: false,
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert prose-blue max-w-none min-h-[400px] focus:outline-none p-4",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-border bg-muted/20">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-muted/50 sticky top-0 z-10">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("bold") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("italic") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Italic size={18} />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("heading", { level: 1 }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("heading", { level: 2 }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Heading2 size={18} />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("bulletList") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("orderedList") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <ListOrdered size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("blockquote") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Quote size={18} />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("Enter URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("link") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <LinkIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("Enter Image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <ImageIcon size={18} />
        </button>
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <Undo size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <Redo size={18} />
        </button>
      </div>

      {/* Editor Surface */}
      <EditorContent editor={editor} />
      
      {/* Footer Info */}
      <div className="p-2 border-t border-border bg-muted/30 flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        <span>Rich Text Engine Enabled</span>
        <span>HTML Mode: OFF</span>
      </div>
    </div>
  );
}
