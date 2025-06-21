"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Fuel,
  Gauge,
  Settings,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from "lucide-react";

interface Vehicle {
  id: number;
  title: string;
  subtitle: string;
  mileage: string;
  fuel: string;
  transmission: string;
  price: string;
  image: any;
  tag?: string;
}

const inStock: Vehicle[] = [
  {
    id: 1,
    title: "Ford Transit – 2021",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$22,000",
    image: "/popular/p1.png",
    tag: "Great Price",
  },
  {
    id: 2,
    title: "New GLC – 2023",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "50 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$95,000",
    image: "/popular/p2w.png",
    tag: "Low Mileage",
  },
  {
    id: 3,
    title: "Ford Transit – 2021",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$22,000",
    image: "/popular/p3.png",
    tag: "Great Price",
  },
  {
    id: 4,
    title: "New GLC – 2023",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "50 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$95,000",
    image: "/popular/p4.jpg",
    tag: "Low Mileage",
  },
  {
    id: 5,
    title: "Ford Transit – 2021",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$22,000",
    image: "/popular/p5.jpg",
    tag: "Great Price",
  },
  {
    id: 6,
    title: "New GLC – 2023",
    subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
    mileage: "50 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$95,000",
    image: "/popular/p6.png",
    tag: "Low Mileage",
  },
];

const newCars: Vehicle[] = [
  {
    id: 3,
    title: "Audi A6 3.5 – New",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD",
    mileage: "100 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$58,000",
    image: "/popular/p3.png",
  },
  {
    id: 4,
    title: "Corolla Altis – 2023",
    subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD",
    mileage: "15000 Miles",
    fuel: "Petrol",
    transmission: "CVT",
    price: "$45,000",
    image: "/popular/p4.jpg",
  },
];

const usedCars: Vehicle[] = [
  {
    id: 5,
    title: "Ford Explorer 2023",
    subtitle: "3.5 PowerPulse Momentum 5dr AWD",
    mileage: "10 Miles",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "$35,000",
    image: "/popular/p5.jpg",
    tag: "Great Price",
  },
];

const AllVehicles = () => {
  const [activeTab, setActiveTab] = useState("In Stock");
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentTabData = () => {
    switch (activeTab) {
      case "New Cars":
        return newCars;
      case "Used Cars":
        return usedCars;
      case "In Stock":
      default:
        return inStock;
    }
  };

  const vehicles = getCurrentTabData();
  const visibleVehicles = vehicles.slice(startIndex, startIndex + cardsToShow);

  const handleNext = () => {
    if (startIndex + cardsToShow < vehicles.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] text-center sm:text-left">
            Explore All Vehicles
          </h2>
          <a
            href="#"
            className="text-sm text-[#0f172a] hover:underline flex items-center gap-1 justify-center sm:justify-end"
          >
            View All <ExternalLink size={14} />
          </a>
        </div>

        <div className="flex space-x-6 border-b border-gray-200 mb-8 overflow-x-auto">
          {["In Stock", "New Cars", "Used Cars"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setStartIndex(0);
              }}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {visibleVehicles.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow border border-gray-200 p-4 relative"
            >
              <div className="relative w-full h-44 md:h-48 lg:h-52 xl:h-56 rounded-lg overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover"
                />
                {car.tag && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {car.tag}
                  </span>
                )}
                <Bookmark className="absolute top-2 right-2 text-white bg-black/40 p-1 rounded-full w-6 h-6" />
              </div>
              <div className="pt-4 space-y-1">
                <h3 className="font-semibold text-[#0f172a] text-sm sm:text-base md:text-lg">
                  {car.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  {car.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-600 pt-2">
                  <span className="flex items-center gap-1">
                    <Gauge size={14} /> {car.mileage}
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel size={14} /> {car.fuel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Settings size={14} /> {car.transmission}
                  </span>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="font-bold text-base sm:text-lg text-[#0f172a]">
                    {car.price}
                  </span>
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                  >
                    View Details <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-gray-200 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsToShow >= vehicles.length}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-gray-200 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;
