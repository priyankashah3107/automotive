import AllVehicles from "@/components/AllVehicles";
import BoxCar from "@/components/BoxCar";
import CounterSales from "@/components/CouterSales";
import Footer from "@/components/Footer";
import InquirySystem from "@/components/InquirySystem";
import LatestBlog from "@/components/LatestBlog";
import PopularMakes from "@/components/PopularMakes";
import PremiumBrands from "@/components/PremiumBrands";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumBrands />
      <AllVehicles />
      <CounterSales />
      <WhyChooseUs />
      <PopularMakes />
      <BoxCar />
      <LatestBlog />
      <InquirySystem />
      <Footer />
    </>
  );
};

export default page;
