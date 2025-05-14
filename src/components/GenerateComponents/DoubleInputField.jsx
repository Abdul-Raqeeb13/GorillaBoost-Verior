import React from 'react';
import { Input } from '@material-tailwind/react';

function DoubleInputField() {
    const containerClass = "bg-lightGray rounded-md text-white"; // Apply rounded-md here
    const labelClass = "text-white ";

    return (
        <div className=" bg-extraLightGray p-3 rounded-lg">
            <p className="text-xl font-semibold text-white">What is your product?</p>

            <div className="grid grid-cols-2 items-center gap-5 p-5 px-3">
                {/* First Input Section */}
                <div className="bg-extraLightGray  rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <img src="/assets/check.svg" alt="check" className="w-6 h-6" />
                        <p className="text-white font-medium text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus!
                        </p>
                    </div>
                    <Input
                        type="text"
                        label="Enter your product name"
                        className="bg-lightGray border-none text-white" // Apply padding for better styling
                        containerProps={{
                            className: `${containerClass} p-1` // Applying rounded-md to the container
                        }}
                        labelProps={{ className: labelClass }}
                    />
                </div>

                {/* Second Input Section */}
                <div className="bg-extraLightGray rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <img src="/assets/cross.svg" alt="cross" className="w-6 h-6" />
                        <p className="text-white font-medium text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus!
                        </p>
                    </div>
                    <Input
                        type="text"
                        label="Enter your alternative product"
                        className="bg-lightGray border-none text-white" // Apply padding for better styling
                        containerProps={{
                            className: `${containerClass} p-1` // Applying rounded-md to the container
                        }}
                        labelProps={{ className: labelClass }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DoubleInputField;
