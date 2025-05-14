import React, { useRef, useState } from "react";

function UploadImageCardWithInput({ title, subTitle, img }) {

    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState("");

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
        }
    };

    return (
        <div>
            {/* Upload card */}
            <div
                onClick={handleUploadClick}
                className="w-full h-96 flex flex-col items-center justify-center bg-extraLightGray rounded-lg cursor-pointer"
            >
                <img src={img} alt="upload icon" className="w-12 h-12 " />
                <p className="text-white text-30 font-medium my-5">{title}</p>
                <p className="text-white opacity-70">
                    {subTitle}
                </p>
                {selectedFileName && (
                    <p className="mt-2 text-18 font-medium">
                        {selectedFileName}
                    </p>
                )}
                <input
                    type="file"
                    accept="image/*,video/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

        </div>
    );
}

export default UploadImageCardWithInput;
