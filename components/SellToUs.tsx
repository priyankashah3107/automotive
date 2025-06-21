"use client";

import Image from "next/image";
import { PlayCircle, CheckCircle2 } from "lucide-react";
import React from "react";
import car from "@/public/why/car.webp"; // Replace with actual image path
import Link from "next/link";

const features = [
  "We are the UK’s largest provider, with more patrols in more places",
  "You get 24/7 roadside assistance",
  "We fix 4 out of 5 cars at the roadside",
];

const SellToUs = () => {
  return (
    <section className="w-full bg-[#f4f6ff] py-12 px-4 md:px-10 rounded-xl">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between max-w-7xl mx-auto">
        {/* Left: Image with play button */}
        <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src={car}
            alt="Luxury car on a scenic road"
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg cursor-pointer">
              <PlayCircle size={32} className="text-black" />
            </div>
          </div>
        </div>

        {/* Right: Text + Features */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Get A Fair Price For Your Car <br />
            <span className="text-gray-800">Sell To Us Today</span>
          </h2>
          <p className="text-gray-600 max-w-md">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of services.
          </p>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={"/inquiry"}
            className="mt-4 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellToUs;
