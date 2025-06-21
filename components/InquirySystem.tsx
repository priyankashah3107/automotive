"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import i1 from "@/public/contact/i1.png";
import i2 from "@/public/contact/i2.png";

const InquirySystem: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Buyer Card */}
        <div className="bg-blue-50 rounded-xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Are You Looking <br /> For a Car ?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-5 py-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started ↗
            </Link>
          </div>
          <div className="mt-6 self-end">
            <Image src={i1} alt="Looking for car" width={80} height={80} />
          </div>
        </div>

        {/* Seller Card */}
        <div className="bg-pink-50 rounded-xl p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Do You Want to <br /> Sell a Car ?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-5 py-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
            >
              Get Started ↗
            </Link>
          </div>
          <div className="mt-6 self-end">
            <Image src={i2} alt="Sell car" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySystem;
