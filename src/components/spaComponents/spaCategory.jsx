import React from "react";
import { useTranslation } from 'react-i18next';
import MiniCard from "../card/miniCard";

function SpaCategory() {

  const { t, i18n } = useTranslation();

  const Categories = [
    {
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
      name: 'Massage Therapy',
      description:
        "Relax your body with soothing full-body massages designed to relieve stress and tension."
    },
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
      name: "Facial Care",
      description:
        "Refresh and nourish your skin with premium facial and skincare treatments."
    },
    {
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
      name: "Aromatherapy",
      description:
        "Enjoy calming essential oils and peaceful treatments for total relaxation."
    },
    {
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800",
      name: "Wellness Spa",
      description:
        "Rejuvenate your mind and body with luxury wellness and healing experiences."
    }
  ];

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 py-8">

        <h1 className='text-center text-xl text-black dark:text-white font-bold'>
          <span>{t("Top")}</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">{t("Spa Categories")}</span>
        </h1>

        <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
          {t("Discover relaxing treatments tailored for your wellness")}
        </p>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-start gap-4 p-4">

          {Categories.map((category, index) => (
            <MiniCard key={index}>

              <div className="w-full h-[70%] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className="p-2">

                <h6 className='text-blue-950 dark:text-blue-300 text-lg text-center font-bold'>
                  {t(category.name)}
                </h6>

                <p className='text-xs text-slate-500 dark:text-gray-300 text-center'>
                  {t(category.description)}
                </p>

              </div>

            </MiniCard>
          ))}

        </div>

      </div>
    </>
  );
}

export default SpaCategory;