import Image from "next/image";
import Link from "next/link";

export default function ReportSection() {
  return (
    <section className="relative z-10 px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-64 bg-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-10 2xl:gap-20">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/images/ReportSection.webp"
            alt="Sample Report image"
            width={900}
            height={600}
            className="mx-auto w-full max-w-[600px] 2xl:max-w-[900px] h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <header>
            <h2 className="text-xl md:text-3xl lg:text-3xl 2xl:text-9xl font-medium mb-6 2xl:mb-20">
              Unlock your <strong className="font-bold">full potential</strong>{" "}
              today
            </h2>
          </header>

          <p className="mb-6 text-gray-500 text-sm lg:text-base 2xl:text-6xl 2xl:mb-20">
            Intolerance tests made easy! Quick and easy pin prick blood
            collection tests delivered to your door with accurate
            physician-reviewed results to help you eliminate foods that slow you
            down physically and mentally.
          </p>

          {/* Feature List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 2xl:gap-10 text-gray-500 text-sm lg:text-base 2xl:text-6xl mb-6 2xl:mb-20">
            {[
              "Up to 224 foods covered",
              "UK based laboratory",
              "Testing – IgG 1, 2, 3, 4",
              "View results via online dashboard",
              "Science based on blood",
              "Complimentary follow up",
              "135 page comprehensive guide",
              "Money back Guarantee",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 2xl:gap-4">
                <span className="text-green-500">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#"
              aria-label="View sample intolerance test report"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 2xl:px-14 2xl:py-6 rounded-full text-sm 2xl:text-5xl font-semibold text-center"
            >
              VIEW SAMPLE REPORT
            </Link>
            <Link
              href="#"
              aria-label="Order intolerance test kit"
              className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white px-6 py-2 2xl:px-14 2xl:py-6 rounded-full text-sm 2xl:text-5xl font-semibold text-center"
            >
              GET YOUR KIT TODAY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
