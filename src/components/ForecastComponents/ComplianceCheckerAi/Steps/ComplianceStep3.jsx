import React from "react";
import StepsHeader from "../../Stepper/Steps/StepsHeader";
import StepsCard from "../../Stepper/Steps/StepsCard";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

const Step3 = ({ onNext }) => {
  const fileInputRef = useRef(null);

  const handleCardClick = () => {
    fileInputRef.current.click(); // Trigger hidden file input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // You can store or preview it
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen text-white px-6 py-8">
      <div>
        <StepsHeader
          image="../assets/stepperi1.svg"
          title="Upload Ad Creatives"
          subtitle="Upload your ad image or video to continue evaluation"
        />

        <div className="flex flex-wrap gap-6 mt-8">
          {/* Upload Card */}
          <div
            onClick={handleCardClick}
            className="cursor-pointer w-full h-80 bg-extraLightGray rounded-lg flex flex-col items-center justify-center text-center"
          >
            <FiUploadCloud className="text-4xl mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold mb-2">Upload File</h3>
            <p className="text-sm text-gray-400">
              Tap to open gallery and choose your ad creative
            </p>
            <input
              type="file"
              accept="image/*,video/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

          {/* Button positioned at the bottom-right */}
      <div className="flex justify-end"> {/* Flex container to align the button */}
        <button
          onClick={onNext}
          className="bg-redColor px-4 py-2 mt-2 rounded text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
