import React, { useRef } from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import { FiUploadCloud } from "react-icons/fi";

const Step4 = ({ onNext }) => {
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
    <div className="flex flex-col justify-between text-white">
      <div>
        <StepsHeader
          image="../assets/stepperi1.svg"
          title="Upload Ad Creatives"
          subtitle="Upload your ad image or video to continue evaluation"
        />

        <div className="flex flex-wrap gap-6 mt-8 mb-10">
          {/* Upload Card */}
          <div
            onClick={handleCardClick}
            className="cursor-pointer w-full h-96 p-20 bg-extraLightGray rounded-lg flex flex-col items-center justify-around text-center"
          >
            <img src="/assets/imageIcon.svg" alt="" />
            <h3 className="text-24 font-mediun">Upload your images</h3>
            <p className="text-14 font-medium">
              Add Example Creatives
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
      <div className="mt-20 flex justify-end "> {/* Push the button to the bottom */}
        <button
          onClick={onNext}
          className="bg-redColor w-32 h-12 rounded-md font-bold text-20 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
