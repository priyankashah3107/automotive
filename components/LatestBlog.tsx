import React from "react";
import Image from "next/image";
import Link from "next/link";

import l1 from "@/public/blogs/l1.png";
import l2 from "@/public/blogs/l2.png";
import l3 from "@/public/blogs/l3.png";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  image: string;
  tag: string;
  date: string;
  title: string;
}

const blogPosts: BlogPost[] = [
  {
    image: l1.src,
    tag: "Sound",
    date: "November 22, 2023",
    title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
  },
  {
    image: l2.src,
    tag: "Accessories",
    date: "November 22, 2023",
    title: "BMW X6 M50i is designed to exceed your sportiest.",
  },
  {
    image: l3.src,
    tag: "Exterior",
    date: "November 22, 2023",
    title: "BMW X5 Gold 2024 Sport Review: Light on Sport",
  },
];

const LatestBlog: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Latest Blog Posts
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors"
          >
            Show All Brands
            <ArrowUpRight className="w-4 h-7 " />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden hover:shadow-sm p-3 cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <span className="absolute top-3 left-3 bg-white text-xs font-medium text-gray-800 px-3 py-1 rounded-full shadow">
                  {post.tag}
                </span>
              </div>
              <div className="mt-4 px-1">
                <p className="text-xs text-gray-500 mb-1">
                  Admin • {post.date}
                </p>
                <h3 className="text-base font-medium text-gray-900 leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
