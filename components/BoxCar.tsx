"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface CarEntry {
  name: string;
}

interface TabContent {
  label: string;
  entries: CarEntry[];
}

const tabs: TabContent[] = [
  {
    label: "New Cars For Sale",
    entries: [
      { name: "Ford Cars" },
      { name: "Honda Cars" },
      { name: "Hyundai Cars" },
      { name: "Infiniti Cars" },
      { name: "Jaguar Cars" },
      { name: "Jeep Cars" },
      { name: "Chrysler Cars" },
      { name: "Citroen Cars" },
      { name: "Cupra Cars" },
      { name: "Dacia Cars" },
      { name: "DS Cars" },
      { name: "Fiat Cars" },
    ],
  },
  {
    label: "Used Cars For Sale",
    entries: [
      { name: "Land Rover Cars" },
      { name: "Lexus Cars" },
      { name: "Mercedes-Benz Cars" },
      { name: "Mazda Cars" },
      { name: "MG Cars" },
      { name: "Kia Cars" },
      { name: "Abarth Cars" },
      { name: "Romeo Cars" },
      { name: "Audi Cars" },
      { name: "Bentley Cars" },
      { name: "BMW Cars" },
      { name: "Chevrolet Cars" },
    ],
  },
  {
    label: "Browse By Type",
    entries: [
      { name: "Mini Cars" },
      { name: "Mitsubishi Cars" },
      { name: "Nissan Cars" },
      { name: "Peugeot Cars" },
      { name: "Porsche Cars" },
      { name: "Renault Cars" },
      { name: "Hyundai Cars" },
      { name: "Ford Cars" },
      { name: "Kia Cars" },
      { name: "Honda Cars" },
      { name: "Jeep Cars" },
      { name: "Infiniti Cars" },
    ],
  },
  {
    label: "Browse By Brand",
    entries: [
      { name: "Lexus Cars" },
      { name: "Mazda Cars" },
      { name: "MG Cars" },
      { name: "DS Cars" },
      { name: "Dacia Cars" },
      { name: "Fiat Cars" },
      { name: "Chrysler Cars" },
      { name: "Bentley Cars" },
      { name: "BMW Cars" },
      { name: "Chevrolet Cars" },
      { name: "Peugeot Cars" },
      { name: "Renault Cars" },
    ],
  },
];

const BoxCar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#F9FBFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="md:text-2xl sm:text-sm font-semibold text-gray-900">
            Shop BoxCar Your Way
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-black flex items-center gap-1"
          >
            View More <ArrowUpRight className="w-4 h-4 " />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b text-sm font-medium text-gray-600 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-2 transition-colors whitespace-nowrap ${
                activeTab === index
                  ? "border-b-2 border-blue-600 text-black"
                  : "hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-6">
          {tabs[activeTab].entries.map((entry, idx) => (
            <span
              key={idx}
              className="text-sm text-gray-700 hover:underline cursor-pointer"
            >
              {entry.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxCar;
