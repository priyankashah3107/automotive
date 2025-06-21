"use client";

import React, { useState } from "react";
import Image from "next/image";
import bg from "@/public/home.png";
import { Car, Search, CarFront, CircleDot, Truck, Sprout } from "lucide-react";

const tabs = ["All", "New", "Used"];

const categories = [
  { icon: <Truck size={18} />, label: "SUV" },
  { icon: <CarFront size={18} />, label: "Sedan" },
  { icon: <Car size={18} />, label: "Hatchback" },
  { icon: <CircleDot size={18} />, label: "Coupe" },
  { icon: <Sprout size={18} />, label: "Hybrid" },
];

const HeroPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <section className="relative h-screen w-full">
      {/* Background */}
      <Image
        src={bg}
        alt="background"
        fill
        priority
        className="object-cover brightness-[0.45]"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Heading */}
        <p className="text-white text-sm mb-2">
          Find cars for sale and for rent near you
        </p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect Car
        </h1>

        {/* Tabs */}
        <div className="flex space-x-6 text-white mb-6 text-sm md:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-1 ${
                selectedTab === tab ? "border-b-2 border-white" : "opacity-60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl px-4 sm:px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <select className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md">
            <option>Any Makes</option>
          </select>
          <select className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md">
            <option>Any Models</option>
          </select>
          <select className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md">
            <option>All Prices</option>
          </select>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-6 py-2 rounded-full flex items-center justify-center gap-2 transition w-full md:w-auto">
            <Search size={16} />
            Search Cars
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 cursor-pointer backdrop-blur-sm transition whitespace-nowrap"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
