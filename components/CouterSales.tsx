"use client";

import React from "react";
import CountUp from "react-countup";

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

const counterData: CounterItem[] = [
  { value: 836, suffix: "M", label: "CARS FOR SALE" },
  { value: 738, suffix: "M", label: "DEALER REVIEWS" },
  { value: 100, suffix: "M", label: "VISITORS PER DAY" },
  { value: 238, suffix: "M", label: "VERIFIED DEALERS" },
];

const CounterSales: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b ">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center ">
        {counterData.map((item, index) => (
          <div key={index} className=" p-6 bg-white hover:shadow-md rounded-md">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900">
              <CountUp
                end={item.value}
                duration={2}
                suffix={item.suffix}
                enableScrollSpy
              />
            </h3>
            <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSales;
