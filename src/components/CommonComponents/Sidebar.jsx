import React from "react";

function DefaultSidebar() {
    return (
        <div
            className="hidden lg:flex fixed top-0 left-0 h-screen w-[72.75px] 
                 flex-col items-center shadow-xl  
                 bg-[rgba(20,20,31,1)]"
        >
            {/* Top Section */}
            <div className="flex flex-col gap-4 items-center w-full mt-5">
                <div
                    className="flex items-center justify-center
                     w-[34.24px] h-[34.24px]
                     rounded-[4.28px]
                     bg-[rgba(246,105,77,1)]
                     text-white text-sm font-bold select-none"
                >
                    V
                </div>

                {/* Sidebar Icons */}
                {[
                    "i1.svg",
                    "bell.svg",
                    "Vector (1).svg",
                    "Vector (2).svg",
                    "Vector (3).svg",
                    "Vector (4).svg",
                    "Vector (5).svg",
                ].map((icon, index) => (
                    <button
                        key={index}
                        className="p-0.5 hover:bg-gray-700 rounded w-full flex justify-center items-center"
                        onClick={() => alert(`${icon} Page`)}
                    >
                        <img
                            src={`./assets/${icon}`}
                            alt={icon}
                            className="w-5 h-5 object-contain"
                        />
                    </button>
                ))}
            </div>

            <div className="flex-grow" />

            {/* Bottom Section */}
            <div className="flex flex-col gap-2 items-center w-full mb-6">
                {["updown.svg", "questions.svg"].map((icon, index) => (
                    <button
                        key={index}
                        className="p-1.5 hover:bg-gray-700 rounded w-full flex justify-center items-center"
                        onClick={() => alert(`${icon} Page`)}
                    >
                        <img
                            src={`./assets/${icon}`}
                            alt={icon}
                            className="w-5 h-5 object-contain"
                        />
                    </button>
                ))}

                <div
                    className="relative flex items-center justify-center
                     w-[34.24px] h-[34.24px]
                     rounded-[4.28px]
                     bg-[#1467b3]
                     text-white text-sm font-bold select-none"
                >
                    AK
                    <span className="absolute bottom-[2px] right-[2px] w-[8px] h-[8px] bg-green-500 rounded-full border-2 border-white"></span>
                </div>
            </div>
        </div>
    );
}

export default DefaultSidebar;
