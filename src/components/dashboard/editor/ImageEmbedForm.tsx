// components/ImageEmbedForm.jsx
import React, { useState } from 'react';

const ImageEmbedForm = ({ onClose, onImageEmbed }) => {
  const [src, setSrc] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleEmbedLink = () => {
    if (src) {
      onImageEmbed({ src });
      onClose();
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageEmbed({ src: e.target.result });
        onClose();
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="">
      <div className="">
        <h2>Embed Image</h2>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
              className='form-input px-2 py-1'
            />
            <button onClick={handleEmbedLink}>Embed Link</button>
          </label>
        </div>
        <div>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
          </label>
        </div>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ImageEmbedForm;
