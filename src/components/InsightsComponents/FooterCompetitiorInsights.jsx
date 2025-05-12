import { Input, Typography } from "@material-tailwind/react";
import { FiGlobe } from "react-icons/fi";
import Button from "../CommonComponents/Button";
import { useNavigate } from "react-router-dom";

function FooterCompetitorInsights() {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-6 gap-4 mt-5 bg-lightGray w-full rounded-md">
      
      {/* Logo + Heading */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="p-2 rounded-full bg-extraLightGray">
          <FiGlobe className="w-6 h-6 text-white" />
        </div>
        <Typography className="text-base lg:text-lg font-semibold text-white">
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
          text="Get Competitor Insights"
          color="bg-redColor"
          px="px-2"
          py="py-2"
          fontSize="text-base"
          width="w-full lg:w-auto"
          height="h-10"
          rounded="rounded-md"
          textColor="text-white"
          shadow="shadow-lg"
          onClick={() => navigate("/insights/dashboard")}
        />
      </div>
    </div>
  );
}

export default FooterCompetitorInsights;
