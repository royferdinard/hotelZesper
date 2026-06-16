import React from "react";
import { useTranslation } from 'react-i18next';
import Events from "./evntsStore";
import { Link } from "react-router-dom";
import Card from "../card/card";

const FeaturedEvents = () => {

    const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-800 pt-4 py-8 px-4 md:px-4">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 font-sans">
          {t("Featured Events")}
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm leading-relaxed font-sans">
          {t("Explore our handpicked featured events designed to deliver exceptional experiences, entertainment, and unforgettable moments. Join us and enjoy world-class hospitality tailored to your needs.")}
        </p>
      </div>

      {/* GRID */}
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-start gap-4 justify-center overflow-y-hidden overflow-x-auto scrollbar-none py-4">
        {Events.map((event) => (
          <Card key={event.id}>
            <div className="bg-white dark:bg-gray-800 w-full overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full rounded-lg">

              {/* IMAGE */}
              <div className="w-full h-[50%] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col grow">

                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {t(event.name)}
                </h3>

                <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 grow">
                  {t(event.description)}
                </p>

                {/* ACTIONS */}
                <div className="mt-3 flex gap-3">

                  <Link
                    to={`/events/${event.id}`}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    {t("Book Event")}
                  </Link>

                  <Link
                    to={`/events/${event.id}`}
                    className="flex-1 text-center border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  >
                    {t("View Details")}
                  </Link>

                </div>

              </div>

            </div>
          </Card>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="w-full flex justify-center items-center">
        <Link
          to="/hotelEvents"
          className="mt-8 flex bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base w-44 h-10 items-center justify-center border-2 border-blue-600 dark:border-blue-400"
        >
          {t("View All Events")}
        </Link>
      </div>

    </section>
  );
};

export default FeaturedEvents;