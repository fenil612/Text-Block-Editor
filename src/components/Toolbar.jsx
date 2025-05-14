import React from "react";

export default function Toolbar({ editor }) {
  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter a URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const buttons = [
    {
      label: "Bold",
      command: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      activeClass: "font-bold text-blue-600",
    },
    {
      label: "Italic",
      command: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      activeClass: "italic text-blue-600",
    },
    {
      label: "Underline",
      command: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
      activeClass: "underline text-blue-600",
    },
    {
      label: "H1",
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "H2",
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "H3",
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      label: "ul",
      command: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "ol",
      command: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Blockquote",
      command: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      label: "Code",
      command: () => editor.chain().focus().toggleCodeBlock().run(),
    },
    {
      label: "HR",
      command: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      label: "Undo",
      command: () => editor.chain().focus().undo().run(),
    },
    {
      label: "Redo",
      command: () => editor.chain().focus().redo().run(),
    },
    {
      label: "Link",
      command: addLink,
    },
  ];

  return (
    <div
      className="flex flex-wrap gap-2 mb-4 p-2 border rounded bg-surface-light text-black border-border-light
      dark:bg-surface-dark dark:text-white dark:border-border-dark"
    >
      {buttons.map(({ label, command, isActive, activeClass }) => (
        <button
          key={label}
          onClick={command}
          className={isActive ? activeClass : ""}
        >
          {label}
        </button>
      ))}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}
