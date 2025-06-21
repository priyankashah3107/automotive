"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dummyCars = [
  { id: 1, make: 'Audi', model: 'A4', type: 'New', price: 45000, image: '/popular/p1.png' },
  { id: 2, make: 'BMW', model: 'X5', type: 'Used', price: 28000, image: '/popular/p2w.png' },
  { id: 3, make: 'Ford', model: 'Mustang', type: 'New', price: 55000, image: '/popular/p3.png' },
  { id: 4, make: 'Mercedes', model: 'C-Class', type: 'Used', price: 25000, image: '/popular/p4.jpg' },
  { id: 5, make: 'Volkswagen', model: 'Golf', type: 'New', price: 32000, image: '/popular/p5.jpg' },
  { id: 6, make: 'Audi', model: 'Q7', type: 'Used', price: 48000, image: '/popular/p6.png' },
  { id: 7, make: 'BMW', model: '3 Series', type: 'New', price: 42000, image: '/Premiumbrans/bmw.png' },
  { id: 8, make: 'Peugeot', model: '208', type: 'Used', price: 18000, image: '/Premiumbrans/peu.png' },
  { id: 9, make: 'Ford', model: 'Focus', type: 'New', price: 22000, image: '/Premiumbrans/ford.png' },
  { id: 10, make: 'Volkswagen', model: 'Polo', type: 'Used', price: 8000, image: '/Premiumbrans/w.png' },
  { id: 11, make: 'Mercedes', model: 'GLE', type: 'New', price: 65000, image: '/Premiumbrans/mercedes.png' },
  { id: 12, make: 'Audi', model: 'A3', type: 'Used', price: 19000, image: '/Premiumbrans/audi.png' },
];

const SearchClientPage = ({ session, searchParams }: { session: any, searchParams: { [key: string]: string | string[] | undefined } }) => {
  const { type, make, model, price: priceRange } = searchParams;

  const filteredCars = dummyCars.filter((car) => {
    let isMatch = true;
    if (type && car.type !== type) isMatch = false;
    if (make && car.make !== make) isMatch = false;
    if (model && car.model !== model) isMatch = false;
    if (priceRange && typeof priceRange === 'string') {
      const [min, max] = priceRange.split("-").map(Number);
      if (car.price < min || car.price > max) isMatch = false;
    }
    return isMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar session={session} />
      <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">Showing {filteredCars.length} matching vehicles.</p>
        
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48">
                  <Image src={car.image} alt={`${car.make} ${car.model}`} fill style={{ objectFit: 'cover' }} />
                  <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full text-white ${car.type === 'New' ? 'bg-green-500' : 'bg-blue-500'}`}>{car.type}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{car.make} {car.model}</h3>
                  <p className="text-2xl font-bold mt-2 text-indigo-600">${car.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">No cars found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search filters for a wider selection.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchClientPage; 