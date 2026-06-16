import React from "react";
import { useTranslation } from 'react-i18next';
import RoomAmenities from "./amenitiesStore";
import Card from "../card/card";

const RoomAmenity = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-white dark:bg-gray-900 pt-10 pb-6 px-4 md:px-4 transition-colors">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-8">

        <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span className="text-black dark:text-white">{t("Room")}</span> {t("Amenities")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
          {t("Enjoy modern comfort and luxury features designed to make your stay relaxing and memorable.")}
        </p>

      </div>

      {/* GRID / SCROLL */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 overflow-x-auto md:overflow-visible md:flex-wrap justify-start md:justify-center scrollbar-none">

        {RoomAmenities.map((item) => (
          <Card key={item.id}>

            {/* IMAGE */}
            <div className="h-48 w-full overflow-hidden rounded-t-lg">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-4">

              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {t(item.name)}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {t(item.description)}
              </p>

            </div>

          </Card>
        ))}

      </div>

    </section>
  );
};

export default RoomAmenity;