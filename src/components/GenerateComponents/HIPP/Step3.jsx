import React from 'react'
import StepHeaderWithButton from "../StepHeaderWithButton";
import { Search, MoreVertical } from "lucide-react"; // using lucide icons
import { Select, Option } from "@material-tailwind/react";
function Step3() {
    return (
        <>
            <StepHeaderWithButton
                image="../assets/aibgstyle.svg"
                title="AI Background Styles"
                subtitle="Select up to 6 presets or create your own unique style"
                buttons={[
                    {
                        text: "Preset Styles",
                        img: "/assets/presetstyle.svg",
                        onClick: () => console.log("Add New clicked"),
                    },
                    {
                        text: "Custom Style",
                        img: "/assets/customstyle.svg",
                        onClick: () => console.log("Upload clicked"),
                    },
                    {
                        text: "Styles Match",
                        img: "/assets/stylesmatch.svg",
                        onClick: () => console.log("Upload clicked"),
                    },
                ]}
            />


            <div className="flex items-center justify-between bg-lightGray text-white px-1">
                {/* Left: Title & Subtitle */}
                <div>
                    <h2 className="text-20 font-semibold ">Preset Styles</h2>
                    <p className="text-12 font-medium my-1">Proven styles for high-quality results</p>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-md bg-extraLightGray">
                        <Search className="w-5 h-5" />
                    </button>
                    <div className="w-48 bg-extraLightGray">
                        <Select label="Special Occassion">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Step3