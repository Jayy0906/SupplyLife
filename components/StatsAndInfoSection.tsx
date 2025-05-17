import Link from "next/link";
import CountUp from "react-countup";

export default function StatsAndInfoSection() {
  const stats = [
    { number: 515016, label: "TESTS PERFORMED" },
    { number: 12, label: "AVERAGE INTOLERANCES PER TEST" },
    { number: 6180192, label: "INTOLERANCES FOUND" },
    { number: 9, label: "COUNTRIES SERVED" },
  ];

  const infoCards = [
    {
      title: "The Science Behind The Results",
      text: "The SupplyLife service utilises state of the art immunoassay microarray technology to detect food-specific IgG antibodies to 220 different foods.",
      bg: "bg-green-500",
      href: "#",
    },
    {
      title: "Allergy vs Intolerance",
      text: "The specific terms food allergy, hypersensitivity and intolerance are all commonly used interchangeably, with some evident confusion regarding the actual differences between them.",
      bg: "bg-sky-500",
      href: "#",
    },
    {
      title: "Blood Vs Hair Testing",
      text: "The specific terms food allergy, hypersensitivity and intolerance are all commonly used interchangeably, with some evident confusion regarding the actual differences between them.",
      bg: "bg-yellow-400",
      href: "#",
    },
  ];

  return (
    <section className="relative z-10 my-8 2xl:my-30 px-6 md:px-32 2xl:px-48 text-center">
      <h2 className="text-xl md:text-3xl lg:text-3xl 2xl:text-8xl font-medium mb-4">
        Check out the <strong>SupplyLife</strong> Results
      </h2>

      <p className="mb-10 2xl:mt-14 text-sm md:text-base 2xl:text-6xl text-gray-700 max-w-2xl 2xl:max-w-7xl mx-auto 2xl:mb-20">
        We are helping people every day to better manage their health and
        identify issues sooner to help avoid serious medical conditions.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 2xl:gap-28 mb-8 2xl:mb-30">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl 2xl:shadow-2xl flex flex-col justify-center items-center 2xl:p-30"
          >
            <h3 className="text-2xl lg:text-5xl 2xl:text-9xl font-bold">
              <CountUp end={item.number} duration={5} separator="," />
            </h3>
            <p className="text-sm 2xl:text-5xl mt-2 2xl:mt-6 text-fuchsia-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-28 mb-8 2xl:mb-45">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} text-white p-6 md:p-6 lg:p-6 rounded-lg text-left flex flex-col 2xl:p-20`}
          >
            <h4 className="font-semibold text-lg md:text-xl 2xl:text-8xl mb-3">
              {card.title}
            </h4>
            <p className="text-sm 2xl:text-6xl flex-grow text-gray-200 2xl:mt-14">
              {card.text}
            </p>
            <Link
              href={card.href}
              className="2xl:mt-8 underline font-medium text-sm 2xl:text-6xl hover:text-fuchsia-800"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white px-6 py-2 2xl:px-15 2xl:py-15 rounded-full text-sm font-semibold 2xl:px-8 2xl:py-3 2xl:text-5xl"
      >
        GET YOUR KIT TODAY
      </Link>
    </section>
  );
}
