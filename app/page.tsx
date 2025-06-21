import AllVehicles from "@/components/AllVehicles";
import BoxCar from "@/components/BoxCar";
import CounterSales from "@/components/CouterSales";
import CustomerSay from "@/components/CustomerSay";
import Footer from "@/components/Footer";
import HeroPage from "@/components/HeroPage";
import InquirySystem from "@/components/InquirySystem";
import LatestBlog from "@/components/LatestBlog";
import Navbar from "@/components/Navbar";
import PopularMakes from "@/components/PopularMakes";
import PremiumBrands from "@/components/PremiumBrands";
import SellToUs from "@/components/SellToUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import { getSession } from "@/lib/auth";

const page = async () => {
  const session = await getSession();
  return (
    <>
      <Navbar session={session} />
      <HeroPage />
      <PremiumBrands />
      <AllVehicles />
      <SellToUs />
      <CounterSales />
      <WhyChooseUs />
      <PopularMakes />
      <BoxCar />
      <CustomerSay />
      <LatestBlog />
      <InquirySystem />
      <Footer />
    </>
  );
};

export default page;
