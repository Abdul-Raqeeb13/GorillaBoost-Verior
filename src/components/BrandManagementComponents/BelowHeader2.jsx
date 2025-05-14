import { Input, Typography } from "@material-tailwind/react";
import { FiGlobe } from "react-icons/fi";
import Button from "../CommonComponents/Button";

function BelowHeader2() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-6 gap-4 mt-5 bg-lightGray w-full rounded-md">
      
      {/* Logo + Heading */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="p-2 rounded-full bg-extraLightGray">
          <FiGlobe className="w-6 h-6 text-white" />
        </div>
        <Typography className=" font-bold text-17 text-white">
          Extract Data From Web
        </Typography>
      </div>

      {/* Input Field */}
      <div className="w-full lg:flex-1">
        <div className="p-2 rounded-lg bg-extraLightGray  w-full">
          <Input
            maxLength={16}
            label="Enter your URL"
            className="w-full border-none text-white "
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full lg:w-auto flex justify-end">
        <Button
          text="Input Brand"
          color="bg-redColor"
          px="px-7"
          py="py-4"
          fontSize="text-base"
          width="w-full lg:w-auto"
          height=""
          rounded="rounded-md"
          textColor="text-white"
          shadow="shadow-lg"
          onClick={() => console.log("Button Clicked!")}
        />
      </div>
    </div>
  );
}

export default BelowHeader2;
