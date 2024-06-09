import { Node } from '@tiptap/core';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // You can choose another theme

export const CodeBlockWithHighlight = Node.create({
  name: 'codeBlockWithHighlight',

  group: 'block',

  content: 'text*',

  marks: '',

  defining: true,

  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'pre',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['pre', HTMLAttributes, ['code', 0]];
  },

  addNodeView() {
    return ({ node, getPos, editor }) => {
      const codeElement = document.createElement('code');
      codeElement.innerHTML = hljs.highlightAuto(node.textContent).value;
      const dom = document.createElement('pre');
      dom.appendChild(codeElement);

      return {
        dom,
        update: (updatedNode) => {
          if (updatedNode.type !== node.type) return false;
          codeElement.innerHTML = hljs.highlightAuto(updatedNode.textContent).value;
          return true;
        },
      };
    };
  },
});
