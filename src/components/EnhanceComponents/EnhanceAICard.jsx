import React, { useState, useRef } from "react";

const EnhanceAICard = ({ image, title, subtitle, allowUpload }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const handleCardClick = () => {
    if (allowUpload && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`bg-extraLightGray rounded-lg w-full h-[400px] relative overflow-hidden ${
        allowUpload ? 'cursor-pointer hover:opacity-90' : ''
      }`}
    >
      {uploadedImage ? (
        <img
          src={uploadedImage}
          alt="Uploaded"
          className="w-full h-full object-contain p-4"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-white px-24 py-8 h-full">
          <img src={image} alt="Card" className="my-4 max-w-[120px]" />
          <h2 className="text-lg font-semibold my-3">{title}</h2>
          <p className="text-white font-ibm font-medium text-18 text-sm my-2">
            {subtitle}
          </p>
        </div>
      )}

      {allowUpload && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="hidden"
        />
      )}
    </div>
  );
};

export default EnhanceAICard;
