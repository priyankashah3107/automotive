"use client";

import React from "react";
import Image from "next/image";
import { FacebookIcon, Twitter, Linkedin, Instagram } from "lucide-react";
import apple from "@/public/footer/apple.png";
import play from "@/public/footer/play.png";

interface FooterSection {
  title: string;
  links: string[];
}

const footerData: FooterSection[] = [
  {
    title: "Company",
    links: ["About Us", "Blog", "Services", "FAQs", "Terms", "Contact Us"],
  },
  {
    title: "Quick Links",
    links: ["Get in Touch", "Help center", "Live chat", "How it works"],
  },
  {
    title: "Our Brands",
    links: [
      "Toyota",
      "Porsche",
      "Audi",
      "BMW",
      "Ford",
      "Nissan",
      "Peugeot",
      "Volkswagen",
    ],
  },
  {
    title: "Vehicles Type",
    links: [
      "Sedan",
      "Hatchback",
      "SUV",
      "Hybrid",
      "Electric",
      "Coupe",
      "Truck",
      "Convertible",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d1224] text-white">
      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Join BoxCar</h3>
            <p className="text-sm text-gray-400 mt-1">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>
          <div className="flex items-center bg-[#1a1f38] px-4 py-2 rounded-full w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none text-sm text-white w-full md:w-64"
            />
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full ml-2 hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Footer Links */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-10">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i} className="cursor-pointer hover:text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Our Mobile App + Social */}
          <div>
            <h4 className="font-semibold mb-3">Our Mobile App</h4>
            <div className="space-y-2 mb-4">
              <Image src={apple} alt="Apple Store" width={140} height={45} />
              <Image src={play} alt="Google Play" width={140} height={45} />
            </div>

            <h4 className="font-semibold mb-2">Connect With Us</h4>
            <div className="flex gap-3 text-gray-400">
              <FacebookIcon className="hover:text-white cursor-pointer" />
              <Twitter className="hover:text-white cursor-pointer" />
              <Instagram className="hover:text-white cursor-pointer" />
              <Linkedin className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 exemple.com. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
