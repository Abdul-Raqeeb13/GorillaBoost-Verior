import React, { useState } from "react";
import StepsHeader from "./StepsHeader";
import { Switch } from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";

const Step5 = () => {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [analyze, setAnalyze] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const nav = useNavigate();
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
        <div className="md:w-1/2 w-full rounded-2xl shadow-lg flex flex-col justify-between">
          <img
            src="/assets/images/formCover.jpeg"
            alt="Heatmap"
            className="rounded-lg w-full h-96 object-cover"
          />

          <div className="mt-4 flex items-center justify-between p-4 bg-extraLightGray rounded-lg">
            <div className="flex gap-6 items-center ">
              <div className="flex items-center gap-2 ">
                <span className="text-sm">Heatmap</span>

                <Switch
                  color="red"
                  checked={showHeatmap}
                  onChange={() => setShowHeatmap(!showHeatmap)}
                  crossOrigin={undefined}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Analyze</span>

                <Switch
                  color="yellow"
                  checked={analyze}
                  onChange={() => setAnalyze(!analyze)}
                  crossOrigin={undefined}
                />
              </div>
            </div>

            <button 
               onClick={() => setEditMode(!editMode)}

            >
              {editMode ? (
                "Editing..."
              ) : (
                <span className="flex items-center gap-2">
                  Edit <img src="/assets/editicon.svg" alt="edit" className="w-4 h-4" />
                </span>
              )}

            </button>
          </div>
        </div>

        {/* Score and Suggestions */}
        <div className="md:w-1/2 w-full">
          <div className="bg-extraLightGray rounded-lg p-3">
            <div className="text-xl font-semibold ">Performance Score</div>
            <div className="text-sm font-semibold my-2">Score Point</div>
            <div className="text-5xl font-bold  ">44%</div>
          </div>

          <p className="text-sm font-semibold my-4">
            Performance-Focused AI Recommendations
          </p>
          <ul className="space-y-3">
            {[
              { text: "Add a Call-to-Action Button", score: "+8" },
              { text: "Clear Pricing Display", score: "+9" },
              { text: "Include Faces in Ads", score: "+8" },
              { text: "Optimize for Mobile", score: "+8" },
              { text: "Bold and Clear Headline", score: "+7" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-extraLightGray px-4 py-3 rounded-lg"
              >
                <span className="text-sm">{item.text}</span>
                <span className="text-red-400 text-sm">
                  {item.score} Score Point
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
            <div className="flex justify-end mt-2"> {/* Flex container to align the button */}
        <button
          onClick={()=>{nav('/forecast/create')}}
          className="bg-redColor px-4 py-2 rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5;
