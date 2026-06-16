import React from 'react'
import { useTranslation } from 'react-i18next';
import MiniCard from '../card/miniCard'

function Why() {

  const { t, i18n } = useTranslation();

  const Services = [
    {
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      head: 'Luxury Spa Treatments',
      description:
        "Experience world-class spa therapies designed to relax your body and restore balance."
    },
    {
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      head: 'Peaceful Atmosphere',
      description:
        "Unwind in a calm, serene environment created for total relaxation and comfort."
    },
    {
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
      head: 'Professional Therapists',
      description:
        "Our certified spa specialists ensure personalized care and premium service."
    },
    {
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      head: 'Wellness & Rejuvenation',
      description:
        "Rejuvenate your mind and body with holistic treatments that refresh your spirit."
    },
  ];

  return (
    <>
      <div className="py-8 px-4 bg-gray-50 dark:bg-slate-800">

        <div className="pb-6">

          <h1 className='text-xl text-blue-600 dark:text-blue-400 text-center font-bold'>
            {t("Why Choose Our Spa")}
          </h1>

          <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
            {t("Experience luxury spa treatments, relaxation, and complete wellness.")}
          </p>

        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-nowrap overflow-y-hidden overflow-x-auto md:justify-start md:items-start py-4 scrollbar-none">

          {Services.map((service, index) => (
            <MiniCard key={index}>

              <div className="w-full h-[50%] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.head}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className="p-2">

                <h6 className='text-md text-blue-600 dark:text-blue-400 font-semibold'>
                  {t(service.head)}
                </h6>

                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  {t(service.description)}
                </p>

              </div>

            </MiniCard>
          ))}

        </div>

      </div>
    </>
  )
}

export default Why