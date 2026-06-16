import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import LongCard from '../card/longCard'

function SpaContent({ service }) {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {service.map((service, index) => (
          <LongCard key={index}>

            <div className="w-full h-[50%] overflow-hidden">
              <img
                src={service.image}
                alt={service.head}
                className='w-full h-full object-cover'
              />
            </div>

            <div className="p-2">

              <h6 className='text-lg text-blue-900 dark:text-blue-300 font-semibold'>
                {t(service.head)}
              </h6>

              <p className='text-sm text-gray-600 dark:text-gray-300'>
                {t(service.description)}
              </p>

              <div className="flex flex-row items-center justify-between text-blue-900 dark:text-blue-300 text-sm font-semibold py-2">
                <span>{t("Ksh.")} {service.price}</span>
                <span>{t(service.duration)}</span>
              </div>

              <Link
                to={`/spa/${service.id}`}
                className='w-full flex flex-col items-center justify-center h-9 rounded-md shadow-sm text-sm bg-blue-900 dark:bg-blue-700 text-white transition-all duration-300 hover:bg-blue-900'
              >
                {t("Book Now")}
              </Link>

            </div>

          </LongCard>
        ))}

      </div>
    </>
  )
}

export default SpaContent