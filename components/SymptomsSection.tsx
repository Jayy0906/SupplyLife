"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Symptom =
  | "IBS"
  | "Fatigue"
  | "Itchy Skin"
  | "Acne"
  | "Eczema"
  | "Bloating"
  | "JointPain"
  | "Migraine"
  | "RespiratoryProblems"
  | "WeightLoss"
  | "StomachUlcers"
  | "Indigestion";

const symptomContent: Record<
  Symptom,
  { title: string; description: string; image: string }
> = {
  IBS: {
    title: "Irritable Bowel Syndrome (IBS)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Fatigue: {
    title: "Fatigue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  "Itchy Skin": {
    title: "Itchy Skin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Acne: {
    title: "Acne",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Eczema: {
    title: "Eczema",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Bloating: {
    title: "Bloating",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  JointPain: {
    title: "Joint Pain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Migraine: {
    title: "Migraine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  RespiratoryProblems: {
    title: "Respiratory Problems",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  WeightLoss: {
    title: "Weight Loss",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  StomachUlcers: {
    title: "Stomach Ulcers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
  Indigestion: {
    title: "Indigestion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/hero-box.webp",
  },
};

export default function SymptomsSection() {
  const [selected, setSelected] = useState<Symptom>("IBS");
  const current = symptomContent[selected];

  return (
    <section className="relative z-10 px-6 my-8 2xl:my-40 md:px-10 lg:px-20 xl:px-32 2xl:px-64">
      <h2 className="text-center text-xl md:text-3xl lg:text-3xl 2xl:text-8xl font-medium mb-8 2xl:mb-20">
        Symptoms Associated With <strong>Food Intolerances</strong>
      </h2>

      {/* Scrollable symptom buttons */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 mb-10 -mx-6 px-6 no-scrollbar 2xl:text-center">
        <div className="inline-flex space-x-4 2xl:space-x-16">
          {Object.keys(symptomContent).map((symptom) => (
            <button
              key={symptom}
              onClick={() => setSelected(symptom as Symptom)}
              className={`px-4 2xl:py-10 border-b-2 transition-colors duration-200 ${
                selected === symptom
                  ? "border-fuchsia-600 text-fuchsia-800 font-semibold"
                  : "border-transparent hover:border-gray-300 cursor-pointer"
              } text-base md:text-lg lg:text-base 2xl:text-7xl text-gray-700 focus:outline-none`}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>

      {/* Selected symptom content */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-10 2xl:p-30">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={current.image}
            alt={current.title}
            width={500}
            height={300}
            layout="responsive"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 2xl:pl-50 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-3xl 2xl:text-8xl font-semibold mb-4">
            {current.title}
          </h3>
          <p className="text-sm sm:text-base 2xl:text-6xl text-gray-700 mb-6 2xl:mt-10">
            {current.description}
          </p>
          <Link
            href="#"
            className="inline-block bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-6 py-2 2xl:px-15 2xl:py-15 rounded-full text-sm 2xl:text-5xl focus:ring-4 focus:ring-fuchsia-300 transition 2xl:mt-10"
          >
            FIND OUT MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
