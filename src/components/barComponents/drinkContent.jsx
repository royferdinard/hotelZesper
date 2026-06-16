import React from 'react'
import { useTranslation } from 'react-i18next';
import LongCard from '../card/longCard'
import { Link } from 'react-router-dom'

function DrinkContent({ drinks }) {

  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        drinks.map((drink, index) => (
          <LongCard key={index}>

            <div className="w-full h-[50%] overflow-hidden">
              <img
                src={drink.image}
                alt={drink.head}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 bg-white dark:bg-gray-900 transition-colors duration-300">

              <h6 className="text-lg text-blue-950 dark:text-blue-300 font-semibold">
                {t(drink.head)}
              </h6>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t(drink.description)}
              </p>

              <div className="flex flex-row items-center justify-between px-0 text-blue-950 dark:text-blue-300 text-sm font-semibold py-2">

                <span className="text-sm">
                  {t("Ksh.")}{drink.price}
                </span>

                <span className="text-sm">
                  {drink.points}{t("pts")}
                </span>

              </div>

              <Link
                to={`/bar/${drink.id}`}
                className="w-full flex items-center justify-center h-9 rounded-md shadow-sm text-sm bg-blue-950 dark:bg-blue-700 text-white transition-all duration-300 hover:bg-blue-900 dark:hover:bg-blue-600"
              >
                {t("Order Now")}
              </Link>

            </div>

          </LongCard>
        ))
      }

    </div>
  )
}

export default DrinkContent