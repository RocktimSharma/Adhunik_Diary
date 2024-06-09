import React, { useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import Image from '@tiptap/extension-image'
import OrderedList from '@tiptap/extension-ordered-list'
import Link from "@tiptap/extension-link";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from 'lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import CommandsPlugin from "./editor/CommandPlugin"; // Adjust the path as needed
import DashboardNavbar from "./DashboardNavbar";
import { CustomBubbleMenu } from "./editor/CustomBubbleMenu";
import 'highlight.js/styles/github.css'; // Import the CSS for syntax highlighting
import CustomCodeBlock from "./editor/CustomCodeBlock";
import CustomImage from "./editor/CustomImage";
import Placeholder from '@tiptap/extension-placeholder'
import BulletList from '@tiptap/extension-bullet-list'
// Create lowlight instance and register languages
const lowlight = createLowlight(common);


const extensions = [
  StarterKit.configure({
    codeBlock: false,
    bulletList:false,
  }),
  Placeholder.configure({
    // Use a placeholder:
    placeholder: "Write something, or press '/' for commands...",}),
  Underline,
  Link,
  CustomImage,
  Blockquote.configure({
    HTMLAttributes: {
      class: 'block-quote',
    },
  }),
  BulletList.configure({
    HTMLAttributes: {
      class: 'list-disc ml-4',
    },
    itemTypeName: 'listItem',
  }),
  OrderedList.configure({
    HTMLAttributes: {
      class: 'list-decimal ml-4',
    },
  }),
  CustomCodeBlock.configure({
    lowlight,
    defaultLanguage: null,
   
  }),
  CommandsPlugin,
];
const content = "<p>Hello World!</p>";

const CreateBlog = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  const containerRef = useRef(null); // Reference for the container

  return (
    <div className="dark:bg-dark-10 fill dark:text-white">
      {editor && (
        <CustomBubbleMenu editor={editor} containerRef={containerRef} />
      )}

      <DashboardNavbar />
      <div ref={containerRef} className="m-4 py-2 sm:m-6 md:m-12 lg:m-16">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default CreateBlog;
