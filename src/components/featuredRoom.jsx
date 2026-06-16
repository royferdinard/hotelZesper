import React from "react";
import { useTranslation } from 'react-i18next';
import Cards from "./card/card";
import Rooms from "./jsComponents/roomStore";
import { Link } from "react-router-dom";

const FeaturedRoom = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-gray-50 dark:bg-slate-800  py-8 px-4 md:px-4">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">

        <h2 className="text-2xl md:text-2xl font-bold text-blue-600 dark:text-blue-600 font-sans">
          {t("Featured Rooms")}
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300 md:text-sm text-sm leading-relaxed font-sans">
          {t("Discover our most popular room types, designed to provide the perfect blend of comfort, luxury, and style for your stay at Hotel Zesper.")}
        </p>

      </div>

      {/* GRID */}
      <div className="w-full flex flex-no-wrap gap-4 justify-center flex-col md:flex-row">

        {Rooms.map((room) => (
          <Cards key={room.id}>

            <div className="bg-white dark:bg-slate-800 w-full overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">

              {/* IMAGE */}
              <div className="w-full h-[50%] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col grow">

                <h3 className="text-lg font-sans font-semibold text-blue-600 dark:text-blue-600">
                  {t(room.name)}
                </h3>

                <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 grow">
                  {t(room.description)}
                </p>

                {/* ACTIONS */}
                <div className="mt-2 flex gap-3">

                  <Link
                    to={`/rooms/${room.id}`}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    {t("Book Now")}
                  </Link>

                  <Link
                    to={`/rooms/${room.id}`}
                    className="flex-1 text-center border-2 border-blue-600 text-blue-600 dark:text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-700 transition"
                  >
                    {t("View Details")}
                  </Link>

                </div>

              </div>

            </div>

          </Cards>
        ))}

      </div>

      <div className="w-full flex justify-center items-center">

        <Link
          to="/rooms"
          className="mt-8 flex bg-transparent hover:bg-blue-50 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base w-40 h-10 items-center justify-center border-2 border-blue-600 dark:border-blue-600"
        >
          {t("View All Rooms")}
        </Link>

      </div>

    </section>
  );
};

export default FeaturedRoom;