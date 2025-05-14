import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";

export default function Editor({ onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: "<p>Hello World! 🌍</p>",
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onChange && onChange(json);
    },
  });
  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose p-4 border rounded min-h-[200px] bg-surface-light text-black border-border-light
                   dark:bg-surface-dark dark:text-white dark:border-border-dark"
      />
    </div>
  );
}
