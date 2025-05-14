import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input, Textarea } from "@material-tailwind/react";
import StepsHeader from "../../CommonComponents/StepsHeader";


const Step2 = ({onNext}) => {
  const [isOpen, setIsOpen] = useState(true);

  const inputClasses =
    "text-white !border-none !shadow-none focus:!outline-none focus:!ring-0";
  const containerClass = "bg-lightGray";
  const labelClass = "text-white";

  return (
    <div className="min-h-screen bg-lightGray text-white space-y-6">

         <StepsHeader
        image="../assets/stepperi1.svg"
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
      />
      {/* Collapsible Section */}
      <div className="bg-extraLightGray rounded-xl p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <span className="bg-IcColor p-5 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/artificial-intelligence.png"
                alt="AI Icon"
                className="w-5 h-5"
              />
            </span>
            <h2 className="text-lg font-semibold">Generate texts with AI</h2>
          </div>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>

        {isOpen && (
          <div className="mt-6 space-y-4">
            {/* Website Scan Section */}
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="px-4 py-2 rounded-lg font-medium">
                Scan Website
              </span>
              <div className="flex-1 w-full">
                <Input
                  label="Your Landing Page or Website"
                  defaultValue="https://veriorinc.com/"
                  className={inputClasses}
                  containerProps={{ className: containerClass }}
                  labelProps={{ className: labelClass }}
                />
              </div>
              <button className="bg-[#FF5F5F] text-white px-4 py-2 rounded-lg">
                Scan Website
              </button>
            </div>

            {/* Product Name Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Input
                label="Enter Product Name"
                className={inputClasses}
                containerProps={{ className: containerClass }}
                labelProps={{ className: labelClass }}
              />
              <Input
                label="Enter Product Name"
                className={inputClasses}
                containerProps={{ className: containerClass }}
                labelProps={{ className: labelClass }}
              />
              <Input
                label="Enter Product Name"
                className={inputClasses}
                containerProps={{ className: containerClass }}
                labelProps={{ className: labelClass }}
              />
            </div>

            {/* Description */}
            <Textarea
              label="Enter Product Description"
              rows={3}
               className={inputClasses}
                  containerProps={{ className: containerClass }}
                  labelProps={{ className: labelClass }}
            />

            {/* More Product Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Enter Product Name"
                className={inputClasses}
                containerProps={{ className: containerClass }}
                labelProps={{ className: labelClass }}
              />
              <Input
                label="Enter Product Name"
                className={inputClasses}
                containerProps={{ className: containerClass }}
                labelProps={{ className: labelClass }}
              />
            </div>

            {/* Generate Button */}
            <div className="flex justify-end">
              <button className="bg-[#FF5F5F] text-white px-6 py-2 rounded-lg">
                Generate
              </button>
            </div>
          </div>
        )}
      </div>

      {/* On Image Text Section */}
      <div className="bg-extraLightGray rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">On Image Text</h3>

        <div className="space-y-2">
          <label className="block text-sm">Your Main Headline Here</label>
          <Input
            label="Enter Your Main Headline"
            className={inputClasses}
            containerProps={{ className: containerClass }}
            labelProps={{ className: labelClass }}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Your Punchline Here</label>
          <Input
            label="Enter Your Punchline"
            className={inputClasses}
            containerProps={{ className: containerClass }}
            labelProps={{ className: labelClass }}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Call to Action Text Here</label>
          <Input
            label="Enter Your Call to Action Text"
            className={inputClasses}
            containerProps={{ className: containerClass }}
            labelProps={{ className: labelClass }}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Call To Action</label>
          <Input
            label="Call To Action"
            className={inputClasses}
            containerProps={{ className: containerClass }}
            labelProps={{ className: labelClass }}
          />
        </div>
      </div>

      <div className=" flex justify-end "> {/* Push the button to the bottom */}
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

export default Step2;
