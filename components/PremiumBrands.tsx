import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // ✅ Lucide icon

import audi from "@/public/Premiumbrans/audi.png";
import bmw from "@/public/Premiumbrans/bmw.png";
import ford from "@/public/Premiumbrans/ford.png";
import mercedes from "@/public/Premiumbrans/mercedes.png";
import peu from "@/public/Premiumbrans/peu.png";
import w from "@/public/Premiumbrans/w.png";

const brands = [
  { image: audi, name: "Audi" },
  { image: bmw, name: "BMW" },
  { image: ford, name: "Ford" },
  { image: mercedes, name: "Mercedes Benz" },
  { image: peu, name: "Peugeot" },
  { image: w, name: "Volkswagen" },
];

const PremiumBrands: React.FC = () => {
  return (
    <div className="bg-[#F9FBFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-3xl font-semibold text-gray-900">
            Explore Our Premium Brands
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors"
          >
            Show All Brands
            <ArrowUpRight className="w-4 h-7 " />
          </Link>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={60}
                height={60}
                className="object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-800">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumBrands;
