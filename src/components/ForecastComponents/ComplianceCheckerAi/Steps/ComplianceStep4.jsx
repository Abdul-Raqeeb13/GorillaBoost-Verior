import React, { useState } from "react";
import { Switch } from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";
import StepsHeader from "../../Stepper/Steps/StepsHeader";

const Step4 = () => {
    const [showHeatmap, setShowHeatmap] = useState(true);
    const [analyze, setAnalyze] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const nav = useNavigate();

const cardData = [
  {
    icon: "/assets/images/PlatformCompliance.svg",
    title: "Platform Compliance",
    status: "Passed",
    statusColor: "text-lightGreen bg-darkGreen",
    details: [
      {
        platformIcon: "/assets/linkedin.svg",
        platformName: "LinkedIn",
        tick: "/assets/images/Tick.svg",
        description:
          "The ad creative is compliant with LinkedIn's policies for professional and non-offensive content.",
      },
      {
        platformIcon: "/assets/googleAds.svg",
        platformName: "Facebook",
        tick: "/assets/images/Tick.svg",
        description:
          "Content complies with Facebook ad policies for appropriate language and visuals.",
      },
    ],
  },
  {
    icon: "/assets/images/PlatformCompliance.svg",
    title: "Platform Compliance",
    status: "Passed",
    statusColor: "text-lightGreen bg-darkGreen",
    details: [
      {
        platformIcon: "/assets/linkedin.svg",
        platformName: "Twitter",
        tick: "/assets/images/Tick.svg",
        description:
          "Headline lacks clarity. Consider using more action-oriented copy.",
      },
      {
        platformIcon: "/assets/googleAds.svg",
        platformName: "Twitter",
        tick: "/assets/images/Tick.svg",
        description:
          "Headline lacks clarity. Consider using more action-oriented copy.",
      },
    ],
  },
];




    return (
        <div className="min-h-screen bg-lightGray text-white">
            {/* Header */}
            <StepsHeader
                image="../assets/stepperi1.svg"
                title="Select Ad Type to Score"
                subtitle="Select an Ad Creative to Evaluate and Score"
            />

            <div className="flex flex-col md:flex-row gap-3">
                {/* Heatmap Section */}
                <div className="md:w-88 ">
                    <img
                        src="/assets/images/formCover.jpeg"
                        alt="Heatmap"
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Score and Suggestions */}
                <div className="md:w-1/2 w-full">


 {cardData.map((card, index) => (
        <DetailCard key={index} {...card} />
      ))}

                </div>

            </div>
            <div className="flex justify-end"> {/* Flex container to align the button */}
                <button
                    onClick={() => { nav('/forecast/create') }}
                    className="bg-redColor px-4 py-2 rounded-md text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};




const DetailCard = ({ icon, title, status, statusColor, details ,tick }) => {
  return (
    <div className="bg-extraLightGray rounded-lg p-4 space-y-6 mb-6 text-white">
      {/* Shared Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={icon} alt="icon" className="w-5 h-5" />
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <p className={`px-3 py-1 rounded text-sm font-medium ${statusColor}`}>
          {status}
        </p>
      </div>

      {/* Repeated Detail Sections */}
      {details.map((item, index) => (
  <div key={index}>
    <div className="flex items-center space-x-2 mb-2 text-white">
      <img src={item.platformIcon} alt="platform" className="w-5 h-5" />
      <p className="text-sm font-semibold">{item.platformName}</p>
      {item.tick && <img src={item.tick} alt="tick" className="w-5 h-5" />}
    </div>
    <p className="text-sm">{item.description}</p>
  </div>
))}

    </div>
  );
};



export default Step4;
