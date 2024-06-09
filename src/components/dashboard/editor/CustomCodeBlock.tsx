import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from 'lowlight';
import { ReactNodeViewRenderer } from '@tiptap/react';
import CustomCodeBlockComponent from './CustomCodeBlockComponent'; // Adjust the path as needed

const lowlight = createLowlight(common);

const CustomCodeBlock = CodeBlockLowlight.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomCodeBlockComponent);
  },
});

export default CustomCodeBlock;
