import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input, Textarea } from "@material-tailwind/react";
import StepsHeader from "../../CommonComponents/StepsHeader";
import UploadImageCardWithInput from "../UploadImageCard";
import SingleInputField from "../SingleInputField";

const Step3 = ({ onNext }) => {
    return (
        <div className=" bg-lightGray text-white space-y-6 ">
            <StepsHeader
                image="../assets/stepperi1.svg"
                title="Select Ad Type to Score"
                subtitle="Select an Ad Creative to Evaluate and Score"
            />

            <UploadImageCardWithInput title="Upload a background image" subTitle="or drag & drop a background image here." img="/assets/imageIcon.svg" />
            <SingleInputField />
            <div className="flex justify-end "> {/* Push the button to the bottom */}
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

export default Step3;







