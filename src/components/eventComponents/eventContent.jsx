import React from 'react'
import { useTranslation } from 'react-i18next';
import Events from './evntsStore'
import Card from '../card/card'
import { Link } from 'react-router-dom'

function EventContent({ events }) {

  const { t, i18n } = useTranslation();

  return (
    <>
      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">

        {events.map((event) => (
          <Card key={event.id} className="">

            <div className="bg-white dark:bg-slate-900 w-full overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full rounded-lg border border-gray-100 dark:border-slate-800">

              {/* IMAGE */}
              <div className="w-full h-[50%] overflow-hidden shrink-0">
                <img
                  src={event.image}
                  alt={t(event.name)}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col grow">

                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {t(event.name)}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 grow">
                  {t(event.description)}
                </p>

                {/* ACTIONS */}
                <div className="mt-3 flex gap-3">

                  <Link
                    to={`/events/${event.id}`}
                    className="flex-1 text-center bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                  >
                    {t("Book Event")}
                  </Link>

                  <Link
                    to={`/events/${event.id}`}
                    className="flex-1 text-center border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-800 transition"
                  >
                    {t("View Details")}
                  </Link>

                </div>

              </div>

            </div>

          </Card>
        ))}

      </div>
    </>
  )
}

export default EventContent