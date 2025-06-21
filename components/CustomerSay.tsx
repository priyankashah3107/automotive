"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import t1 from "@/public/testi/t1.png";
import t2 from "@/public/testi/t2.png";
import t3 from "@/public/testi/t3.png";
import t4 from "@/public/testi/t4.png";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  image: StaticImageData;
  name: string;
  role: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    image: t1,
    name: "Ali TUFAN",
    role: "Designer",
    rating: 5,
    text: "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
  },
  {
    image: t2,
    name: "Sophia Patel",
    role: "Marketing Manager",
    rating: 5,
    text: "Incredible support and transparency throughout the whole process. Highly recommend them!",
  },
  {
    image: t3,
    name: "Rohan Mehra",
    role: "Photographer",
    rating: 5,
    text: "Really satisfied with the team’s professionalism. They made it super easy to sell my car.",
  },
  {
    image: t4,
    name: "Emily Nguyen",
    role: "Developer",
    rating: 5,
    text: "A smooth and quick experience from beginning to end. Thanks to the whole team!",
  },
];

const CustomerSay = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f2f6f8] py-16 px-4 md:px-10 text-black  mt-10">
      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-row items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold ">
            What our customers say
          </h2>
          <p className="text-sm text-gray-500  ">
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center  justify-between relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-[-50px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition cursor-pointer"
          >
            <ChevronLeft />
          </button>

          {/* Image */}
          <div className="w-64 h-64 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover"
              fill
              sizes="256px"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-xs bg-yellow-300 text-white font-semibold px-2 py-0.5 rounded">
                {testimonial.rating.toFixed(1)}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-md text-gray-700 leading-relaxed">
              {testimonial.text}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-[-50px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
