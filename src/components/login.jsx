import React from "react";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/images/bodyCover.png')" }}
    >
      {/* Form Container */}
      <div
        className="relative w-full max-w-md rounded-xl p-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/formCover.jpeg')" }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign up to <span className="text-[#ff4d4f]">GorillaBoost</span>
        </h2>

        <label className="text-gray-300 text-sm">Email</label>
        <input
          type="email"
          placeholder="name@work-email.com"
          className="w-full mt-2 mb-4 px-4 py-2 rounded bg-[#111] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button className="w-full py-2 rounded-full font-bold text-black bg-gradient-to-r from-white to-[#ff4d4f] shadow-lg hover:opacity-90 transition mb-6">
          SIGN UP
        </button>

        <div className=" mb-4 text-gray-500 text-center">OR</div>

        <button className="w-full py-2 rounded-md text-white bg-black border border-gray-700 flex items-center justify-center space-x-2 hover:bg-[#111] transition">
          <span className="text-lg">G</span>
          <span>Sign up with Google</span>
        </button>

        {/* Bottom Text for Sign Up */}
        <div className="mt-6 text-center text-gray-300 text-sm">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-[#ff4d4f] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
