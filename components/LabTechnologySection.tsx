import Image from "next/image";
import Link from "next/link";

export default function LabTechnologySection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[800px] overflow-hidden text-white mt-8 lg:mt-0">
      {/* Background image */}
      <Image
        src="/images/LabTechnologySection.png"
        alt="Laboratory background showing advanced testing equipment"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 md:px-10 lg:px-20 2xl:px-64 text-center lg:text-left">
        <p className="text-base md:text-2xl lg:text-2xl 2xl:text-7xl font-medium max-w-5xl mb-6 2xl:mb-12">
          The SupplyLife service utilises state-of-the-art immunoassay
          microarray technology to detect food-specific IgG antibodies to 220
          different foods.
        </p>

        <Link
          href="#"
          aria-label="Find out more about the technology behind our testing"
          className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold rounded-full transition-all
            text-sm md:text-base 2xl:text-5xl
            px-5 py-2 md:px-6 md:py-3 2xl:px-14 2xl:py-6"
        >
          FIND OUT MORE
        </Link>
      </div>
    </section>
  );
}
