"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  type: "login" | "signup";
}

interface AuthFormData {
  email: string;
  password: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const router = useRouter();

  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = (password: string) => password.length >= 6;

  const isFormValid = () =>
    isEmailValid(formData.email) && isPasswordValid(formData.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please enter a valid email and password.");
      return;
    }

    setLoading(true);
    try {
      const endpoint = type === "login" ? "/api/login" : "/api/signup";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast.success(data.message || "Success");

      setFormData({ email: "", password: "" });

      router.push("/");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow space-y-5"
    >
      <h2 className="text-2xl font-bold text-center capitalize">
        {type === "login" ? "Login" : "Sign Up"}
      </h2>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        required
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password (min 6 characters)"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        required
      />

      <button
        type="submit"
        disabled={!isFormValid() || loading}
        className={`w-full py-2 rounded-md text-white font-medium transition ${
          loading || !isFormValid()
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading
          ? type === "login"
            ? "Logging in..."
            : "Signing up..."
          : type === "login"
          ? "Login"
          : "Sign Up"}
      </button>

      <p className="text-center text-sm mt-4">
        {type === "login" ? (
          <>
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
