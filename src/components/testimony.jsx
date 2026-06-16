import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "James Mwangi",
    role: "Business Traveler",
    image: "https://i.pravatar.cc/100?img=12",
    message:
      "Hotel Zesper gave me the best experience ever. The rooms are clean, modern, and the service is top-tier.",
  },
  {
    name: "Sarah Achieng",
    role: "Tourist",
    image: "https://i.pravatar.cc/100?img=32",
    message:
      "From check-in to check-out, everything was smooth. The staff is friendly and the food is amazing.",
  },
  {
    name: "David Kimani",
    role: "Regular Guest",
    image: "https://i.pravatar.cc/100?img=45",
    message:
      "I love the peaceful environment and fast WiFi. Perfect place for work and relaxation.",
  },
  {
    name: "Grace Wanjiku",
    role: "Family Visitor",
    image: "https://i.pravatar.cc/100?img=5",
    message:
      "We enjoyed our stay as a family. The rooms are spacious and the kids loved the facilities.",
  },
];

const Testimonial = () => {

  const { t, i18n } = useTranslation();
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-8 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-4 px-4">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-600 font-sans">
          {t("What Our Guests Say")}
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm leading-relaxed font-sans">
          {t("Real experiences from guests at Hotel Zesper.")}
        </p>
      </div>

      {/* SCROLL */}
      <div className="relative w-full overflow-hidden mx-7">

        <div
          className={`flex gap-4 w-max px-4 py-2 ${
            paused ? "pause-animation" : "animate-scroll"
          }`}
        >

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="min-w-85 max-w-85 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-6 relative"
            >

              <span className="text-5xl text-blue-100 dark:text-blue-900 absolute top-2 right-4">
                “
              </span>

              <p className="text-slate-600 dark:text-gray-300 text-sm italic">
                {t(item.message)}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>

                  <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                    {t(item.role)}
                  </span>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 28s linear infinite;
          }

          .pause-animation {
            animation-play-state: paused;
          }
        `}
      </style>

    </section>
  );
};

export default Testimonial;