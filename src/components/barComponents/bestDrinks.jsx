import React from "react";
import { useTranslation } from "react-i18next";
import LongCard from "../card/longCard";
import { Link } from "react-router-dom";
import Drinks from "./drinkStore";

function BestDrinks() {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-4 flex flex-col items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">

      {/* HEADER */}
      <header className="pb-6">
        <h1 className="text-xl text-blue-950 dark:text-blue-300 text-center font-bold">
          {t("Best Drinks")}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
          {t("View the most ordered drinks in our store")}
        </p>
      </header>

      {/* DRINK LIST */}
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-nowrap overflow-y-hidden overflow-x-auto md:justify-start md:items-start py-4 scrollbar-none w-full">

        {Drinks.map((drink, index) => (
          <LongCard key={index}>

            {/* IMAGE */}
            <div className="w-full h-[50%] overflow-hidden">
              <img
                src={drink.image}
                alt={drink.head}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3">

              <h6 className="text-lg text-blue-950 dark:text-blue-300 font-semibold">
                {t(drink.head)}
              </h6>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t(drink.description)}
              </p>

              {/* PRICE + POINTS */}
              <div className="flex items-center justify-between text-blue-950 dark:text-blue-300 text-sm font-semibold py-2">
                <span>
                  {t("Ksh.")} {drink.price}
                </span>

                <span>
                  {drink.points} {t("pts")}
                </span>
              </div>

              {/* BUTTON */}
              <Link
                to={`/bar/${drink.id}`}
                className="w-full flex items-center justify-center h-9 rounded-md text-sm bg-blue-950 dark:bg-blue-600 text-white hover:bg-blue-900 dark:hover:bg-blue-500 transition-all duration-300"
              >
                {t("Order Now")}
              </Link>

            </div>

          </LongCard>
        ))}

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="text-center mt-6">
        <Link
          to="/barDrink"
          className="inline-block bg-blue-950 dark:bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 dark:hover:bg-blue-500 transition shadow-md"
        >
          {t("View All Drinks")}
        </Link>
      </div>

    </section>
  );
}

export default BestDrinks;