"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";

import p1 from "@/public/popular/p1.png";
import p2 from "@/public/popular/p2w.png";
import p3 from "@/public/popular/p3.png";
import p4 from "@/public/popular/p4.jpg";
import p5 from "@/public/popular/p5.jpg";
import p6 from "@/public/popular/p6.png";

interface CarItem {
  id: number;
  title: string;
  subtitle: string;
  mileage: string;
  fuel: string;
  transmission: string;
  oldPrice?: string;
  newPrice: string;
  image: any;
  tag?: string;
}

interface TabContent {
  label: string;
  cars: CarItem[];
}

const tabs: TabContent[] = [
  {
    label: "Audi",
    cars: [
      {
        id: 1,
        title: "Audi A5 – 2023",
        subtitle: "2.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "500 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        oldPrice: "$50,000",
        newPrice: "$45,000",
        image: p1,
        tag: "Sale",
      },
      {
        id: 2,
        title: "Audi A4 – 2022",
        subtitle: "2.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "150 Miles",
        fuel: "Diesel",
        transmission: "CVT",
        newPrice: "$120,000",
        image: p2,
        tag: "Sale",
      },
      {
        id: 3,
        title: "Audi Q7 – 2024",
        subtitle: "3.0 TFSI quattro Premium",
        mileage: "250 Miles",
        fuel: "Hybrid",
        transmission: "Automatic",
        newPrice: "$90,000",
        image: p3,
      },
      {
        id: 4,
        title: "Audi RS5 – 2024",
        subtitle: "2.9L Twin-Turbo V6",
        mileage: "180 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        newPrice: "$115,000",
        image: p4,
      },
      {
        id: 5,
        title: "Audi e-tron GT – 2023",
        subtitle: "Fully Electric Luxury Sedan",
        mileage: "50 Miles",
        fuel: "Electric",
        transmission: "Automatic",
        newPrice: "$135,000",
        image: p5,
      },
    ],
  },
  {
    label: "Ford",
    cars: [
      {
        id: 6,
        title: "Ford Explorer – 2023",
        subtitle: "3.5L V6 4WD",
        mileage: "300 Miles",
        fuel: "Petrol",
        transmission: "Manual",
        newPrice: "$65,000",
        image: p4,
      },
      {
        id: 7,
        title: "Ford Mustang GT – 2022",
        subtitle: "5.0L V8",
        mileage: "100 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        oldPrice: "$80,000",
        newPrice: "$75,000",
        image: p5,
      },
    ],
  },
  {
    label: "Mercedes Benz",
    cars: [
      {
        id: 8,
        title: "Mercedes GLA – 2023",
        subtitle: "2.0 Turbo 4MATIC",
        mileage: "100 Miles",
        fuel: "Hybrid",
        transmission: "Automatic",
        newPrice: "$85,000",
        image: p6,
      },
    ],
  },
];

const useResponsiveCards = () => {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1); // mobile
      else if (width < 1024) setCardsToShow(2); // tablet
      else setCardsToShow(3); // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  return cardsToShow;
};

const PopularMakes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsToShow = useResponsiveCards();

  const currentCars = tabs[activeTab].cars;

  const handleNext = () => {
    if (currentIndex < currentCars.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const switchTab = (index: number) => {
    setActiveTab(index);
    setCurrentIndex(0);
  };

  return (
    <div className="bg-[#15182c] text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Popular Makes</h2>
          <button className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-700 mb-8 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => switchTab(i)}
              className={`pb-2 text-sm font-medium border-b-2 ${
                i === activeTab
                  ? "border-white text-white"
                  : "border-transparent text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  (100 / cardsToShow) * currentIndex
                }%)`,
                width: `${(100 / cardsToShow) * currentCars.length}%`,
              }}
            >
              {currentCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-[#1f2235] rounded-xl p-4 w-full"
                  style={{ width: `${100 / currentCars.length}%` }}
                >
                  <div className="relative h-48 rounded-md overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.title}
                      fill
                      className="object-cover rounded-md"
                    />
                    {car.tag && (
                      <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {car.tag}
                      </span>
                    )}
                    <Heart className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded-full w-6 h-6" />
                  </div>
                  <div className="pt-4 space-y-1">
                    <h3 className="font-semibold">{car.title}</h3>
                    <p className="text-sm text-gray-400">{car.subtitle}</p>
                    <div className="flex gap-4 text-xs text-gray-300 pt-2">
                      <span>{car.mileage}</span>
                      <span>{car.fuel}</span>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="pt-2">
                      {car.oldPrice && (
                        <span className="line-through text-gray-500 mr-2">
                          {car.oldPrice}
                        </span>
                      )}
                      <span className="font-bold text-lg">{car.newPrice}</span>
                    </div>
                    <button className="mt-3 text-sm text-blue-400 hover:underline flex items-center gap-1">
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-start mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 disabled:opacity-40"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= currentCars.length - cardsToShow}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMakes;
