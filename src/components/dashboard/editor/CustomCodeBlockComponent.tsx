import React, { useRef, useEffect } from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';

const CustomCodeBlockComponent = ({ node }) => {
  const buttonRef = useRef(null);

  const handleCopy = () => {
    const button = buttonRef.current;
    navigator.clipboard.writeText(node.textContent).then(() => {
      console.log("Copied");
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <NodeViewWrapper className="relative bg-gray-200 dark:bg-dark-30 rounded-md p-3 overflow-x-auto">
      <pre>
        <NodeViewContent as="code" />
      </pre>
      <button ref={buttonRef} onClick={handleCopy} className="absolute m-2 top-0 right-0 bg-gray-200 dark:bg-dark-30 border border-dark-50 text-sm py-1 px-1.5 rounded">Copy</button>
    </NodeViewWrapper>
  );
};

export default CustomCodeBlockComponent;




//   useEffect(() => {
//     const button = buttonRef.current;

//     const handleCopy = () => {
//       navigator.clipboard.writeText(node.textContent).then(() => {
//         console.log("Copied");
//         button.textContent = 'Copied!';
//         setTimeout(() => {
//           button.textContent = 'Copy';
//         }, 2000);
//       }).catch(err => {
//         console.error("Failed to copy text: ", err);
//       });
//     };

//     button.addEventListener('click', handleCopy);

//     return () => {
//       button.removeEventListener('click', handleCopy);
//     };
//   }, [node.textContent]);