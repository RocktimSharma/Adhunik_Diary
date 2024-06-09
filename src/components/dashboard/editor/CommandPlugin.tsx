import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { ReactRenderer } from '@tiptap/react';
import tippy, { Instance } from 'tippy.js';
import CommandsView from './CommandView';
import { LuHeading1,LuHeading2,LuHeading3 } from "react-icons/lu";
import { GrBlockQuote } from "react-icons/gr";
import { PiListBulletsBold } from "react-icons/pi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
export interface CommandProps {
  title: string;
  command: ({ editor, range, props }: { editor: Editor, range: any, props: any }) => void;
}

const CommandsPlugin = Extension.create({
  name: 'insertMenu',


  addProseMirrorPlugins() {
    return [
      Suggestion<CommandProps>({
        editor: this.editor,
        char: '/',
        command: ({ editor, range, props }) => {
          props.command({ editor, range, props });
        },
        items: ({ query }) => {
          return [
            {   

                icon:<LuHeading1 />,
                title: "Heading 1",
                attrs: {
                  "data-test-id": "insert-heading1",
                },
                description:"Big section heading",
                command: ({ editor }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setNode("heading", { level: 1 })
                    .run();
                },
              },
              {
                icon:<LuHeading2 />,
                title: "Heading 2",
                attrs: {
                  "data-test-id": "insert-heading2",
                },
                description:"Medium section heading",
                command: ({ editor }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setNode("heading", { level: 2 })
                    .run();
                },
              },
              {
                icon:<LuHeading3 />,
                title: "Heading 3",
                attrs: {
                  "data-test-id": "insert-heading3",
                },
                description:"Small section heading",
                command: ({ editor }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setNode("heading", { level: 3 })
                    .run();
                },
              },
              
              
              {
                icon:<GrBlockQuote />,
                title: "Quote",
                attrs: {
                  "data-test-id": "insert-quote",
                },
                description:"Capture a quote",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setBlockquote()
                    .run();
                },
              },
              {
                icon:<PiListBulletsBold/>,
                title: "Bullet List",
                attrs: {
                  "data-test-id": "insert-bullet-list",
                  
                },
                description:"Create a simple bullet list",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .toggleBulletList()
                    .run();
                },
              },
              {
                icon:<MdOutlineFormatListNumbered/>,
                title: "Numbered List",
                attrs: {
                  "data-test-id": "insert-ordered-list",
                },
                description:"Create a list with numbering",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .toggleOrderedList()
                    .run();
                },
              },
              {
                icon:<FaCode/>,
                title: "Code Block",
                attrs: {
                  "data-test-id": "insert-code",
              
                },
                description:"Capture a code snippet",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setCodeBlock()
                    .run();
                },
              },
              {
                icon:<MdLabelImportantOutline/>,
                title: "Callout",
                attrs: {
                  "data-test-id": "insert-callout",
                },
                description:"Make writting stand out",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .setCallout()
                    .run();
                },
              },
              {
                icon: <FaImage />,
                title: "Image",
                attrs: {
                  "data-test-id": "insert-image",
                },
                description: "Embed an image link",
                command: ({ editor, range }) => {
                  editor.commands.setImage().then(() => {
                    // Close the suggestion menu
                    editor.view.dispatch(
                      editor.view.state.tr.insertText('')
                    );
                  });
                },
              },
              {
                icon:<FaVideo/>,
                title: "Video",
                attrs: {
                  "data-test-id": "insert-video",
                },
                description:"Upload an video",
                command: ({ editor, range }) => {
                  const selection = editor.view.state.selection;
                  const from = selection.$from.posAtIndex(0);
                  const to = selection.$from.posAtIndex(1);
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .insertContentAt(from, { type: "videoPlaceholder" })
                    .run();
                },
              },
            // Add more commands as needed
          ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        },
        render: () => {
          let component: ReactRenderer<any, any>, popup: Instance<any>;
          return {
            onStart: (props) => {
              component = new ReactRenderer(CommandsView, {
                props,
                editor: props.editor,
              });
              popup = tippy('body', {
                getReferenceClientRect: props.clientRect,
                appendTo: document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
              });
            },
            onUpdate: (props) => {
              component.updateProps(props);
              popup.setProps({
                getReferenceClientRect: props.clientRect,
              });
            },
            onKeyDown: ({ event }) => {
              if (event.key === 'Escape') {
                popup.hide();
                return true;
              }
              if (component.ref) {
                return component.ref.onKeyDown(event);
              }
              return false;
            },
            onExit: () => {
              component.destroy();
              popup.destroy();
            },
          };
        },
      }),
    ];
  },
});

export default CommandsPlugin;
