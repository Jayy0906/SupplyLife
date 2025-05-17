"use client";

import Image from "next/image";
import Link from "next/link";
import blue from "../public/images/blue.webp";
import yellow from "../public/images/yellow.webp";
import green from "../public/images/green.webp";
import laptopIcon from "../public/icons/laptop.webp";
import messageIcon from "../public/icons/message.webp";
import fingerIcon from "../public/icons/finger.webp";
import documentIcon from "../public/icons/document.webp";

export default function TestPlans() {
  const plans = [
    {
      name: "Supply Life 60",
      price: "£120.00",
      features: [
        "60 popular foods tested",
        "Ongoing support",
        "Money-back Guarantee",
        "135-page Intolerance Guide",
      ],
      image: blue,
      btnColor: "bg-sky-400 hover:bg-sky-500",
      border: "border-sky-400",
      linkColor: "text-sky-500",
    },
    {
      name: "Supply Life 200+",
      price: "£180.00",
      features: [
        "200+ popular foods tested",
        "Ongoing support",
        "Money-back Guarantee",
        "135-page Intolerance Guide",
      ],
      image: yellow,
      btnColor: "bg-yellow-400 hover:bg-yellow-500",
      border: "border-yellow-400",
      badge: "BEST VALUE",
      linkColor: "text-yellow-500",
      isBest: true,
    },
    {
      name: "Vegan+",
      price: "£120.00",
      features: [
        "50 popular foods tested",
        "Money-back Guarantee",
        "135-page Intolerance Guide",
      ],
      image: green,
      btnColor: "bg-green-500 hover:bg-green-600",
      border: "border-green-500",
      linkColor: "text-green-600",
    },
  ];

  const steps = [
    "Order online the kit that suits you best",
    "Receive your kit direct to your door",
    "Perform a simple finger prick test and send it back to us",
    "Receive your results within 7-10 working days",
  ];

  const icons = [laptopIcon, messageIcon, fingerIcon, documentIcon];

  return (
    <section className="relative z-10 my-8 md:my-12 2xl:my-40 px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-64 bg-white text-center">
      {/* Title */}
      <h2 className="text-xl md:text-3xl lg:text-3xl 2xl:text-3xl font-medium mb-6 2xl:mb-30 2xl:text-8xl">
        Our <strong>4 Simple Steps</strong> For A Full Test Programme
      </h2>

      {/* Steps Icons */}
      <div className="relative overflow-hidden group mb-16 2xl:mb-42">
        <div className="flex flex-nowrap gap-10 px-1 text-m animate-scroll snap-x group-hover:paused">
          {[...steps].map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-start gap-6 w-[250px] snap-start 2xl:w-[1350px]"
            >
              <div className="w-16 h-16 2xl:w-50 2xl:h-50 bg-fuchsia-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src={icons[index % icons.length]}
                  alt={`step-icon-${index}`}
                  width={36}
                  height={36}
                  className="w-9 h-9 2xl:w-[120px] 2xl:h-[120px]"
                />
              </div>
              <p className="text-left text-sm 2xl:text-6xl">{step}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 10s linear infinite;
          }

          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 2xl:gap-20 mt-1 2xl:mt-32">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative border-2 ${
              plan.border
            } rounded-2xl shadow-lg text-center flex flex-col items-center justify-between
            p-8 md:p-10 2xl:p-20
            ${
              plan.isBest
                ? "lg:scale-105 lg:w-[400px] 2xl:w-[1000px] 2xl:h-[1600px]"
                : "w-full lg:w-[350px] 2xl:w-[850px] 2xl:h-[1600px]"
            }`}
          >
            {plan.badge && (
              <span className="absolute top-2 md:top-4 2xl:top-6 left-1/2 -translate-x-1/2 bg-fuchsia-800 text-white text-xs md:text-sm 2xl:text-3xl font-bold px-4 md:px-6 lg:px-4 2xl:px-16 py-1 md:py-2 lg:py-1 2xl:py-4 rounded-sm z-10">
                {plan.badge}
              </span>
            )}
            <Image
              src={plan.image}
              alt={plan.name}
              className="mb-6 w-[180px] h-auto 2xl:w-[500px]"
              width={180}
              height={120}
            />

            <h3 className="text-lg md:text-xl 2xl:text-5xl font-semibold mb-2">
              {plan.name}
            </h3>
            <p className="text-xl md:text-2xl font-bold mb-6 2xl:text-7xl">
              {plan.price}
            </p>

            <ul className="text-sm text-left mb-8 space-y-2 2xl:space-y-6">
              {plan.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-start gap-2 2xl:gap-4 text-sm 2xl:text-5xl"
                >
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`${plan.btnColor} px-6 py-3 md:px-8 md:py-4 2xl:px-24 2xl:py-8 2xl:text-6xl rounded-full text-sm md:text-base font-semibold w-full mb-4 transition-all duration-300 cursor-pointer
`}
            >
              BUY NOW
            </button>
            <Link
              href="#"
              className={`text-xs underline ${plan.linkColor} block py-2 2xl:text-5xl`}
            >
              Find out more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
