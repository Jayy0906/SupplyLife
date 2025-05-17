import Image from "next/image";
import Link from "next/link";

export default function IngredientsSection() {
  return (
    <section className="relative z-10 my-8 w-full h-[400px] md:h-[243px] lg:h-[430px] 2xl:h-[800px]">
      <Image
        src="/images/LabTechnologySection.png"
        alt="Ingredients Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex justify-end items-center px-6 md:px-16 2xl:px-32">
        <div className="text-white max-w-md 2xl:max-w-7xl px-4">
          <h3 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-9xl font-semibold mb-2 md:mb-4 lg:mb-4 2xl:mb-24">
            Ingredients We Test For
          </h3>
          <p className="text-base md:text-xl lg:text-xl 2xl:text-6xl mb-3 md:mb-6 lg:mb-6 2xl:mb-16">
            Please note this is the premium list of ingredients and each test
            may vary.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-3 md:px-6 lg:px-6 md:py-2 lg:py-2 2xl:px-15 2xl:py-15 rounded-full text-sm focus:ring-4 focus:ring-yellow-300 md:text-sm lg:text-sm 2xl:text-5xl"
          >
            VIEW ALL INGREDIENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
