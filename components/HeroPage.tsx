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

const makes = ["Audi", "BMW", "Ford", "Mercedes", "Peugeot", "Volkswagen"];

const modelsByMake: { [key: string]: string[] } = {
  Audi: ["A3", "A4", "Q5", "Q7"],
  BMW: ["3 Series", "5 Series", "X3", "X5"],
  Ford: ["Fiesta", "Focus", "Mustang", "Explorer"],
  Mercedes: ["C-Class", "E-Class", "GLC", "GLE"],
  Peugeot: ["208", "308", "2008", "3008"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Polo"],
};

const priceRanges = [
  { value: "0-10000", label: "Under $10,000" },
  { value: "10000-20000", label: "$10,000 - $20,000" },
  { value: "20000-30000", label: "$20,000 - $30,000" },
  { value: "30000-50000", label: "$30,000 - $50,000" },
  { value: "50000-999999", label: "Over $50,000" },
];

const HeroPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedMake, setSelectedMake] = useState("Any Makes");
  const [selectedModel, setSelectedModel] = useState("Any Models");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const make = e.target.value;
    setSelectedMake(make);
    setSelectedModel("Any Models");
    setAvailableModels(modelsByMake[make] || []);
  };

  const handleSearch = () => {
    // In a real app, you would use these values to filter results
    // For example, by navigating to a search results page:
    // router.push(`/search?type=${selectedTab}&make=${selectedMake}...`);
    console.log("Searching with:", {
      type: selectedTab,
      make: selectedMake,
      model: selectedModel,
      price: selectedPrice,
    });
  };

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
          <select
            value={selectedMake}
            onChange={handleMakeChange}
            className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md"
          >
            <option>Any Makes</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!availableModels.length}
            className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md"
          >
            <option>Any Models</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="bg-transparent outline-none text-sm w-full md:w-auto px-3 py-2 border border-gray-200 rounded-md"
          >
            <option>All Prices</option>
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-6 py-2 rounded-full flex items-center justify-center gap-2 transition w-full md:w-auto"
          >
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
