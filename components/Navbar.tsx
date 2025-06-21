"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, User } from "lucide-react";
import Link from "next/link";

interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Home",
    submenu: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/" },
    ],
  },
  {
    label: "Listings",
    submenu: [
      { label: "Used Cars", href: "/" },
      { label: "New Cars", href: "/" },
    ],
  },
  {
    label: "Blog",
    submenu: [
      { label: "Latest News", href: "/" },
      { label: "Tips", href: "/" },
    ],
  },
  {
    label: "Pages",
    submenu: [
      { label: "About Us", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm text-white py-4 px-6 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl tracking-wide">BOXCARS</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href || "#"}
                className="hover:opacity-80 flex items-center gap-1"
              >
                {item.label}
                {item.submenu && <ChevronDown size={14} className="mt-0.5" />}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/signup"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <User size={16} />
            Sign in
          </Link>

          <Link
            href="/submit"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Submit Listing
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white text-black rounded-b shadow-lg px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto z-40">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="font-medium flex items-center justify-between">
                {item.label}
                {item.submenu && <ChevronDown size={14} />}
              </div>
              {item.submenu && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block hover:underline"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/signup" className="block font-medium text-blue-600">
            Sign in
          </Link>
          <Link
            href="/submit"
            className="block bg-black text-white text-center py-2 rounded-full"
          >
            Submit Listing
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
