"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon,
  Strikethrough,
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo,
  Heading1,
  Heading2,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlignJustify,
  Code,
  Upload,
} from "lucide-react";
import { useRef } from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CharacterCount,
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
        class: "prose prose-invert prose-blue max-w-none min-h-[400px] focus:outline-none p-8",
      },
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        editor.chain().focus().setImage({ src: data.url }).run();
      }
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  if (!editor) return null;

  return (
    <div className="border border-border bg-muted/20">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-3 border-b border-border bg-muted/50 sticky top-0 z-10">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("bold") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("italic") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Italic size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("underline") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <UnderlineIcon size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("strike") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Strikethrough size={16} />
        </button>
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("heading", { level: 1 }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Heading1 size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("heading", { level: 2 }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Heading2 size={16} />
        </button>
        
        <div className="w-px h-6 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive({ textAlign: "left" }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <AlignLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive({ textAlign: "center" }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <AlignCenter size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive({ textAlign: "right" }) ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <AlignRight size={16} />
        </button>

        <div className="w-px h-6 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("bulletList") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <List size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("orderedList") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <ListOrdered size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("blockquote") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Quote size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 hover:bg-muted transition-colors ${editor.isActive("codeBlock") ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground"}`}
        >
          <Code size={16} />
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
          <LinkIcon size={16} />
        </button>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
        <button
          type="button"
          onClick={() => {
            if (confirm("Upload image from system? Click Cancel to enter URL instead.")) {
              fileInputRef.current?.click();
            } else {
              const url = window.prompt("Enter Image URL");
              if (url) editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <ImageIcon size={16} />
        </button>
        
        <div className="flex-1" />
        
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <Undo size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 hover:bg-muted text-muted-foreground transition-colors"
        >
          <Redo size={16} />
        </button>
      </div>

      {/* Editor Surface */}
      <EditorContent editor={editor} />
      
      {/* Footer Info */}
      <div className="p-3 border-t border-border bg-muted/30 flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        <div className="flex gap-4">
          <span>Words: {editor.storage.characterCount?.words?.() || 0}</span>
          <span>Chars: {editor.storage.characterCount?.characters?.() || 0}</span>
        </div>
        <span>Enterprise Intelligence Engine v2.0</span>
      </div>
    </div>
  );
}

