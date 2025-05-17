"use client";

import Image from "next/image";

export default function FeaturesBar() {
  const features = [
    { icon: "/icons/iso.webp", text: "UK Accredited Laboratory" },
    { icon: "/icons/microscope.webp", text: "Market-leading Diagnostic Test" },
    { icon: "/icons/igg.webp", text: "Full IgG 1, 2 3 & 4 Testing" },
    { icon: "/icons/chat.webp", text: "Free advice with each kit" },
    { icon: "/icons/parcel.webp", text: "Free UK Delivery" },
  ];

  return (
    <section className="relative z-10 bg-fuchsia-800 text-white py-12 px-6 md:py-8 md:px-10 lg:px-10 xl:px-32 2xl:px-64 2xl:py-32">
      <div className="w-full overflow-hidden group">
        <div className="flex 2xl:gap-20 whitespace-nowrap animate-scroll group-hover:paused">
          {/* Duplicate the features array to create a continuous loop */}
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-lg 2xl:text-6xl min-w-[350px] 2xl:min-w-[1100px]"
            >
              <Image
                className="2xl:w-50 2xl:h-50"
                src={feature.icon}
                alt="feature icon"
                width={50}
                height={50}
              />
              <span className="text-left">{feature.text}</span>
            </div>
          ))}
        </div>
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
    </section>
  );
}
