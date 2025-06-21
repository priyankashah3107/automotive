"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export const InquiryFormPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    phone: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone: string) =>
    /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(phone);

  const isFormValid =
    form.firstName.trim() !== "" &&
    isValidPhone(form.phone) &&
    isValidEmail(form.email) &&
    form.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#f5f6fa] py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="p-6 max-w-md text-center bg-white rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
          <Image
            src="/image.png"
            alt="Application Submitted"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p className="text-gray-600">
            Thank you for submitting your task - we appreciate your effort and
            will review it soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f6fa] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow">
        <h2 className="text-3xl font-semibold text-gray-900">Inquiry Form</h2>
        <p className="text-gray-500 mb-8">
          We will get in touch with you shortly
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              onBlur={() => handleBlur("firstName")}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                touched.firstName && form.firstName.trim() === ""
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {touched.firstName && form.firstName.trim() === "" && (
              <p className="text-red-500 text-xs mt-1">
                First name is required.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                touched.phone && !isValidPhone(form.phone)
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {touched.phone && !isValidPhone(form.phone) && (
              <p className="text-red-500 text-xs mt-1">
                Enter a valid phone number.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                touched.email && !isValidEmail(form.email)
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {touched.email && !isValidEmail(form.email) && (
              <p className="text-red-500 text-xs mt-1">
                Enter a valid email address.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 text-black ${
                touched.message && form.message.trim() === ""
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {touched.message && form.message.trim() === "" && (
              <p className="text-red-500 text-xs mt-1">Message is required.</p>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className={`px-6 py-2 rounded font-semibold text-white text-sm transition ${
                isFormValid && !isSubmitting
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryFormPage;
