import React, { useRef, useState } from "react";
import { Input, Typography } from "@material-tailwind/react";

function SingleInputField() {

      const inputClasses =
    "text-white !border-none !shadow-none focus:!outline-none focus:!ring-0";
  const containerClass = "bg-lightGray";
  const labelClass = "text-white";

  return (
    <>
              {/* Always visible input */}
      <div className="bg-extraLightGray p-4 mt-6 rounded-lg">
        <p className="mb-2 text-white font-bold text-17">Name Your Project</p>
        <Input
          label="Enter Your Project Name"
           className={inputClasses}
            containerProps={{ className: containerClass }}
            labelProps={{ className: labelClass }}
        />
      </div>
    </>
  )
}

export default SingleInputField