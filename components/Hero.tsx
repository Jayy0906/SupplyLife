import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-10 bg-white px-6 py-8 md:py-8 lg:py-8 2xl:py-28 md:px-10 lg:px-20 xl:px-32 2xl:px-64 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-14 2xl:gap-20">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-yellow-400 font-semibold text-xl md:text-2xl lg:text-2xl 2xl:text-7xl mb-2 lg:mb-6 2xl:mb-14">
          Unlock your full potential today
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-9xl font-bold text-black mb-4 leading-tight 2xl:leading-tight">
          Are You Suffering From
          <br />
          Migraines, Bloating, Skin
          <br />
          Issues or Fatigue?
        </h1>
        <p className="text-sm md:text-base lg:text-base 2xl:text-6xl text-gray-700 mb-6 leading-relaxed lg:leading-loose 2xl:max-w-[150rem]">
          <span className="text-sky-600 font-semibold">
            Intolerance tests made easy!
          </span>{" "}
          Quick and easy pin prick blood collection tests delivered to your door
          with accurate physician-reviewed results to help you eliminate foods
          that slow you down physically and mentally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 2xl:gap-14 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-fuchsia-800 text-white px-6 py-3 lg:px-8 lg:py-2 2xl:px-15 2xl:py-15 rounded-full text-sm lg:text-base 2xl:text-5xl font-semibold hover:bg-fuchsia-900 cursor-pointer">
            FIND OUT MORE
          </button>
          <button className="w-full sm:w-auto bg-yellow-400 text-white px-6 py-3 lg:px-8 lg:py-2 2xl:px-10 2xl:py-5 rounded-full text-sm lg:text-base 2xl:text-5xl font-semibold hover:bg-yellow-500 cursor-pointer">
            BUY FULL TEST NOW
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/hero-box.webp"
          alt="Supply Life Test Kit"
          width={800}
          height={800}
          className="object-contain w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] 2xl:max-w-[1900px] 2xl:max-h-[1900px]"
        />
      </div>
    </section>
  );
}
