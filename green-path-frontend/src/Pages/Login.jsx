import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function AuthPage() {
  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      console.log("LOGIN DATA:", form.email, form.password);
      // call login API
    } else {
      console.log("SIGNUP DATA:", form);
      // call signup API
    }
  };

  return (
    <div className="
      min-h-screen flex items-center justify-center
      bg-linear-to-b
      from-[#FFEFEF]
      via-[#E2BBE9]/40
      to-[#FFEFEF]
      px-4
    ">
      {/* Island Card */}
      <div className="
        w-full max-w-md
        rounded-3xl
        backdrop-blur-xl
        bg-white/60
        border border-[#E2BBE9]
        shadow-2xl
        p-8
        mt-6
      ">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#756AB6]">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-[#9B86BD] mt-2">
            {mode === "login"
              ? "Login to continue your journey"
              : "Sign up to explore cleaner routes"}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-[#FFEFEF] border border-purple-500 rounded-full p-1 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition
              ${
                mode === "login"
                  ? "bg-[#756AB6] text-[#FFEFEF]"
                  : "text-[#756AB6]"
              }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition
              ${
                mode === "signup"
                  ? "bg-[#756AB6] text-[#FFEFEF]"
                  : "text-[#756AB6]"
              }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl
                border border-[#E2BBE9]
                focus:outline-none focus:ring-2
                focus:ring-[#9B86BD]
                bg-[#FFEFEF]"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
              border border-[#E2BBE9]
              focus:outline-none focus:ring-2
              focus:ring-[#9B86BD]
              bg-[#FFEFEF]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
              border border-[#E2BBE9]
              focus:outline-none focus:ring-2
              focus:ring-[#9B86BD]
              bg-[#FFEFEF]"
          />

          <PrimaryButton type="submit" className="w-full mt-2 py-4">
            {mode === "login" ? "Login" : "Create Account"}
          </PrimaryButton>
        </form>

        {/* Footer Text */}
        <div className="text-center mt-6 text-sm text-[#9B86BD]">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-[#756AB6] font-medium hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#756AB6] font-medium hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
