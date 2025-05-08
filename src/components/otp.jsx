import React from "react";

const Otp = () => {
  return (
    <div
    className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/images/bodyCover.png')" }}
  >
      {/* Form Container with image background */}
      <div
        className="relative z-10 w-[90%] max-w-md h-[400px] rounded-xl px-12 py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/formCover.jpeg')" }}
      >
        <h2 className="text-white text-2xl font-semibold mb-4 text-start">
          Enter Verification Code
        </h2>
        <p className="text-gray-300 mb-6 text-xs text-start">
          We've sent a 6-digit code to <strong>ammararain800@gmail.com</strong>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-12 text-center text-white bg-[#111] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </div>

        {/* Resend Note */}
        <p className="text-sm text-gray-400 mb-6 text-start">
          Can't find your code? Check your spam folder.
          <br />
          Haven't received it?{" "}
          <a href="#" className="text-red-400 hover:underline">
            Resend code
          </a>
        </p>

        {/* Submit Button */}
        <button className="w-full py-2 rounded-full font-bold text-black bg-white  hover:opacity-90 transition">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Otp;
