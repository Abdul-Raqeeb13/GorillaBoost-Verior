import React, { useState } from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [analyze, setAnalyze] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const nav = useNavigate();

  return (
    <div className="bg-lightGray text-white flex flex-col h-full">
      {/* Header */}
      <StepsHeader
        image="../assets/stepperi1.svg"
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
      />

      <div className="flex flex-col md:flex-row gap-8 flex-grow">
        {/* Heatmap Section */}
        <div className="md:w-1/2 w-full rounded-2xl flex flex-col ">
          <img
            src="/assets/images/formCover.jpeg"
            alt="Heatmap"
            className="rounded-lg w-full h-96 object-cover"
          />

          <div className="mt-4 flex items-center justify-around p-4 bg-extraLightGray rounded-lg">
            <div className="flex gap-12 items-center ">
              <div className="flex items-center gap-2 ">
                <span className="text-sm">Heatmap</span>

                <Switch
                  color="red"
                  checked={showHeatmap}
                  onChange={() => setShowHeatmap(!showHeatmap)}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Analyze</span>

                <Switch
                  color="yellow"
                  checked={analyze}
                  onChange={() => setAnalyze(!analyze)}
                />
              </div>
            </div>

            <button onClick={() => setEditMode(!editMode)}>
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
          <div className="bg-extraLightGray rounded-lg p-5">
            <div className="text-20 font-medium">Performance Score</div>
            <div className="text-12 font-medium my-2">Score Point</div>
            <div className="text-40 font-semibold">44%</div>
          </div>

          <p className="text-14 font-medium my-4">
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
                <span className="text-14 font-bold">{item.text}</span>
                <span className="text-redColor font-bold text-14">{item.score} Score Point</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button positioned at the bottom-right */}
      <div className="mt-5 flex justify-end "> {/* Push the button to the bottom */}
        <button
          onClick={() => nav("/forecast/create")}
          className="bg-redColor w-32 h-12 rounded-md font-bold text-20 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5;
// /forecast/create