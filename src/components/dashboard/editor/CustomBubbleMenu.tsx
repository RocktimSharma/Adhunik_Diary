import { useEffect, useState, RefObject } from "react";
import { Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faLink, faStrikethrough, faUnderline } from "@fortawesome/free-solid-svg-icons";

export interface BubbleMenuProps {
  editor: Editor;
  containerRef: RefObject<HTMLDivElement>;
}

export type SelectionMenuType = "link" | null;

export const CustomBubbleMenu = ({ editor, containerRef }: BubbleMenuProps) => {
  const [selectionType, setSelectionType] = useState<SelectionMenuType>(null);

  useEffect(() => {
    if (selectionType !== "link") setSelectionType(null);

    // Reset selectionType on editor blur
    const handleBlur = () => {
      setSelectionType(null);
    };

    editor.on('blur', handleBlur);

    return () => {
      editor.off('blur', handleBlur);
    };
  }, [selectionType, editor]);

  if (!editor || !containerRef.current) return null;

  return (
    <BubbleMenu
      pluginKey="bubbleMenu"
      editor={editor}
      className="bubble-menu"
      tippyOptions={{
        appendTo: containerRef.current,
      }}
    >
      <SelectionMenu
        editor={editor}
        selectionType={selectionType}
        setSelectionType={setSelectionType}
      />
    </BubbleMenu>
  );
};

const SelectionMenu = ({
  editor,
  selectionType,
  setSelectionType,
}: {
  editor: Editor;
  selectionType: SelectionMenuType;
  setSelectionType: (type: SelectionMenuType) => void;
}) => {
  switch (selectionType) {
    case null:
      return (
        <div className="flex gap-4 px-3 py-1 rounded-md dark:bg-dark-30 bg-gray-100">
          <button
            type="button"
            data-test-id="mark-bold"
            className={clsx({
              active: editor.isActive("bold"),
            })}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button
            type="button"
            data-test-id="mark-italic"
            className={clsx({
              active: editor.isActive("italic"),
            })}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button
            type="button"
            data-test-id="mark-underline"
            className={clsx({
              active: editor.isActive("underline"),
            })}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button
            type="button"
            data-test-id="mark-strike"
            className={clsx({
              active: editor.isActive("strike"),
            })}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>
          <button
            type="button"
            data-test-id="mark-link"
            className={clsx({
              active: editor.isActive("link"),
            })}
            onClick={() => setSelectionType("link")}
          >
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>
      );
    case "link":
      return (
        <div className="insert-link-box">
          <input
            className="text-sm rounded-md p-1 dark:bg-dark-30 border border-dark-50 focus:outline-none dark:focus:border-dark-50 "
            data-test-id="insert-link-value"
            autoFocus
            type="text"
            placeholder="Insert link address"
            onBlur={() => setSelectionType(null)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                editor
                  .chain()
                  .focus()
                  .setLink({
                    href: (event.target as HTMLInputElement).value,
                    target: "_blank",
                  })
                  .run();
                setSelectionType(null);
              }
            }}
          />
        </div>
      );
  }
};
