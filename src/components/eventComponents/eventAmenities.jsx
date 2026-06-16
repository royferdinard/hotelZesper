import React from "react";
import { useTranslation } from 'react-i18next';
import EventAmenities from "./amenitiesStore";
import Card from "../card/card";

const EventAmenity = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-white dark:bg-slate-900 pt-8 pb-4 px-4 md:px-4">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span className="text-black dark:text-white">{t("Event")}</span> {t("Amenities")}
        </h2>

        <p className="text-sm text-center text-gray-500 dark:text-slate-400 mt-1">
          {t("Everything you need to host a perfect event with comfort, luxury, and style.")}
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:overflow-y-hidden md:overflow-x-auto gap-4 md:flex-row md:py-4 scrollbar-none">

        {EventAmenities.map((item) => (
          <Card key={item.id}>

            {/* IMAGE */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={t(item.name)}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {t(item.name)}
              </h3>

              <p className="text-sm text-gray-600 dark:text-slate-400 mt-2">
                {t(item.description)}
              </p>
            </div>

          </Card>
        ))}

      </div>
    </section>
  );
};

export default EventAmenity;