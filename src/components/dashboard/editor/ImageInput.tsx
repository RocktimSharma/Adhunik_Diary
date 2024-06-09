import React, { useRef,useState } from 'react';
import { FaImage } from 'react-icons/fa';

const ImageInput = ({ onChange }) => {
  const inputRef = useRef(null);
  const [isUploaded,setIsUploaded]=useState(false)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target.result);
      };
      reader.readAsDataURL(file);
      setIsUploaded(true)
    }
  };

  return (
    <div onClick={handleClick} className={`dark:bg-dark-30 p-4 rounded bg-dark-90 ${isUploaded ? 'hidden' :""}`}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <p className='text-dark-50 flex gap-2 items-center text-2xl'><FaImage /> <span className='text-base'>Add an Image</span></p>
    </div>
  );
};

export default ImageInput;
