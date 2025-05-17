"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: `"I feel like I have been saved. I’m hugely relieved that I chose SupplyLife. It changed my life in many ways."`,
    author: "ELLIE MASON, AGE 23",
    sub: "SUFFERED FROM SKIN RASHES",
    image: "/images/TestimonialSection.webp",
  },
  {
    quote: `"I feel like I have been saved. I’m hugely relieved that I chose SupplyLife. It changed my life in many ways."`,
    author: "JAY PATEL, AGE 24",
    sub: "SUFFERED FROM SKIN RASHES",
    image: "/images/TestimonialSection.webp",
  },
  {
    quote: `"I feel like I have been saved. I’m hugely relieved that I chose SupplyLife. It changed my life in many ways."`,
    author: "JAY PATEL, AGE 24",
    sub: "SUFFERED FROM SKIN RASHES",
    image: "/images/TestimonialSection.webp",
  },
  {
    quote: `"I feel like I have been saved. I’m hugely relieved that I chose SupplyLife. It changed my life in many ways."`,
    author: "JAY PATEL, AGE 24",
    sub: "SUFFERED FROM SKIN RASHES",
    image: "/images/TestimonialSection.webp",
  },
  {
    quote: `"I feel like I have been saved. I’m hugely relieved that I chose SupplyLife. It changed my life in many ways."`,
    author: "JAY PATEL, AGE 24",
    sub: "SUFFERED FROM SKIN RASHES",
    image: "/images/TestimonialSection.webp",
  },
  // Add more if needed
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const testimonial = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section className="bg-[#f5fafd] py-10 2xl:py-30 px-6 md:px-16 lg:px-24 2xl:px-64 text-center relative">
      <h2 className="text-lg md:text-2xl 2xl:text-8xl font-medium mb-10 2xl:mb-30">
        Don’t just take our word for it...
      </h2>

      <div className="relative max-w-8xl mx-auto transition-all duration-300 ease-in-out">
        {/* Desktop Arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute -left-10 2xl:-left-60 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 2xl:w-50 2xl:h-50 rounded-full items-center justify-center z-10 text-fuchsia-800 hover:scale-110 transition cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 2xl:w-30 2xl:h-30" />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute -right-10 2xl:-right-60 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 2xl:w-50 2xl:h-50 rounded-full items-center justify-center z-10 text-fuchsia-800 hover:scale-110 transition cursor-pointer"
        >
          <ArrowRight className="h-5 w-5 2xl:w-30 2xl:h-30" />
        </button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden md:h-80 2xl:h-300 relative">
          {/* Quote Section */}
          <div className="w-full md:w-2/3 text-left p-6 md:pl-20 2xl:pl-32 flex flex-col justify-center relative">
            <p className="text-yellow-500 text-xl md:text-4xl 2xl:text-9xl mb-2 2xl:mb-16">
              ★★★★★
            </p>
            <p className="text-sky-600 text-md md:text-lg 2xl:text-7xl font-medium mb-4 2xl:mb-18">
              {testimonial.quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-md 2xl:text-7xl text-black font-bold">
                  {testimonial.author}
                </p>
                <p className="text-[12px] md:text-xs 2xl:text-6xl 2xl:mt-4 text-gray-500 uppercase tracking-wide">
                  {testimonial.sub}
                </p>
              </div>
              {/* Mobile Avatar (Opposite to Author Name) */}
              <div className="md:hidden flex items-center justify-start ml-4">
                <Image
                  src={testimonial.image}
                  alt="testimonial avatar"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Image */}
          <div className="hidden md:block w-full md:w-1/3 h-full relative">
            <Image
              src={testimonial.image}
              alt="testimonial"
              fill
              className="object-contain md:object-contain lg:object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 2xl:space-x-12 mt-6 2xl:mt-20">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-3 2xl:w-13 h-3 2xl:h-13 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-yellow-400 scale-110" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center items-center gap-6 mt-4 md:hidden">
          <button
            onClick={prev}
            className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <ArrowLeft className="h-5 w-5 text-fuchsia-800" />
          </button>
          <button
            onClick={next}
            className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <ArrowRight className="h-5 w-5 text-fuchsia-800" />
          </button>
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-10 md:mt-15 lg:mt-15 2xl:mt-32 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-24 2xl:gap-40 px-4 md:px-0 2xl:px-20">
        <Image
          src="/hero-box.webp"
          alt="Kit Box"
          width={600}
          height={400}
          className="w-full max-w-xs md:max-w-sm 2xl:max-w-[2000px] 2xl:w-[2000px] rounded-2xl"
        />

        <div className="text-left max-w-md md:max-w-xl 2xl:max-w-7xl w-full">
          <p className="text-fuchsia-800 text-md md:text-xl lg:text-xl 2xl:text-7xl font-semibold mb-2 2xl:mb-4">
            Unlock your full potential today
          </p>
          <h3 className="text-2xl md:text-2xl lg:text-2xl 2xl:text-8xl font-medium mb-4 2xl:mb-6 leading-tight 2xl:leading-snug">
            Get your easy-to-use food intolerance assessment today!
          </h3>
          <button className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-6 py-2 md:px-8 md:py-3 2xl:px-15 2xl:py-15 rounded-full text-sm md:text-base 2xl:text-5xl transition-all cursor-pointer">
            GET YOUR KIT NOW
          </button>
        </div>
      </div>
    </section>
  );
}
