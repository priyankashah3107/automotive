// import React from "react";
// import Image from "next/image";

// import f1 from "@/public/why/f1.png";
// import f2 from "@/public/why/f2.png";
// import f3 from "@/public/why/f3.png";
// import f4 from "@/public/why/f4.png";

// interface WhyChooseUsItem {
//   image: any;
//   title: string;
//   info: string;
// }

// const whyChooseUsData: WhyChooseUsItem[] = [
//   {
//     image: f1,
//     title: "Special Financing Offers",
//     info: "Our stress-free finance department that can find financial solutions to save you money.",
//   },
//   {
//     image: f2,
//     title: "Trusted Car Dealership",
//     info: "Our stress-free finance department that can find financial solutions to save you money.",
//   },
//   {
//     image: f3,
//     title: "Transparent Pricing",
//     info: "Our stress-free finance department that can find financial solutions to save you money.",
//   },
//   {
//     image: f4,
//     title: "Expert Car Service",
//     info: "Our stress-free finance department that can find financial solutions to save you money.",
//   },
// ];

// const WhyChooseUs: React.FC = () => {
//   return (
//     <div className="bg-white py-14 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//           Why Choose Us?
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {whyChooseUsData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={60}
//                 height={60}
//                 className="mb-4"
//               />
//               <h3 className="text-base font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 max-w-xs">{item.info}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
import React from "react";
import Image from "next/image";

import f1 from "@/public/why/f1.png";
import f2 from "@/public/why/f2.png";
import f3 from "@/public/why/f3.png";
import f4 from "@/public/why/f4.png";

interface WhyChooseUsItem {
  image: string;
  title: string;
  info: string;
}

const whyChooseUsData: WhyChooseUsItem[] = [
  {
    image: f1.src,
    title: "Special Financing Offers",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    image: f2.src,
    title: "Trusted Car Dealership",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    image: f3.src,
    title: "Transparent Pricing",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    image: f4.src,
    title: "Expert Car Service",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
