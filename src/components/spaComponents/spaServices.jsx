import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import Services from './spaStore'
import LongCard from '../card/longCard'

function BestSpaServices() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="py-8 px-4 flex flex-col items-center justify-center dark:bg-slate-900">

        <div className="pb-6">
          <h1 className='text-xl text-blue-900 dark:text-blue-400 text-center font-bold'>
            {t("Best Spa Services")}
          </h1>

          <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
            {t("Explore our most loved spa treatments for complete relaxation.")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-nowrap overflow-y-hidden overflow-x-auto md:justify-start md:items-start py-4 scrollbar-none">

          {Services.map((service, index) => (
            <LongCard key={index}>

              <div className="w-full h-[50%] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.head}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className="p-2 ">

                <h6 className='text-lg text-blue-900 dark:text-blue-400 font-semibold'>
                  {t(service.head)}
                </h6>

                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  {t(service.description)}
                </p>

                <div className="flex flex-row items-center justify-between text-blue-900 dark:text-blue-300 text-sm font-semibold py-2">
                  <span>{t("Ksh.")} {service.price}</span>
                  <span>{t(service.duration)} {""} {t('mins')}</span>
                </div>

                <Link
                  to={`/spa/${service.id}`}
                  className='w-full flex flex-col items-center justify-center h-9 rounded-md shadow-sm text-sm bg-blue-900 dark:bg-blue-700 text-white transition-all duration-300 hover:bg-blue-900 dark:hover:bg-blue-600'
                >
                  {t("Book Now")}
                </Link>

              </div>

            </LongCard>
          ))}

        </div>

        <div className="text-center mt-4">

          <Link
            to="/spaServicesContent"
            className="inline-block bg-blue-900 dark:bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 dark:hover:bg-blue-600 transition shadow-md"
          >
            {t("View All Services")}
          </Link>

        </div>

      </div>
    </>
  )
}

export default BestSpaServices