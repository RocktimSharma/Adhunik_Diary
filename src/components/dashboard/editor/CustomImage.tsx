import { Node, mergeAttributes } from '@tiptap/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ImageInput from './ImageInput'; // Adjust the path as needed

const CustomImage = Node.create({
  name: 'image',

  group: 'block',

  selectable: true,

  draggable: true,

  addOptions() {
    return {
      inline: false,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },

  addNodeView() {
    return ({ node, editor }) => {
      const dom = document.createElement('div');
      dom.className = 'image-node';

      const img = document.createElement('img');
      img.src = node.attrs.src;
      img.alt = node.attrs.alt;
      img.title = node.attrs.title;

      dom.append(img);

      const inputContainer = document.createElement('div');
      inputContainer.classList.add('image-container');
      dom.append(inputContainer);

      const handleImageChange = (src) => {
        editor.commands.updateAttributes('image', { src });
        handleHideInput(); // Hide the input after changing the image
      };

      const handleHideInput = () => {
        console.log(inputContainer)
        inputContainer.classList.add('hidden'); // Add the hidden class to hide the input
        inputContainer.remove(); 
      };

      const root = createRoot(inputContainer); // Create a root
      root.render(<ImageInput onChange={handleImageChange} />);

      return {
        dom,
      };
    };
  },

  addCommands() {
    return {
      setImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },
});

export default CustomImage;
